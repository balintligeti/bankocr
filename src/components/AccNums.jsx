import {React, useEffect, useState} from 'react'
import Modulus from './Modulus'
export default function AccNums(props) {

    const codes = {
        '0': ' _ ' +
             '| |' +
             '|_|',
        '1': '   ' +
             '  |' +
             '  |',
        '2': ' _ ' +
             ' _|' +
             '|_ ',
        '3': ' _ ' +
             ' _|' +
             ' _|',
        '4': '   ' +
             '|_|' +
             '  |',
        '5': ' _ ' +
             '|_ ' +
             ' _|',
        '6': ' _ ' +
             '|_ ' +
             '|_|',
        '7': ' _ ' +
             '  |' +
             '  |',
        '8': ' _ ' +
             '|_|' +
             '|_|',
        '9': ' _ ' +
             '|_|' +
             ' _|'
      }

      const parseInputText = (file) => {
        console.log(file)
        const returnText = file;

        const lenOfStr = returnText.substr(0, returnText.indexOf('\n')).length; 
        const inputText = returnText.split("\n").join("");
        const list = [inputText.slice(0,lenOfStr),inputText.slice(lenOfStr,lenOfStr * 2),inputText.slice(lenOfStr * 2,lenOfStr * 3)]
      
        let inputTextNumber = ""; 
        
        for (let i = 0; i < lenOfStr; i += 3) {
           inputTextNumber += Object.keys(codes).find(key => 
             codes[key] === 
            list[0][i] + list[0][i+1] + list[0][i+2] +
            list[1][i] + list[1][i+1] + list[1][i+2] +
            list[2][i] + list[2][i+1] + list[2][i+2]);
        }
        const inputTextNumWithQuestioner = inputTextNumber.split("undefined").join("?");
        return inputTextNumWithQuestioner;
        
      }

    return (
        <div>
            <p>{parseInputText(props.text)}</p>
            <Modulus stringInt={parseInputText(props.text)} />
        </div>
    )
}
