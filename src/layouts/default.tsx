import { useTheme } from "@heroui/use-theme";
import { useEffect } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {setTheme} = useTheme();

  useEffect(()=>{

    document.documentElement.classList.toggle("dark");
    setTheme("dark");
  },[])

  return (
    <DefaultLayout>
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
    </DefaultLayout>
  );
}

  

