import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <h1>About Me</h1> 
            <br />
            <p style={{textAlign:"center", marginTop: "2%", marginLeft: "25%", marginRight:"25%", lineHeight: "2"}}>
                Before attending Grace Hopper Program at Fullstack Academy, I was a competitive performer and flute instructor for a decade. 
                I was a student at Rutgers University for my bachelor degree and Queens College for my master degree. I became interested in software engineering when I first saw a gadget called, "SoundBrenner", that aided musicians to keep a steady pulse through vibration pulses on their wrist or chest and helped musicians feel the beat internally. It improved many musicians’ musically like myself and it inspired me to think what other applications I could make to help other musicians or others if I were to become a software engineer. 
                When the pandemic started, I began my journey to become a software engineer by attending a coding bootcamp at Grace Hopper Program at Fullstack Academy.
                I hope to collaborate with any of you to create a difference in other people's lives.
                <br></br>
                <br></br>
                Outside of coding, you might catch me at a restaurant or cafe with friends, jazz club/bar, NYC or LA philharmonic concert, or a climbing gym. I also enjoy drawing my friends and events of my life. 
            </p>

            
            
        </Box>
    )
}