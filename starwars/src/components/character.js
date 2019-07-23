
import React, { useEffect, useState }  from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>
                {name} is a was born in {birthYear} and has a mass of {mass} with a height of {height}.
                {name} is a {gender} with {hairColor} colored hair and {eyeColor} eyes.
            </Card.Description>
        </Card.Content>
    </Card>
)
    }

export default Character
