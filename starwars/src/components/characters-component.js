import React from "react";
import Character from './character'

const Characters = ({chars}) => {
    return (
        <div className = 'characters-container'>
                {chars.map((char, index) => 
                    <Character charObj ={char} key ={index}/>
                    )}
        </div>
    );
};

export default Characters;
