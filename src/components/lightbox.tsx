import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";



export default function LightBox({images, open, openChanged}:{images: {src: string, alt: string }[] , open: boolean, openChanged: (value: boolean) => void})
{
    const [currentImage, setCurrentImage] = useState<{src: string, alt: string, index: number} | null>(null);

    useEffect(()=>{
        if(images && images.length > 0)
        {
            setCurrentImage({
                src: images[0].src,
                alt: images[0].alt,
                index: 0
            });
        }
    },[images])

    function showNext() {
        if (!currentImage) return;
        const nextIdx = currentImage.index + 1;
        if (nextIdx >= images.length) return;
        setCurrentImage({
            src: images[nextIdx].src,
            alt: images[nextIdx].alt,
            index: nextIdx
        });
    }

    function showPrev() {
        if (!currentImage) return;
        const prevIdx = currentImage.index - 1;
        if (prevIdx < 0) return;
        setCurrentImage({
            src: images[prevIdx].src,
            alt: images[prevIdx].alt,
            index: prevIdx
        });
    }
    


    if(!open) return <></>;
    return(
        <div
            className="fixed flex  flex-col gap-3 items-center justify-center  inset-0 w-screen h-screen  bg-neutral-200/80 dark:bg-neutral-950/80 z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) openChanged(false);
            }}
        >
            <div className="flex gap-3 items-center justify-center z-[70]">
                <button
                    onClick={showPrev}
                    className="bg-blue-600 cursor-pointer text-white p-3"
                    disabled={!currentImage || currentImage.index === 0}
                >
                    <ArrowLeft size={16}/>
                </button>
                <img className="w-[70%] object-contain" src={currentImage?.src ?? ""} alt={currentImage?.alt}/>
                <button
                    onClick={showNext}
                    className="bg-blue-600 cursor-pointer text-white p-3"
                    disabled={!currentImage || currentImage.index === images.length - 1}
                >
                    <ArrowRight size={16}/>
                </button>
            </div>
            <button className="bg-blue-600 px-3 cursor-pointer text-white" onClick={()=>{openChanged(!open);}}>Close</button>
           
        </div>
    )

   
}