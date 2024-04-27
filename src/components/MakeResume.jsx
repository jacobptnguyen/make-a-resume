import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/MakeResume.css'

function MakeResume({setMode, addResume, resumeAr}){
    const cancelButtonVar = <button className='buttonClass' onClick={() => setMode(0)}>Cancel</button>

    const [titleOfResume, changeTitleOfResume_state] = useState('Untitled Resume ' + (resumeAr.length+1));
    function changeTitleOfResume(event){
        changeTitleOfResume_state(event.target.value);
    }

    // general information
    const [name, changeName_state] = useState('');
    function changeName(event){
        changeName_state(event.target.value);
    }

    const [contact, changeContact_state] = useState('');
    function changeContact(event){
        changeContact_state(event.target.value)
    }

    const [contactAr, changeContactAr_state] = useState([]);
    function changeContactAr(){
        changeContactAr_state([...socialsAr, social]);
    }

    // return array.filter((element) => filtering test)

    // const [contactAr, changeContactAr_state] = useState([]);
    // function changeContactAr(mode, id = "No ID"){
    //     if(mode === 'append'){
    //         const contact = {
    //             id: uuidv4(),
    //             name: "",
    //         }
    //         changeContactAr_state([...contactAr, contact]);
    //     }else if(mode === 'remove' && id !== "No ID"){
    //         changeContactAr_state(contactAr.filter((contact) => id !== contact.id))
    //         }
    // }

    // useState can accept a new value or an update function
    // function updateContact(event, id){
    //     changeContactAr_state(
    //         (contactAr) => {
    //             return contactAr.map((contact, i) => {
    //                 if(id === contact.id){
    //                     return event.target.value;
    //                 }
    //                 return(
    //                     contact
    //                 );
    //             }
    //             )
    //         }
    //     );
    // }

    const [social, changeSocial_state] = useState('');
    function changeSocial(event){
        changeSocial_state(event.target.value);
    }

    const [socialsAr, changeSocialsAr_state] = useState([]);
    function changeSocialsAr(){
        changeSocialsAr_state([...socialsAr, social]);
    }

    // practical experience

    // pracExpAr = [ [pracExp 1] ... [pracExp n] ]
    // pracExp = [companyName, position, responsibilities, datePracExp]
    const [pracExpAr, changePracExpAr_state] = useState([]);
    function changePracExpAr(){
        changePracExpAr_state([...pracExpAr, [companyName, position, responsibilities, datePracExp]]);
    }

    const [companyName, changeCompanyName_state] = useState('');
    function changeCompanyName(event){
        changeCompanyName_state(event.target.value);
    }

    const [position, changePosition_state] = useState('');
    function changePosition(event){
        changePosition_state(event.target.value);
    }

    const [responsibilities, changeResponsibilities_state] = useState('');
    function changeResponsibilities(event){
        changeResponsibilities_state(event.target.value);
    }

    const [datePracExp, changeDatePracExp_state] = useState('');
    function changeDatePracExp(event){
        changeDatePracExp_state(event.target.value);
    }

    // education Exp = [ [edu 1] ... [edu n] ]
    // edu = [schoolName, title, dateEdu]
    const [eduAr, changeEduAr_state] = useState([]);
    function changeEduAr(){
        changeEduAr_state([...eduAr, [schoolName, title, dateEdu]]);
    }

    const [schoolName, changeSchoolName_state] = useState('');
    function changeSchoolName(event){
        changeSchoolName_state(event.target.value);
    }

    const [title, changeTitle_state] = useState('');
    function changeTitle(event){
        changeTitle_state(event.target.value);
    }

    const [dateEdu, changeDateEdu_state] = useState('');
    function changeDateEdu(event){
        changeDateEdu_state(event.target.value);
    }

    function submit(event){
        event.preventDefault(); // run through your own code before exiting form
        setMode(0);

        const resume = [
            [name, contactAr, socialsAr], 
            [pracExpAr],
            [eduAr],
            [titleOfResume]
        ];
        console.log(resume);
        addResume(resume);
    }

    return(
        <form onSubmit={submit} className='resumeEditerBody'>
            <div className='buttonDiv'>
                {cancelButtonVar}
            </div>
        <div className='resumeEditer'>
            <input onChange={changeTitleOfResume} className='inputBox' type='text' placeholder='name your resume'></input>
        </div>
        <div className='resumeEditer'>
            <p className='bigText'>General Information</p>
            <input onChange={changeName} className='inputBox' type='text' placeholder='enter name'></input>

            {/* {contactAr.map((contact, i) => {
                const id = uuidv4();
                return(
                    <input 
                        onChange={(event) => updateContact(event, id)} 
                        className='inputBox' 
                        type='text' 
                        placeholder='enter phone numbers and emails'
                        ></input>
                )
            })}
            <div>
                <button className='plus' onClick={(event) => {event.preventDefault(); changeContactAr("append")}}>+</button>
            </div> */}

            <input onChange={changeContact} className='inputBox' type='text' placeholder='enter phone numbers and emails'></input>
            <input onChange={changeSocial} className='inputBox' type='text' placeholder='enter social links'></input>
        </div>

        <div className='resumeEditer'>
            <p className='bigText'>Practical Experience</p>
            <input onChange={changeCompanyName} className='inputBox' type='text' placeholder='company name'></input>
            <input onChange={changePosition}  className='inputBox' type='text' placeholder='position'></input>
            <input onChange={changeResponsibilities} className='inputBox' type='text' placeholder='main responsibilities of your job'></input>
            <input onChange={changeDatePracExp}  className='inputBox' type='text' placeholder='date from and until when you worked for that company'></input>
        </div>

        <div className='resumeEditer'>
            <p className='bigText'>Educational Experience</p>
            <input onChange={changeSchoolName} className='inputBox' type='text' placeholder='school name'></input>
            <input onChange={changeTitle} className='inputBox' type='text' placeholder='title of study'></input>
            <input onChange={changeDateEdu} className='inputBox' type='text' placeholder='date of study'></input>
        </div>
        <div className='buttonDiv'>
            <button onClick={() => {changeContactAr(); changeSocialsAr(); changePracExpAr(); changeEduAr();}} type='submit' className='buttonClass'>Submit</button>
        </div>
    </form>
    )
}


export default MakeResume;


/*
    <form onSubmit={submit} className='resumeEditerBody'>
            <div className='buttonDiv'>
                {cancelButtonVar}
            </div>
        <div className='resumeEditer'>
            <input onChange={changeTitleOfResume} className='inputBox' type='text' placeholder='name your resume'></input>
        </div>
        <div className='resumeEditer'>
            <p className='bigText'>General Information</p>
            <input onChange={changeName} className='inputBox' type='text' placeholder='enter name'></input>
            
            <input onChange={changeSocial} className='inputBox' type='text' placeholder='enter social links'></input>
        </div>

        <div className='resumeEditer'>
            <p className='bigText'>Practical Experience</p>
            <input onChange={changeCompanyName} className='inputBox' type='text' placeholder='company name'></input>
            <input onChange={changePosition}  className='inputBox' type='text' placeholder='position'></input>
            <input onChange={changeResponsibilities} className='inputBox' type='text' placeholder='main responsibilities of your job'></input>
            <input onChange={changeDatePracExp}  className='inputBox' type='text' placeholder='date from and until when you worked for that company'></input>
        </div>

        <div className='resumeEditer'>
            <p className='bigText'>Educational Experience</p>
            <input onChange={changeSchoolName} className='inputBox' type='text' placeholder='school name'></input>
            <input onChange={changeTitle} className='inputBox' type='text' placeholder='title of study'></input>
            <input onChange={changeDateEdu} className='inputBox' type='text' placeholder='date of study'></input>
        </div>
        <div className='buttonDiv'>
            <button onClick={() => {changeContactAr(); changeSocialsAr(); changePracExpAr(); changeEduAr();}} type='submit' className='buttonClass'>Submit</button>
        </div>
    </form>


*/

