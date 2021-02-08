import ReactFileReader from 'react-file-reader';

import {React, useState} from 'react'

export default function Upload() {
    const [file,setFile] = useState()
    
    const handleFiles = files => {
        setFile(files.base64);
      }
    
        return(
          <div className="files">
            <ReactFileReader handleFiles={handleFiles}>
              <button className='btn'>Upload</button>
            </ReactFileReader>
    
            <p>Read</p>
            <iframe src={file} frameBorder="0" height="400" width="50%" />
          </div>
        )
}
