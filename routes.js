const express = require('express');
const xl = require('excel4node');
const router = express.Router();
const pool = require('./db');

router.get('/', async (req, res) => {
    try {
        const resp = await pool.query(`CREATE TABLE customers (
            id BIGSERIAL NOT NULL UNIQUE,
            PRIMARY KEY (id),
            name VARCHAR(150) NOT NULL
        );`)
        console.log(resp)
    } catch(err) {
        console.log(err)
    }

    console.log(resp);
});

router.post('/add', async (req, res) => {
    try {
        const { amount, customer_id, description } = req.body; 
        console.log(amount, customer_id, description)
        let values = [`${amount}`, `${customer_id}`];
        if(description)
            values.push(`${description}`);

        const result = await pool.query(
            `INSERT INTO records (amount, customer_id, description) VALUES ($1, $2, ${description ? '$3': 'null'})`,
            values
        );

        res.send(result);
    } catch(err) {
        res.send({err});
    }
});

router.get('/records', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT records.id, date, name, amount, description FROM records INNER JOIN customers ON customers.id = customer_id`
        );
            
        res.send(result.rows);
    } catch(err) {
        res.send({err})
    }
});

router.post('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const result = await pool.query(
            `DELETE FROM records WHERE id = $1`, [`${id}`]
        );
        console.log(result);
        res.send(result);
    } catch(err) {
        res.send({err});
    }
});

router.get('/download', async (req, res) => {
    try {
        const { rows } = await pool.query(`SELECT date, amount, name FROM records LEFT JOIN customers ON customers.id = customer_id`);
        const workbook = new xl.Workbook();

        const worksheet = workbook.addWorksheet('Sheet 1');

        const style = workbook.createStyle({
            font: {
                size: 12,
                bold: true
            },
        });

        // const newDate = new Date(Date.now());
        // const xl_ts = xl.getExcelTS(newDate);
        // console.log(xl_ts);

        worksheet.cell(1, 1).string('Date').style(style);
        worksheet.cell(1, 2).string('Name').style(style);
        worksheet.cell(1, 3).string('Amount').style(style);

        rows.forEach((data, i) => {
            const xl_ts = xl.getExcelTS(data.date);

            worksheet.cell(i + 2, 1).date(xl_ts);
            worksheet.cell(i + 2, 2).string(data.name);
            worksheet.cell(i + 2, 3).number(data.amount);
        });

        workbook.write('file.xlsx', res);
    } catch(err) {
        res.send({err});
    }
});

module.exports = router;