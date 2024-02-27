import { useState } from "react";

interface ISearchInputProps{
  unique:string;
  placeHolder:string
  }
  
  function SearchInput({unique,placeHolder}:ISearchInputProps) {
    const [searchVal,setSearchVal]=useState<string>("")
    return (
      <div>  
          <input className="bg-transparent ring-1 rounded-sm px-3 py-1 text-color-text outline-none focus:border-none focus:ring-2 text-sm " type="text" id={unique} name={unique} placeholder={placeHolder}
          value={searchVal} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchVal(e.target.value)} />
              </div>
    )
  }
  export default SearchInput;