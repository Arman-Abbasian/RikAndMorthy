import ReactSelectFilter, { IReactSelectOption } from "../FilterComponents/ReactSelectFilter";

interface IFilterEpisodeProps{
  options:IReactSelectOption[];
  chnageReaceSelectHandler:(e:unknown)=>void;
  value:string
}


function FilterCharacter({options,chnageReaceSelectHandler,value}:IFilterEpisodeProps) {
  


  return (
    <div className=" mb-8 ml-2 w-full ">
      <div className="container max-w-sm mx-auto flex flex-col gap-3">
      <ReactSelectFilter value={value} placeHolder="select a episode ..." chnageReaceSelectHandler={chnageReaceSelectHandler} options={options} />
        </div>
    </div>
  )
}

export default FilterCharacter;




