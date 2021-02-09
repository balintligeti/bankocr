import { ResultsContext } from './contexts/ResultsContext'
import {React, useContext} from "react";
import { Link } from "react-router-dom";


export default function Results(props) {
    const context = useContext(ResultsContext);
    const resultNumLen = 14

    const calculateChecksum = (strNum) => {
        const reversed = strNum.split('').reverse().join('');
        let counter = 1;
        let addNums = 0
        reversed.split("").map((character) => {
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

    const fillStr=(string)=>{
        if (string.length < resultNumLen) {
            const spaceNeed = resultNumLen - string.length;
            return string + ' '.repeat(spaceNeed)
        return string
        }
    }

    return (
        <div>
            {context.results.length > 0 ? <div>{context.results.map((item, index) => (
            <p key={index}>{fillStr(item)} | {status(item)}</p>))}</div> 
             : <p>No account numbers.</p>}
            <Link to="/">Results</Link>
        </div>
    )
}
