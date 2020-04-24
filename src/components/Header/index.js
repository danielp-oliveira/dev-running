import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCreators from '../../redux/actionCreators'

import logo from '../../logo.svg'

const Header = () => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      <Link to='/'>Home</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/restrito'>Restrito</Link>
      <Link to='/login'>Login</Link>
    </p>
  </header>
)

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
