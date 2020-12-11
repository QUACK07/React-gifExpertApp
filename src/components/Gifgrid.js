//import React, { useState, useEffect } from 'react'
import React from 'react';
import { UseFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const Gifgrid = ({category}) => {
    const { data:images, loading } = UseFetchGifs(category);
   
    //getGifs();
    return (
        <>
        <h3 className="animate__animated animate__fadeInDown">{ category }</h3>
        {loading && <p className="animate__animated animate__flash">loading</p>}
        {<div className="card-grid" >
                {
                    images.map((img) => {
                        return <GifGridItem 
                        key= { img.id }
                        //img= { img }/>
                        { ...img } /> 
                    })
                }
            
        </div>}

        </>
    )
}
