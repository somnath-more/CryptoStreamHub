import React from 'react'
import './index.css'
export const App=()=>{
  return (
    <>
        <h1>Minet Application</h1>
        <p>This is a Minet application. - {process.env.name}</p>
        <img src={require('../public/assets/images/BitCoin.png')} alt='Logo'/>
    </>

  )
}