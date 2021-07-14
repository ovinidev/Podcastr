import { createContext } from 'react';

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
  isPlaying: boolean;
  play: (episode: Episode) => void; // Função play
  togglePlay: () => void; // Se tiver play ele desliga, vice versa
  setPlayingState: (state: boolean) => void; //
};

/* 
Criando o context e passando como parâmetro um objeto vazio com uma 
atribuição de tipagem (PlayerContextData)
*/
export const PlayerContext = createContext({} as PlayerContextData);
