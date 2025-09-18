import Presentation from "@/components/presentation";
import Skills from "@/components/skills";
import { useTheme } from "@heroui/use-theme";
import { useEffect, useState } from "react";

export default function IndexPage() {

  const {theme, setTheme} = useTheme()
  const [newCommand, setNewCommand] = useState("");

  useEffect(()=>{

    setTheme("dark");
  },[])
  return (
   <div className=" relative">

    <Presentation/> 
   </div>
  );
}
