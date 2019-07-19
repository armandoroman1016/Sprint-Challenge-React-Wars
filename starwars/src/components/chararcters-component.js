import React, { useEffect, useState } from "react";
import Character from './character'





const Characters = ({chars}) => {
    return (
        <div>
            <div className = 'characters'>
                {chars.map((char, index) => 
                    <Character charObj ={char} key ={index}/>
                    )}
            </div>
        </div>
    );
};

export default Characters;
