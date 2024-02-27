import { IRadioItem } from "../../generalTypes";

interface ICheckBoxComponentProps{
  arr:IRadioItem[];
  filterState:string;
  title:string;
  changeHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function RadioComponent({arr,filterState,title,changeHandler}:ICheckBoxComponentProps) {
  return (
    <div className="ring-1 ring-color-secondary rounded-sm px-3 py-1 flex-1">
      <h2 className="mb-3">{title}</h2>
    <div className="flex flex-wrap items-center gap-3"> 
    {arr.map(item=><RadioItem checked={filterState===item.value?true:false} changeHandler={changeHandler}  radioId={item.value} label={item.label} key={item.value} />)}
    </div>
    </div>
  )
}
export default RadioComponent;

interface IRadioItemProps{
  radioId:string;
  label:string;
  checked:boolean;
  changeHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
function RadioItem({radioId,label,checked,changeHandler}:IRadioItemProps) {

  return (
    <div className="inline-block">
      <input type="radio" id={radioId} onChange={changeHandler} checked={checked} name={radioId} value={radioId} />
                <label className="ml-1 text-sm" htmlFor={radioId}>{label}</label>
            </div>
  )
}
