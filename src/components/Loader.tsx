import { RingLoader } from "react-spinners";


  
interface ILoaderProps{
    size:number;
}
function Loader({size}:ILoaderProps) {
  return (
    <RingLoader
        color="var(--color-secondary)"
        size={size}
      />
  )
}

export default Loader