// import { useState, useRef } from 'react'


import '../styles/Home.css'
// import Resume from './Resume.jsx'

function Home({setMode, resumeAr, setResumeIndexToView}){
    const editButtonVar = <button className='homeButton' onClick={() => setMode(1)}>+</button>

    return(
        <div className='home'>
            {editButtonVar}
            {resumeAr.map((resume, i) => {
                return(
                    <button className='homeButton' key={i} onClick={() => {setMode(2); setResumeIndexToView(i)}}>
                        {resume[3]}
                    </button>
                )
            })}
        </div>
    )
}

export default Home;
