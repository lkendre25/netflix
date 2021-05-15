import React from 'react';
import ReactDom from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import logo from './norm.png';

ReactDom.render(
    <>
        <h3>Top 5 Netflix Movies!!</h3>
        

       {
           Sdata.map(
               (val)=>{
                return(
                    <Cards
            imgsrc = {logo}
            title = {Sdata[0].title}
            desc = {Sdata[0].desc}
            btton = {Sdata[0].btton}
        
        />

                );

               }
           )

       }
    </>,
    document.getElementById('root')
);