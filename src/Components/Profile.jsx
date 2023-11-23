import React from 'react'
import Adress from './Adress'
import Email from './Email'
import Name from './Name'
import ProfileInfo from './ProfileInfo'
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profilediv'>
        <Email/>
        <Name/>
        <Adress/>
        <ProfileInfo/>
    </div>
    
  )
  
}

export default Profile