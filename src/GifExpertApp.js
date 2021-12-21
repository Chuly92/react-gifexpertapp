import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //agregar nuevo elemento al arreglo 'HunterXHunter'

    //     setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/* <button onClick={() => handleAdd()}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))

                }
            </ol>
        </>
    );   
}


