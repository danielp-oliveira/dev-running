import React, { useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import Header from './components/Header'

import './App.css'

import store from './redux'
import { Provider } from 'react-redux'

function App() {
  // useEffect(() => {
  //   const login = async () => {
  //     let token = localStorage.getItem('token')
  //     if (!token) {
  //       const login = await axios.post('http://localhost:3001/users/login', {
  //         email: 'tuliofaria@devpleno.com',
  //         passwd: 'abc123',
  //       })
  //       token = login.data.token
  //       localStorage.setItem('token', token)
  //     }
  //     const decoded = jwtDecode(token)
  //     console.log(decoded)
  //   }

  //   const me = async () => {
  //     const token = localStorage.getItem('token')
  //     console.log(token)
  //     const { data } = await axios.get('http://localhost:3001/users/me', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     console.log(data)
  //   }

  //   login()
  //   me()
  // }, [])

  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
      </div>
    </Provider>
  )
}

export default App
