import React from 'react'

const Login = ( { isLoggedIn }) => {
  return <h1>{isLoggedIn ? "Welcome back" : "Please Log in"}</h1>;
}

export default Login