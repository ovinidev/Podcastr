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
  play: (episode: Episode) => void; // Função play
};

/* 
Criando o context e passando como parâmetro um objeto vazio com uma 
atribuição de tipagem (PlayerContextData)
*/
export const PlayerContext = createContext({} as PlayerContextData);
