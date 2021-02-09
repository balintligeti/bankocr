import React from 'react'

export default function Modulus(props) {
    const calculateChecksum = (strNum) => {
        const reversed = strNum.split('').reverse().join('');
        let counter = 1;
        let addNums = 0
        reversed.split("").map((character) => {
            addNums += counter * parseInt(character);
            counter++;
        })
        return addNums % 11 == 0 ? "Valid account number!" : "Invalid account number!";
    }
    return (
        <div>
            <p>{calculateChecksum(props.stringInt)}</p>
        </div>
    )
}
