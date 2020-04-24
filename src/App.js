import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import Header from './components/Header'

import './App.css'

import store from './redux'
import { Provider } from 'react-redux'

import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import AdminScreen from './screens/Admin'
import RestritoScreen from './screens/Restrito'

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
      <Router>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/admin' component={AdminScreen} />
        <Route path='/restrito' component={RestritoScreen} />
        <Route path='/login' component={LoginScreen} />
        <Header />
        <div className='App'></div>
      </Router>
    </Provider>
  )
}

export default App
