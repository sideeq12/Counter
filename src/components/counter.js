import React, {useState} from "react";
import { Counter } from "./counter.styled.js/counter.styled";


export const WordCount = ()=>{

    const [words, setWords] = useState(0)
    const [characters, setCharacters] = useState(0)

    const work = (e)=>{
        let data = e.target.value;
        const wordCounter = data.split(" ").length;
        const charCounter = data.split("").length
        setWords(wordCounter)
        setCharacters(charCounter)
    }
    return (
        <Counter>
            <header><h1>Basic world counter</h1></header>
            <textarea  onChange={work} placeholder="start typing.. or paste your text here"/>
            <footer> 
                <span><b>{words}</b> words</span>
                <span><b>{characters}</b> Characters</span>
            </footer>
            </Counter>
    )
}