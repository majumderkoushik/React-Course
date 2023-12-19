import React from 'react'

function Hello() {
    let myName="Koushik"
    let fullName = () => {
        return 'Koushik Majumder'
    }
    let number= Math.floor(Math.random() *7);
  return (
    <div>
    <h1>Koushik</h1>
        <h3> Hello this is the future speaking {fullName()} {number ===0 ? 1: number}</h3>
    </div>
  )
}

export default Hello