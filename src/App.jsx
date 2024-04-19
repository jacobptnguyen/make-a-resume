import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// components
import Home from './components/Home.jsx'
import MakeResume from './components/MakeResume.jsx'
import Resume from './components/Resume.jsx'

// styles
import './styles/App.css'

/*
format:
const [variable you want to change, function to change that variable] =  useState(default state)
<Component variable = {variable} />
*/

function App() {

  const [mode, setMode_state] = useState(0);
  const [resumeIndexToView, setResumeIndexToView_state] = useState(0);
  function setResumeIndexToView(index){
    setResumeIndexToView_state(index);
  }

  /*
  0 = home page
  1 = editing resume
  2 = viewing resume
  */

  function setMode(modeArg){
    setMode_state(modeArg);
  }

  const [resumeAr, addResume_state] = useState([]);
  function addResume(resume){
    addResume_state([...resumeAr, resume]);
  }


  if(mode==0){
    return(
      <Home setMode = {setMode} resumeAr = {resumeAr} setResumeIndexToView ={setResumeIndexToView} />
    )
  }else if(mode==1){
    return(
      <MakeResume setMode = {setMode} addResume = {addResume} resumeAr={resumeAr}/>
    )
  }else if(mode==2){
    return(
      <Resume i = {resumeIndexToView} resumeAr = {resumeAr} setMode={setMode}/>
    )
  }
}

export default App

