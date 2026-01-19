import './Faq.css'
import Bannerlayout from '../Layout/BannerLayout/BannerLayout.jsx'
import { useState } from 'react'
import Buildengagement from '../Home/Buildengagement/Buildengagement.jsx';
const Faq = () => {
    const [faqIndex, setfaqIndex] = useState([]);
    const indexFunction = (id) => {
        if (faqIndex.includes(id)) {
            setfaqIndex((prev) => prev.filter((e) => e != id))
        } else {
            setfaqIndex([...faqIndex, id])
        }
    }
    const faqData = [
        {
            title: 'About Ngage',
            questions: [
                {
                    id: 1,
                    question: 'What is Ngage?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
                {
                    id: 2,
                    question: 'Is Ngage a software platform or a service?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
                {
                    id: 3,
                    question: 'Is Ngage training or performance management?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
            ]
        },


        {
            title: 'Participation & Engagement',
            questions: [
                {
                    id: 4,
                    question: 'Will everyone actually participate?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 5,
                    question: 'Do employees need to download an app?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 6,
                    question: 'Can Ngage work for remote or hybrid teams?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                }
            ]
        },
        {
            title: 'Setup & Use',
            questions: [
                {
                    id: 7,
                    question: 'How long does setup take?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 8,
                    question: 'Do HR teams need to facilitate experiences?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 9,
                    question: 'How much ongoing effort is required from HR?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
            ]
        },
        {
            title: 'Measurement & Reporting',
            questions: [
                {
                    id: 10,
                    question: 'How do we measure engagement?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 11,
                    question: 'What data can HR see?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 12,
                    question: 'Can we report engagement results to leadership?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
            ]
        },
        {
            title: 'Pricing & Licensing',
            questions: [
                {
                    id: 13,
                    question: 'How is pricing structured?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 14,
                    question: 'Are there limits on the number of employees?',
                    answer: " • Launchpad: Unlimited employees during the license period  \n • Rhythm: First 50 players included; additional players priced per person \n • Play Day: Pricing depends on event size and duration"

                },
                {
                    id: 15,
                    question: 'Can we start small and scale later?',
                    answer: "No.Employees access Ngage experiences through their browser on their phone or device. No app installation is required."
                },
            ]
        },

        {
            title: 'Security & Privacy',
            questions: [
                {
                    id: 16,
                    question: 'Is employee data secure?',
                    answer: "No. \nEmployees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 17,
                    question: 'Does Ngage integrate with our HR systems?',
                    answer: "Currently, Ngage operates as a standalone engagement system. Integration needs can be discussed during the demo process."

                },
            ]
        },

        {
            title: 'Getting Started',
            questions: [
                {
                    id: 18,
                    question: 'How do we know which solution is right for us?',
                    answer: "No.\n Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
            ]
        },
    ]
    return (
        <>
            <Bannerlayout title={'Frequently Asked Questions'} />
            <div className='faq__container'>
                <div className='container faq_content_Wrapper'>
                    {faqData?.map((e, i) => (
                        <div key={i} className='faq_content'>
                            <h1 className='heading'>{e.title}</h1>
                            <div className='faq_questions_wrapper'>
                                {e.questions.map((element, index) => (
                                    <div key={index} className='faq_questions'>
                                        <div className='faq_questions__head'>
                                            <h4>{element.question}</h4>
                                            <i onClick={(() => indexFunction(element.id))} class="fa-solid fa-angle-down"></i>
                                        </div>

                                        {faqIndex.includes(element.id) && <div className='faq_answers_content'>
                                            <p>{element.answer}</p>
                                        </div>}
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Buildengagement demobtn={true} para={"The easiest way is to book a demo. We’ll walk you through Ngage World, show relevant solutions, and answer questions specific to your organization."} title={'What’s the best way to get started?'}/>
        </>
    )
}

export default Faq
