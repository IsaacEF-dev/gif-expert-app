import {useState} from 'react';
import {AddCategorie,GifGrid} from "./components"


export const GifExpertApp=()=>{

    const [Categories, setCategories] = useState(["One Punch"]);

    const addCategorie=(value)=>{
        // console.log(event);
        if(Categories.includes(value))return;

        setCategories([...Categories,value])
    }

    return(
        <>
            
            <h1>GifExpertApp</h1>

            
            <AddCategorie 
                onNewCategory={addCategorie}
            />

            
                {
                    Categories.map((category)=>(
                        <GifGrid 
                        key={category} 
                        category={category}/> ))
                }
            
            {/**Item gif */}
        </>
    )
}