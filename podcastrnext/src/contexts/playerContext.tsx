import { createContext, useState, ReactNode } from 'react';

type Episode = { // Dados que serão úteis para o context
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[]; // Array de episódios
  currentEpisodeIndex: number; // Episódio que está tocando no momento
  isPlaying: boolean; // Se está tocando ou não
  play: (episode: Episode) => void; // Função play
  togglePlay: () => void; // Se tiver play ele desliga, vice versa
  setPlayingState: (state: boolean) => void; //
};

type PlayerContextProviderProps = {
  children: ReactNode; // Qualquer coisa que o react aceitaria como conteúdo JSX
}

/* 
Criando o context e passando como parâmetro um objeto vazio com uma 
atribuição de tipagem (PlayerContextData)
*/
export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({ children } : PlayerContextProviderProps) {
  // Criar variáveis de estado para alterar informações na interface
  const [episodeList, setEpisodeList] = useState([]); // Para alterar o valor dos episódios
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0); // O índice do episódio
  const [isPlaying, setIsPlaying] = useState(false); // Demarcar se o audio está tocando ou não

  function play(episode: Episode) { // Função para manipular as variáveis de estado, recebendo um episódio como parâmetro
    setEpisodeList([episode]); // Muda o valor do episódio
    setCurrentEpisodeIndex(0); // Forçando o valor para 0 caso não esteja
    setIsPlaying(true); // Dando play
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }
  
  // É preciso que a função play fique aqui para ter acesso aos estados
  // Passo o play como parâmetro para ter acesso a essa função em outro lugar
  return (
    <PlayerContext.Provider 
      value={{
        episodeList, 
        currentEpisodeIndex, 
        play, 
        isPlaying, 
        togglePlay, 
        setPlayingState,
      }}>
      {children}
    </PlayerContext.Provider>
  );
}
