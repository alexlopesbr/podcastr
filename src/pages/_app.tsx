import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContext } from '../contexts/PlayerContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeList] = useState(0)
  const [isPlaying, setIsPlaiyng] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeList(0)
    setIsPlaiyng(true)
  }

  function togglePlay(){
    setIsPlaiyng(!isPlaying)
  }

  function setPlayingState(state: boolean){
    setIsPlaiyng(state)
  }

  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp;
