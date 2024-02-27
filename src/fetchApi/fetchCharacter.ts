import { useQuery } from "@tanstack/react-query";
import api from "../utils/axiosUtils";

//!Qeury function for get characters
const fetchCharacters=async(page:number,name:string,status:string,gender:string)=>{
    const data=await api.get(`/character`,{params:{page,name,status,gender}})
    return data
  }

  export const useCharacters=(page:number,name:string,status:string,gender:string)=>{
   return  useQuery({
    queryKey: ['characters',page,name,status,gender],
    queryFn:()=> fetchCharacters(page,name,status,gender),
    refetchOnMount:true,
    refetchOnReconnect:true,
    refetchOnWindowFocus:true,
    
  });
}

//!Qeury function for get one character

const fetchCharacter=async(paramId:string)=>{
    const data=await api.get(`character/${paramId}`)
    return data
  }

export const useCharacter=(paramId:string)=>{
    return useQuery({
    queryKey: ['characters',paramId],
    queryFn:()=> fetchCharacter(paramId!),
  });
}

//!Qeury function for get one epidoses of a character
const fetchCharacterEpisodes=async(episodes:string[])=>{
  const data=await api.get(`/episode/${episodes}`)
  return data
}
export const useCharacterEpisodes=(episodesArray:string[])=>{
  return useQuery({
    queryKey: ['characterEpisodes',episodesArray],
    queryFn:()=> fetchCharacterEpisodes(episodesArray),
    enabled:episodesArray.length>0
  });
}
