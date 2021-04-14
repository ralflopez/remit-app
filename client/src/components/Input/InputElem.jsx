import React from 'react';

const InputElem = (props) => {
    return (
        <>
            <input 
                className="block w-full p-3 px-4 mx-auto mb-4 bg-gray-500 outline-none rounded-2xl"
                {...props}
            />
        </>
    )
}

export default InputElem;
