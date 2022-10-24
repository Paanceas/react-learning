import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cartoon Network']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ onAddCategory }/>
            <button onClick={onAddCategory} >Agregar</button>

            <ol>
                { categories.map((category) =>
                  <li key={category}>{category}</li>
                )}
            </ol>
        </>
    )
}
