import { useState } from 'react'

export const AddCategorie=({onNewCategory})=>{

    const [changeInput, setchangeInput] = useState("one punch")

    const onChangeInput=(event)=>{
        setchangeInput(event.target.value)
    }

    const onSumbitInput=(event)=>{
        event.preventDefault();
       
        if(changeInput.trim().length<=1)return;
        
        // setCategories(categories=>[changeInput,...categories])
        onNewCategory(changeInput.trim());
        setchangeInput("");
    }

    return(
        <form onSubmit={onSumbitInput}>
            <input 
            type={"text"}
            onChange={onChangeInput}
            placeholder="Agregar una categoria.."
            value={changeInput}
            />
        </form>
    )
}