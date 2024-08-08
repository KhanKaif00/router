import React from 'react'
import { Navigate

 } from 'react-router-dom'

function Private({isLoggedin,children}) {
    
 
    if(isLoggedin){
        return children
    }
  else {
      return <Navigate  to="/login"/>

  }
  
}

export default Private