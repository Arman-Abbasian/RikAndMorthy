import Pagination from '@mui/material/Pagination';
import queryString from 'query-string'
import { Link, Navigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import  { IReactSelectOption } from '../components/FilterComponents/ReactSelectFilter';
import { AxiosError } from 'axios' ;
import {useCharacters} from '../fetchApi/fetchCharacter';
import api from "../utils/axiosUtils";
import {motion} from 'framer-motion'


interface ISearchParams{
  page:number;
  name?:string;
  status?:string;
  gender?:string;
}

const loadPageWithAnimation={
  initial:{x:'100vw',opacity:0},
  animate:{x:'0vw',opacity:1,transition:{duration:1.5}}
}

function Characters() {

  //! initial filter query string =>is used when user back to website after a while
  const initialStatus:string= localStorage.getItem("statusFilter") ? localStorage.getItem("statusFilter")! :"";
  const initialGender:string= localStorage.getItem("genderFilter") ? localStorage.getItem("genderFilter")! :"";

  //! 3 state to handle the change of 3 querystring filter 
  const [page,setPage]=useState<number>(1);
  const [name,setName]=useState<string>("");
  const [statusFilter,setStatusFilter]=useState<string>(initialStatus);
  const [genderFilter,setGenderFilter]=useState<string>(initialGender);
  //const [reactSelectOption,setReactSelectOption]=useState<OptionsOrGroups<IReactSelectOption, GroupBase<IReactSelectOption>>>([]);
  //!this useEffect handle the change of all pages when change the status and gender state
  //!and setPages to 1 for pretend the error
useEffect(()=>{
  setPage(1)
},[name,statusFilter,genderFilter])

//!store the changes of statusFilter & genderFilter states in localStorage
  if(statusFilter){
    localStorage.setItem("statusFilter",statusFilter)
  }else {
    localStorage.removeItem("statusFilter")
  }
  if(genderFilter){
    localStorage.setItem("genderFilter",genderFilter)
  }else localStorage.removeItem("genderFilter")
  const searchParams:ISearchParams={page:page};
  if(name) searchParams.name=name;
  if(statusFilter) searchParams.status=statusFilter
  if(genderFilter) searchParams.gender=genderFilter

  //! queryFilters is all the queryString that we want to stick to the url
  const queryFilters:string=queryString.stringify(searchParams);
  
  //! useQuery function for characters
  const { isLoading, isError, data,error:charactersError } = useCharacters(page,name,statusFilter,genderFilter)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event)
    setPage(value)
  };

  //!-------------------
useEffect(()=>{
  api.get("character?page=10")
  .then(({data})=>{
    const names=(data?.results.map((item:ICharacter)=>{
      return {label:item.name,value:item.name}
    }))
    console.log(names)
  }).catch(err=>console.log(err))
},[])


  //!-------------------
  // useEffect(()=>{
  //   api.get("character")
  //   .then(({data})=>{
  //     const characters:ICharacter[]=data.results
  //     setReactSelectOption(characters.map(item=>({label:item.name,value:item.name}))) 
  //   })
  // },[])

const chnageReaceSelectHandler=(e:unknown)=>{
 setName(( e as IReactSelectOption).value)
}

return (
    <motion.div  variants={loadPageWithAnimation} initial="initial" animate="animate">
      <FilterCharacter value={name}
      options={characterNamesList} chnageReaceSelectHandler={chnageReaceSelectHandler}
      genderFilter={genderFilter} setGenderFilter={setGenderFilter} 
      statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      {isLoading ? <div className='w-full flex justify-center items-center'><Loader  size={50} /></div >
      :isError && charactersError instanceof AxiosError ? <div>{toast.error(charactersError?.response?.data.error)}</div> 
      :data && <div>
      <Navigate to={`/characters/?${queryFilters}`} />
    <div className='container mx-auto max-w-5xl'>
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      {data.data.results.map((item:ICharacter)=>{
        return <Character key={item.id} character={item} /> 
      })}
      </div>
    </div>

      <div className='flex justify-center items-center mt-16'>
    <Pagination color="primary" MuiPaginationItem-textSecondary count={data.data.info.pages} page={page} onChange={handleChange} />
      </div>
    </div>
    }
      </motion.div>
  )
}

export default Characters







//! one character item
import { FcBusinesswoman, FcBusinessman,FcQuestions  } from "react-icons/fc";
import { FaGenderless } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { ICharacter } from "../generalTypes";
import { useEffect, useState } from 'react'
import FilterCharacter from '../components/Layout/FilterCharacter';
import Loader from '../components/Loader';
import { characterNamesList } from '../api';



interface IProps{
  character:ICharacter
}
const hoverCharacter={
  scale:1.13,
  transition:{duration:0.5,type:'spring',stiffness:200}
}
function Character({character}:IProps) {
  return (
    <motion.div whileHover={hoverCharacter} className='flex h-20 w-80 rounded-md overflow-hidden text-xs bg-color-secondary'>
      {/*! image section */}
      <div>
        <img className='w-full h-full object-cover' src={character.image} alt={character.name} />
      </div>
      {/*! info section */}
      <div className='flex-1 flex justify-between items-center px-3'>
        <div className='flex-1 flex flex-col justify-between gap-5'>
        <div className='flex gap-1 items-center'>
          {character.gender==="Male"?<FcBusinessman className="mobile-icon hover:cursor-pointer"/>
          :character.gender==="Female"?<FcBusinesswoman className="mobile-icon hover:cursor-pointer"/>
          :character.gender==="Genderless"?<FaGenderless className="mobile-icon hover:cursor-pointer"/>
          :<FcQuestions className="mobile-icon hover:cursor-pointer"/>
          }
          <p className={`text-ellipsis overflow-hidden`}>{character.name.length>20 ? character.name.substring(0,20)+"...":character.name}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <span className={`w-[1rem] h-[1rem] rounded-full 
          ${character.status==="Alive"?"bg-green-400":character.status==="Dead"?"bg-red-400":"bg-yellow-400"}`}></span>
          <p>{character.status}-</p>
          <p>{character.species}</p>
        </div>
        </div>
        <Link to={`/characters/${(character.id.toString())}`}><AiOutlineEye className="mobile-icon hover:cursor-pointer"/></Link>
      </div>
    </motion.div>
  )
}
