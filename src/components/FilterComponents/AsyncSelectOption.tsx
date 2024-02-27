interface ISearchInputProps{
    unique:string;
    placeHolder:string;
    searchValue:string;
    changeHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void
    }
function AsyncSelectOption({unique,placeHolder,searchValue,changeHandler}:ISearchInputProps) {
  return( 
  <div>
   <input list="brow"  
   className="bg-transparent ring-1 rounded-sm px-3 py-1 text-color-text outline-none focus:border-none focus:ring-2 text-sm " 
   type="text" id={unique} name={unique} placeholder={placeHolder}
    value={searchValue} onChange={changeHandler} /> 
<datalist id="brow">
  <option value="Internet" />
  <option value="Firefox" />
  <option value="Chrome"/>
  <option value="Opera"/>
  <option value="Safari"/>
</datalist>  
   </div>
   )
}

export default AsyncSelectOption