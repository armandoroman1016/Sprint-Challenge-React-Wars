import React, { useEffect, useState } from "react";

const Character = ({charObj}) => {

const [birthYear, setBirthYear] = useState("");
const [eyeColor, setEyeColor] = useState("");
const [gender, setGender] = useState("");
const [hairColor, setHairColor] = useState("");
const [height, setHeight] = useState("");
const [name, setName] = useState("");
const [mass, setMass] = useState("");

useEffect(() => {
    setBirthYear(charObj.birth_year)
    setEyeColor(charObj.eye_color)
    setGender(charObj.gender)
    setHairColor(charObj.hair_color)
    setHeight(charObj.height)
    setName(charObj.name)
    setMass(charObj.mass)
},[charObj])

    return(
        <div className='character'>
            <h1 className = 'char-name char-attributes'>{name}</h1>
            <p className= 'char-attributes'>{birthYear}</p>
            <p className= 'char-attributes'>{height}</p>
            <p className= 'char-attributes'>{mass}</p>
            <p className= 'char-attributes'>{hairColor}</p>
            <p className= 'char-attributes'>{eyeColor}</p>
            <p className= 'char-attributes'>{gender}</p>
        </div>
    )

}

export default Character