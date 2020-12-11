import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Gifgrid } from './components/Gifgrid';

export const GiffExpertApp = () => {
    //const categories = ;
    const [categories, setCategories] = useState(['One Punch']);
    //const handleAdd = ()=>{
       //setCategories( ['prueba', ...categories] );
        //setCategories(cats => [...cats, 'HunterxHunter']);
    //}


    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} /> 
            <hr /> 
             
            <ol>
                {
                    categories.map( (category) =>  
                        <Gifgrid 
                            key = {category} 
                            category={category} 
                        />
                    )
                }
            </ol>
            
        </>
    )
}
