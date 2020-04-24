import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

const Home = () => <h1>Home admin</h1>
const Users = () => <h1>Users admin</h1>

const AdminScreen = (props) => (
  <div>
    <h1>AdminScreen</h1>
    <p>
      <Link to='/admin'>Home</Link>
      <Link to='/admin/users'>Users</Link>
    </p>
    <div>
      <Switch>
        <Route path={`${props.match.path}/`} exact component={Home} />
        <Route path={`${props.match.path}/users`} component={Users} />
      </Switch>
    </div>
  </div>
)

export default AdminScreen
