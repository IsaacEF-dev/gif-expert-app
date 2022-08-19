import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>{

    const [images,setImagenes]= useState([]);
    const [isLoading,setIsLoading]= useState(true);

    const getImagenes=async()=>{
        const newImages=await getGifs(category);
        setImagenes(newImages);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getImagenes();
        
    }, [])

    return {
        images,
        isLoading,
    }
}