import React from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

const Select = (props) => {
    return (
        <div className="relative">
            <select className="block w-full p-3 px-4 mx-auto mb-4 bg-gray-500 outline-none appearance-none focus:rounded-b-none rounded-2xl" {...props}>
                <option value={1}>Store 1</option>
                <option value={2}>Store 2</option>
                <option value={3}>Store 3</option>
            </select>
                <ThreeDotsVertical className="absolute top-4 right-4" />
        </div>
    )
}

export default Select;
