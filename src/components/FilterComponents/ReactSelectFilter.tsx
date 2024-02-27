import makeAnimated from "react-select/animated";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

export interface IReactSelectOption{
    label:string;
    value:string;
}
interface IReactSelectProps{
  value:string,
    options: OptionsOrGroups<IReactSelectOption, GroupBase<IReactSelectOption>>;
    placeHolder:string;
    chnageReaceSelectHandler:(e:unknown)=>void
}
function ReactSelectFilter({options,chnageReaceSelectHandler,value,placeHolder}:IReactSelectProps) {
  const animatedComponents = makeAnimated();
  return (
    <div className="flex-1">
        <Select 
        options={options} 
        placeholder={placeHolder}
        value={value}
        onChange={chnageReaceSelectHandler} 
        isSearchable
        components={animatedComponents}
        styles={{
          control: (baseStyles,state) => ({
            ...baseStyles,
            backgroundColor: "var(--color-primary)",
            border: state.isFocused
              ? "2px solid var(--color-secondary)"
              : "1px solid var(--color-secondary)",
            boxShadow: "none",
          }),
          input: (baseStyles,state) => {
            return {
              ...baseStyles,
              border:state.onMouseEnter && "0px solid red",
              color: "var(--color-text)",
            };
          },
          option: (styles) => {
            return {
              ...styles,
              color: "var(--color-text)",
              backgroundColor:"var(--color-primary)",
              ":hover": { backgroundColor: "var(--color-secondary)", color: "var(--color-text)" },
            };
          },
          singleValue: (styles) => {
            return {
              ...styles,
              color: "var(--color-text)",
            };
          },
          placeholder: (styles) => ({
            ...styles,
            color: "var(--color-text)",
          }),
        }}
        />
    </div>
  )
}

export default ReactSelectFilter