import { useQuery } from "@tanstack/react-query";
import api from "../utils/axiosUtils";

//!Qeury function for get episodes
const fetchEpisodes=async(page:number,name:string,episode:string)=>{
    const data=await api.get(`episode`,{ params: {page,name,episode}})
    return data
  }

  export const useEpisodes=(page:number,name:string,episode:string)=>{
   return  useQuery({
    queryKey: ['episodes',page,name,episode],
    queryFn:()=> fetchEpisodes(page,name,episode)
  });
}

//!Qeury function for get characters of a episode
const fetchEpisodeCharacters=async(characters:string[])=>{
    const data=await api.get(`character/${characters}`)
    return data
  }

  export const useEpisodeCharacters=(charactersArray:string[])=>{
   return  useQuery({
    queryKey: ['episodeCharacters',charactersArray],
    queryFn:()=> fetchEpisodeCharacters(charactersArray),
    enabled:charactersArray.length>0
  });
}