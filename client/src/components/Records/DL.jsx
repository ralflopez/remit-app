import axios from 'axios';
import React from 'react'
import { FileEarmarkArrowDown } from 'react-bootstrap-icons';
import FileDownload from 'js-file-download';

const DL = () => {

    const download = () => {
        axios.get('/download', {
            responseType: 'blob'
        })
        .then((res) => {
            FileDownload(res.data, 'file.xlsx')
        })
    }

    return (
        <div 
            className="fixed flex items-center justify-center w-12 h-12 bg-red-400 rounded-full bottom-5 right-6"
            onClick={download}
        >
            <FileEarmarkArrowDown size={25}/>
        </div>
    )
}

export default DL
