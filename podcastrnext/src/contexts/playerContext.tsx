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
  isLooping: boolean;
  isShuffling: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  play: (episode: Episode) => void; // Função play
  setPlayingState: (state: boolean) => void;
  playList: (list: Episode[], index: number) => void; // Lista de episódios
  togglePlay: () => void; // Se tiver play ele desliga, vice versa
  toggleLoop: () => void; // Setar o loop
  toggleShuffle: () => void; // Setar Shuffle
  playNextEpisode: () => void; // Tocar próximo episódio
  playPrevEpisode: () => void; // Tocar episódio anterior
  clearPlayerState: () => void;
}

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
  const [isLooping, setIsLooping] = useState(false); // Loop da playlist
  const [isShuffling, setIsShuffling] = useState(false); // Shuffle da playlist

  function play(episode: Episode) { // Função para manipular as variáveis de estado, recebendo um episódio como parâmetro
    setEpisodeList([episode]); // Muda o valor do episódio
    setCurrentEpisodeIndex(0); // Forçando o valor para 0 caso não esteja
    setIsPlaying(true); // Dando play
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list); // Passando a lista de episódios
    setCurrentEpisodeIndex(index); // Setando qual episódio irá tocar pelo índice
    setIsPlaying(true); // Dando play
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;
  
  function playNextEpisode() {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);

      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevEpisode() {
    const prevEpisodeIndex = currentEpisodeIndex - 1;

    if (prevEpisodeIndex < 0) {
      return;
    }

    setCurrentEpisodeIndex(prevEpisodeIndex);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }
  
  // É preciso que a função play fique aqui para ter acesso aos estados
  // Passo o play como parâmetro para ter acesso a essa função em outro lugar
  return (
    <PlayerContext.Provider 
      value={{
        episodeList, 
        currentEpisodeIndex, 
        isPlaying,
        isLooping,
        isShuffling,
        play, 
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        clearPlayerState,
        playList,
        playNextEpisode,
        playPrevEpisode,
        hasNext,
        hasPrevious,
      }}>
      {children}
    </PlayerContext.Provider>
  );
}
