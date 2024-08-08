import React from 'react'
import Template from '../components/Template'

function Login({setIsLoggedin}) {
  return (
    <Template
    title="Welcome back"
    desc1="Build skills for today,tommorow and beyond"
    desc2="education to future-prrof your career"
    formtype="login"
    setIsLoggedin={setIsLoggedin}
    />
  )
}

export default Login