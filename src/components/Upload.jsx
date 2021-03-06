import ReactFileReader from 'react-file-reader';
import { Link } from "react-router-dom";
import {React, useState} from 'react'
import AccNums from './AccNums';

export default function Upload() {

    const [file,setFile] =useState("")
    
      const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          setFile(text)
        };
        reader.readAsText(e.target.files[0])
      }
    

    
        return (<div>
          <input type="file" onChange={(e) => showFile(e)} />
          <AccNums text={file} />
          <Link to="/Results">Results</Link>

        </div>
        )
      
}    
