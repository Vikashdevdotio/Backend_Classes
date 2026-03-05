import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SongContext = createContext()

export const SongContextProvider = ({children}) =>{
      const [song, setSong] = useState({
  "url": "https://ik.imagekit.io/Vikas16/cohort-2/moodify/songs/Singham_Again_Title_Track__From__Singham_Again___oTjdcr0r5.mp3",
  "posterUrl": "https://ik.imagekit.io/Vikas16/cohort-2/moodify/posters/Singham_Again_Title_Track__From__Singham_Again___cRszY06FG.jpeg",
  "title": "Singham Again Title Track (From \"Singham Again\")",
  "mood": "happy",
  "__v": 0
})

const [loading, setLoading] = useState(false)

   return (
      <SongContext.Provider value={{loading, setLoading, song, setSong}}>
         {children}
      </SongContext.Provider>
   )
}