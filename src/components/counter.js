import React, {useState} from "react";


export const Counter = ()=>{

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
        <div className="">
            <header>Basic world counter</header>
            <textarea  onChange={work}/>
            <div className="result">
                <b>{words}</b>words
                <b>{characters}</b>characters
            </div>
            </div>
    )
}