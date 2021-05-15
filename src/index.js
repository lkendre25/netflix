import React from 'react';
import ReactDom from 'react-dom';
import logo from './norm.png';
import Cards from './Cards';
import sdata from './Sdata';
ReactDom.render(
    <>
        <Cards 
            imgsrc = {logo}
            title = {sdata[0].title}
            desc = {sdata[0].desc}
            btton = {sdata[0].btton}
        />    
        <Cards 
            imgsrc = {logo}
            title = {sdata[1].title}
            desc = {sdata[1].desc}
            btton = {sdata[1].btton}
        /> 
        <Cards 
            imgsrc = {logo}
            title = {sdata[2].title}
            desc = {sdata[2].desc}
            btton = {sdata[2].btton}
        /> 
    </>,
    document.getElementById('root')
);