import { ResultsContext } from './contexts/ResultsContext'
import {React, useContext} from "react";
import { Link } from "react-router-dom";


export default function Results(props) {
    const context = useContext(ResultsContext);


    return (
        <div>
            {context.results.length > 0 ? <p>{context.results.map((item, index) => (<p key={index}>{item}</p>))}</p> : <p>Default Markup</p>}
            <Link to="/">Results</Link>
        </div>
    )
}
