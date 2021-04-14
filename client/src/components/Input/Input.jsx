import axios from 'axios';
import React, { useState } from 'react';
import InputElem from './InputElem';
import Select from './Select';

const Input = () => {
    const [customerId, setCustomerId] = useState(1);
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState('');

    const addData = () => {
        axios.post('/add', {
            amount: amount, 
            customer_id: customerId, 
            description: description
        })
        .then((r) => {
            console.log(r)
            alert('Added successfully');
        })
        .catch(() => {
            alert('Failed to Add');
        });
    }

    return (
        <div className="pt-5 text-center">
            <h2 className="mb-5 text-3xl font-bold">Input</h2>
            <form className="w-full text-center">
                <Select
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
                <InputElem 
                    placeholder="Amount" 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <InputElem 
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button 
                    type="button" 
                    className="px-4 py-2 mt-2 bg-blue-600 rounded-3xl"
                    onClick={addData}
                >Add</button>
            </form>
        </div>
    )
}

export default Input;
