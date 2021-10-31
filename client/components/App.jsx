import React, { useState } from 'react'


function App () {
  
  const [userData, setNewUser] = useState ({
    email: '',
    password: '',
  })

  const [newColour, setColour] = useState ('blue')


  // const [checked, setChecked] = useState (false)
  const [newAnimals, setAnimals] = useState ({
    bear: false,
    tiger: false,
    snake: false,
    donkey: false
  })


  const [tigerType, setType] = useState ('')

  const handleChange = (e) => {
    e.preventDefault()
    setNewUser({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleColour = (e) => {
    e.preventDefault()
    setColour(e.target.value)
  }

  const handleAnimals = (e) => {
    setAnimals({
      ...newAnimals,
      [e.target.name]: e.target.checked
    })
  }

  const handleType = (e) => {
    e.preventDefault()
    setType(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your information has been sent off into the void')

  }



  const { email, password } = userData
  const { bear, tiger, snake, donkey } = newAnimals

  return (
    <>
      <div className='form'>
      <h2>Contact form</h2>
      <form>
      <div className='eachLine'>
        <label for='email'>Email:</label>
        <input 
          type='email'
          placeholder='Email'
          id='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <label for='password'>Password:</label>
        <input 
          type="password"
          placeholder='minimum 8 characters'
          pattern=".{8,}"
          id='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        </div>
        <div className='eachLine'>
        <label for='colour'>Colour:
          <select name='colour' id='colour' onChange={handleColour}>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
            <option value='red'>Red</option>
            <option value='black'>Black</option>
            <option value='brown'>Brown</option>
          </select>
        </label>
        </div>
        <div className='eachLine'>
          <label> Pick your favourite animals:</label>
        </div>
        <div className='animalCheckbox'>
          <input
          type='checkbox' 
          label='Bear'
          name='bear'
          id='bear'
          checked={bear}  
          onChange={handleAnimals}
          />
         <label for='bear'>Bear</label>
        </div>
        <div className='animalCheckbox'>
            <input
            type='checkbox' 
            name='tiger'
            id='tiger'
            checked={tiger}
            onChange={handleAnimals}
            />
            <label for='tiger'>Tiger</label>
            <div>
            {(newAnimals.tiger === false) ? null :
          <>
            <input 
              type='tigerType'
              placeholder='Type of tiger'
              autoComplete='off'
              id='tigerType'
              name='tigerType'
              value={tigerType}
              onChange={handleType}
              required
            />
          </>}
          </div>
        </div>
        <div className='animalCheckbox'>
            <input
            type='checkbox' 
            label='Snake'
            name='snake'
            id='snake'
            checked={snake}
            onChange={handleAnimals}
            />
            <label for='snake'>Snake</label>
        </div>
        <div className='animalCheckbox'>
            <input
            type='checkbox' 
            label='Donkey'
            name='donkey'
            id='donkey'
            checked={donkey}
            onChange={handleAnimals}
            />
           <label for='donkey'>Donkey</label>
        </div>
          <div className='eachLine'>
          <button onSubmit={handleSubmit}>
            Send off into the void
          </button>
        </div>
      </form>
      </div>
    </>
  )
}


export default App