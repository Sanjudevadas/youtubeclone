import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className=''>
        <ButtonList/>
         <VideoContainer/>
        <Outlet/>
       
    </div>
  )
}

export default MainContainer