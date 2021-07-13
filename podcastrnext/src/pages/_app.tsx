import '../styles/global.scss';
import { useState } from 'react';
import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/playerContext';

function MyApp({ Component, pageProps }) {
  // Criar variáveis de estado para alterar informações na interface
  const [episodeList, setEpisodeList] = useState([]); // Para alterar o valor dos episódios
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0); // O índice do episódio

  function play(episode) { // Função para manipular as variáveis de estado, recebendo um episódio como parâmetro
    setEpisodeList([episode]); // Muda o valor do episódio
    setCurrentEpisodeIndex(0); // Forçando o valor para 0 caso não esteja
  }
  // É preciso que a função play fique aqui para ter acesso aos estados
  // Passo o play como parâmetro para ter acesso a essa função em outro lugar
  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
