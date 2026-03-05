import React from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player.jsx'
import { useSong } from '../hooks/useSong.js'


const Home = () => {

      const {handleGetSong}=useSong()

  return (
    <div>
      <FaceExpression
      onClick={(expression) =>{handleGetSong({mood:expression})}}
      />
      <Player/>
    </div>
  )
}

export default Home
