import React, { useEffect, useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import DL from './DL';
import axios from 'axios';

const Records = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        requestData();
    }, []);

    const requestData = () => {
        axios.get('/records')
        .then(res => {
            console.log(res)
            setData(res.data);
        });
    }

    const deleteRecord = (id) => {
        if(window.confirm('Are you sure you want to delete this record?')) {
            axios.post('/delete', { id });
            requestData();
        }
    }

    return (
        <div className="max-w-2xl pt-12 mx-auto">
            <h2 className="mt-4 mb-5 text-3xl font-bold">Records</h2>
            {
                data.map(d => (
                    <div 
                        className="flex items-center justify-between p-4 mb-4 bg-blue-600 rounded-xl"
                        onClick={() => deleteRecord(d.id)}
                    >
                        <span>
                            <h4>P{d.amount}</h4>
                            <h5>{d.name}</h5>
                        </span>
                        <span>
                            <Trash size={20}/>
                        </span>
                    </div>
                ))
            }
            <DL />
        </div>
    )
}

export default Records;
