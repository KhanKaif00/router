import React from 'react'
import Template from '../components/Template'

function Signup({setIsLoggedin}) {
  return (
    <div>
      <Template
    title="Join the millions learning to code with Studynotion for free"
    desc1="Build skills for today,tommorow and beyond"
    desc2="education to future-prrof your career"
    formtype="signup"
    setIsLoggedin={setIsLoggedin}
    />
    </div>
  )
}

export default Signup