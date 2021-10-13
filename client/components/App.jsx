import React, { useState, useEffect } from 'react'


function App () {

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type='checkbox' checked={value} onChange={onChange} />
        {label}
      </label>
    )
  }  



  return (
    <>
      <div className='form'>
      <h2>Contact form</h2>
      <form>
        <label>Email:</label>
        <input 
          type='email'
          id='email'
          name='email'
          //value='{handleChange}'
        />
        <label>Password:</label>
        <input 
          type="password"
          pattern=".{8,}"
          id='password'
          name='password'
          //value='{handleChange}'
        />
        <label>Colour:
          <select name='colour'>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
            <option value='red'>Red</option>
            <option value='black'>Black</option>
            <option value='brown'>Brown</option>
          </select>
        </label>
        <div>
          <Checkbox 
            label='Bear'
            // value={checked}
            // onChange={onChange}
            />
            <Checkbox 
            label='Tiger'
            // value={checked}
            // onChange={onChange}
            />
            <label>Type of tiger:</label>
            <input 
              type='tigerType'
              id='tigerType'
              name='tigerType'
              //value='{handleChange}'
            />

            <Checkbox 
            label='Snake'
            // value={checked}
            // onChange={onChange}
            />
            <Checkbox 
            label='Donkey'
            // value={checked}
            // onChange={onChange}
            />
        </div>
      </form>
      </div>
    </>
  )
}


export default App