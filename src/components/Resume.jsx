 
import '../styles/Resume.css'

// const resume = [
//     [name, phonesEmails, socials], 
//     [pracExpAr],
//     [eduAr],
//     [titleOfResume]
// ];

// pracExpAr = [ [pracExp 1] ... [pracExp n] ]
// pracExp = [companyName, position, responsibilities, datePracExp]

// education Exp = [ [edu 1] ... [edu n] ]
// edu = [schoolName, title, dateEdu]

function Resume({i, resumeAr, setMode}){
    const resume = resumeAr[i];
    const name = resume[0][0];
    const contactAr = resume[0][1];
    const socialsAr = resume[0][2];
    const pracExpAr = resume[1];
    const eduAr = resume[2];

    const exitButton = <button onClick={() => setMode(0)}className='button'>Exit</button>

    return(
        <div className='resumeViewingBody'>
            <div className='buttonDiv'>
                {exitButton}
            </div>
            <div className='resumeBody'>
                <p className='name'><b>{name}</b></p>
                <p className='section'>Contacts</p>
                {contactAr.map((contact, i) => {
                    return(<p key={i}>{contact}</p>)
                })}
                {socialsAr.map((social, i) => {
                    return(<p key={i}>{social}</p>)
                })}
                <p className='section'>Practical Experience</p>
                {pracExpAr.map((pracExp, i) => {
                    return(
                        <div key={i}>
                            <div className='title'>
                                <p className='left'><b>{pracExp[i][1]}</b></p>
                                <p className='date'>{pracExp[i][3]}</p>
                            </div>
                            <p><i>{pracExp[i][0]}</i></p>
                            <p>{pracExp[i][2]}</p>
                        </div>
                    )
                })}
                <p className='section'>Education</p>
                {eduAr.map((edu, i) => {
                    return(
                        <div key={i}>
                            <div className='title'>
                                <p className='left'><b>{edu[i][0]}</b></p>
                                <p className='date'>{edu[i][2]}</p>
                            </div>
                            <p><i>{edu[i][1]}</i></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


 export default Resume; 