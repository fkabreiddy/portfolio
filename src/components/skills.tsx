
export default function  Skills(){
    return(
        <section className="w-full  flex items-center justify-between flex-col">
             <h2 className="mt-[30px] mb-[20px] underline">My Skills</h2>

        <div className=" w-[90%] flex-wrap flex items-center justify-center gap-5 ">
            
        {[
            { name: "EF Core", icon: "devicon-entityframeworkcore-plain" },
            { name: "React", icon: "devicon-react-original" },
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain" },
            { name: "Typescript", icon: "devicon-typescript-plain" },
            { name: "Blazor", icon: "devicon-blazor-plain" },
            { name: ".Net", icon: "devicon-dot-net-plain" },
        ].map(({ name }) => (
            <Skill key={name} name={name}>
                
            </Skill>
        ))}
          
          
        </div>
        </section>
       
    )

}

const Skill = ({ name}:{ name: string}) =>{
    return(
    <div className="flex flex-col items-center justify-center gap-1">
        <label className=" text-nowrap">[{name}]</label>
    </div>
    )
    
}