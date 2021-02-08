import React from 'react'
import { ResultsContext } from './contexts/ResultsContext'
import {useContext, useEffect} from "react";


export default function Results(props) {
    const context=useContext(ResultsContext);

    return (
        <div>
            <p>{context.savedResults.length}</p>
        </div>
    )
}
