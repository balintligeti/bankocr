import { ResultsContext } from './contexts/ResultsContext'
import {React, useContext} from "react";
import { Link } from "react-router-dom";


export default function Results(props) {
    const context = useContext(ResultsContext);

    const calculateChecksum = (strNum) => {
        const reversed = strNum.split('').reverse().join('');
        let counter = 1;
        let addNums = 0
        reversed.split("").map((character) => {
            console.log(character)
            addNums += counter * parseInt(character);
            counter++;
        })
        return addNums % 11 == 0 ? true : false;
    }

    const status = (item) => {
        if (item == "") return ''
        if (item.includes('?')) return 'ILL';
        if (calculateChecksum(item)) return 'OK';
        return 'ERR'
    }

    return (
        <div>
            {context.results.length > 0 ? <p>{context.results.map((item, index) => (
            <p key={index}>{item} | {status(item)}</p>))}</p> 
             : <p>No account numbers.</p>}
            <Link to="/">Results</Link>
        </div>
    )
}
