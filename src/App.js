import React, { useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import logo from './logo.svg'
import './App.css'

function App() {
  useEffect(() => {
    const signIn = async () => {
      let token = localStorage.getItem('token')
      if (!token) {
        const login = await axios.post('http://localhost:3001/users/login', {
          email: 'tuliofaria@devpleno.com',
          passwd: 'abc123',
        })
        token = login.data.token
        localStorage.setItem('token', token)
      }
      const decoded = jwtDecode(token)
      console.log(decoded)
    }
    signIn()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
