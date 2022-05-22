import React, { Component, useState} from 'react';
// import React, {useState} from 'react'
import memesData from"./memesData"


function Meme() {

const [meme , memeImage] = useState('')

function getState(){
memeImage('We have changed state')
}

function getMemeImage(){
    const memeArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)

memeImage(memeArray[randomNumber].url)
    console.log()



}

function handleMeme(){

}
    
        return (
            <main>
                <form className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </form>
    
                <button 
                        className="btn btn-primary"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
    
                    <p id="ele-holder">
                    {meme}
                    </p>

                    <img src={`./images/${meme}`} alt="" className='meme--img'/>
            </main>
        
    );
}

export default Meme;
