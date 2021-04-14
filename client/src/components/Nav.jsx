import React, { useState } from 'react';
import { CardList, PlusSquare } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';

const Nav = () => {
    const [isInput, setInput] = useState(true);
    const history = useHistory();

    return (
        <div className="fixed left-0 right-0 flex items-center justify-between h-12 py-7">
            <div className="flex items-center justify-between w-full max-w-2xl px-4 mx-auto">
                <h2>Logo here</h2>
                <nav>
                    {
                        !isInput
                        ? (
                            <div className="inline-block px-4 py-2 pt-1 bg-blue-600 rounded-3xl"
                            onClick={() => {
                                setInput(true);
                                history.push('/');
                            }}
                            >
                                <PlusSquare className="inline-block mr-2" />
                                <p className="inline-block cursor-pointer">Input</p>
                            </div>
                        )
                        : (
                            <div className="inline-block px-4 py-2 pt-1 ml-3 bg-blue-600 rounded-3xl"
                            onClick={() => {
                                setInput(false);
                                history.push('/records');
                            }}
                            >
                                <CardList className="inline-block mr-2" />
                                <p className="inline-block cursor-pointer">Records</p>
                            </div>
                        )
                    }
                </nav>
            </div>
        </div>
    )
}

export default Nav;
