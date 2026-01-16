import React from 'react'
import './Buildonce.css'
const Buildonce = () => {
    const data = [
        {
            title: 'Your onboarding journey is designed',
            para: 'We create a customized experience using your content — policies, videos, documents, people, and spaces — structured into 5–10 game levels'
        },
        {
            title: 'New hires complete the experience',
            para: 'New employees receive a simple invite and progress through the journey during their first days or week, completing short challenges, trivia, and discovery tasks.'
        },
        {
            title: 'HR sees onboarding engagement clearly',
            para: 'You can see who completed the journey, how engaged new hires were, and which content is landing.'
        }
    ]
    return (
        <>
            <div className='build_once_wrapper'>
                <h1 className='heading'>Built once. Used again and again.</h1>
                <div className='container build_once_content_wrapper'>
                    {data.map((e, i) => (
                        <div className='build_step'>
                            <h2>Step {i + 1}</h2>
                            <h4>{e.title}</h4>
                            <p>{e.para}</p>
                        </div>
                    ))}
                </div>

                <p style={{
                    marginTop:'40px',
                    color:'rgba(55, 54, 54, 1)',
                    fontSize:'1.2rem',
                    textAlign:'center',
                    fontWeight:'600'
                }}>That’s it. No heavy facilitation. No repeated sessions.</p>
            </div>
        </>
    )
}

export default Buildonce
