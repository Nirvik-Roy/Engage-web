import React from 'react'
import './Launchpadworks.css'
const Launchpadworks = () => {
    const data = [
        {
            title: 'Assemble your onboarding journey',
            para: 'We help you turn your content into selected modules, levels, and challenges.'
        },
        {
            title: 'New hires complete the journey',
            para: 'Employees progress through modules during their first days — completing challenges, watching videos, and exploring your organization.'
        },
        {
            title: 'Track onboarding with confidence',
            para: 'HR can see completion, engagement, and retention insights through the NES report.'
        }
    ]
    return (
        <>
            <div className='build_once_wrapper'>
                <h1 className='heading'>How Launchpad works</h1>
                <div className='container build_once_content_wrapper'>
                    {data.map((e, i) => (
                        <div className='build_step'>
                            <h2>Step {i + 1}</h2>
                            <h4>{e.title}</h4>
                            <p>{e.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Launchpadworks
