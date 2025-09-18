import Presentation from "@/components/presentation";
import { useTheme } from "@heroui/use-theme";
import { useEffect } from "react";

export default function IndexPage() {

  const {setTheme} = useTheme()
 

  useEffect(()=>{

    setTheme("dark");
  },[])
  return (
   <div className=" relative">

    <Presentation/> 
   </div>
  );
}
