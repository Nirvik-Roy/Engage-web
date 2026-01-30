import './Faq.css'
import Bannerlayout from '../Layout/BannerLayout/BannerLayout.jsx'
import { useState } from 'react'
import Buildengagement from '../Home/Buildengagement/Buildengagement.jsx';
import img from '../../assets/svg159.svg'
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
                    answer: "Ngage is an employee engagement system that helps organizations strengthen culture through connection. It provides structured ways to engage employees across onboarding, everyday engagement, and company-wide moments — all through one platform."
                },
                {
                    id: 2,
                    question: 'Is Ngage a software platform or a service?',
                    answer: "Both.\n  •	Rhythm and Launchpad are platform-powered engagement experiences \n •	Play Day is a fully facilitated, live experience powered by the Ngage system."
                },
                {
                    id: 3,
                    question: 'Is Ngage training or performance management?',
                    answer: "No.\n Ngage is not a learning management system (LMS), training platform, or performance management tool. \n Its primary focus is participation, connection, and culture, not assessments or productivity tracking."
                },
            ]
        },


        {
            title: 'Participation & Engagement',
            questions: [
                {
                    id: 4,
                    question: 'Will everyone actually participate?',
                    answer: "Ngage is designed specifically to increase participation, not just reward high performers or outgoing personalities.\n Experiences are: \n •	Inclusive \n •	Easy to join \n •	Designed for different personalities and abilities \n While participation levels vary by organization, most clients see broader involvement than with traditional engagement activities."

                },
                {
                    id: 5,
                    question: 'Do employees need to download an app?',
                    answer: "No.\n Employees access Ngage experiences through their browser on their phone or device. No app installation is required."

                },
                {
                    id: 6,
                    question: 'Can Ngage work for remote or hybrid teams?',
                    answer: "Yes. \n •	Rhythm works well for remote, hybrid, and in-office teams. \n •	Launchpad supports onboarding regardless of location. \n •	Play Day is designed for in-person experiences \n Many organizations use Ngage across mixed work environments."
                }
            ]
        },
        {
            title: 'Setup & Use',
            questions: [
                {
                    id: 7,
                    question: 'How long does setup take?',
                    answer: "It depends on the solution:\n •	Rhythm: Can be launched quickly using ready-made experiences. \n •	Launchpad: Requires an initial setup phase to customize onboarding content. \n •	Play Day: Planning timelines depend on event size and scope. \n We guide you through setup and ensure everything runs smoothly."

                },
                {
                    id: 8,
                    question: 'Do HR teams need to facilitate experiences?',
                    answer: "No.\n •	Rhythm and Launchpad are self-managed once set up. \n •	Play Day is fully facilitated by the Ngage team.\n The goal is to reduce HR workload, not add to it."

                },
                {
                    id: 9,
                    question: 'How much ongoing effort is required from HR?',
                    answer: "Minimal.\n HR teams typically: \n •	Select or schedule experiences \n •	Monitor participation \n •	Review engagement insights \n Most of the engagement runs automatically once launched."
                },
            ]
        },
        {
            title: 'Measurement & Reporting',
            questions: [
                {
                    id: 10,
                    question: 'How do we measure engagement?',
                    answer: "Ngage uses the Ngage Engagement Score (NES) to provide a clear view of engagement levels.\n NES is based on:\n •	Participation behavior \n •	Engagement consistency over time \n It’s designed to be simple, practical, and leadership-friendly."

                },
                {
                    id: 11,
                    question: 'What data can HR see?',
                    answer: "HR teams can view:\n •	Participation levels\n •	Completion status \n •	Engagement trends over time \n Ngage focuses on engagement insight, not employee surveillance."

                },
                {
                    id: 12,
                    question: 'Can we report engagement results to leadership?',
                    answer: "Yes.\n NES provides a clear, easy-to-understand way to communicate engagement progress without complex dashboards or analysis."
                },
            ]
        },
        {
            title: 'Pricing & Licensing',
            questions: [
                {
                    id: 13,
                    question: 'How is pricing structured?',
                    answer: "Pricing depends on the solution:\n •	Rhythm: One-off experiences or annual engagement plans \n •	Launchpad: Custom onboarding experience with annual licensing\n •	Play Day: Time-based, facilitated experiences \n Pricing details are available on each product page."

                },
                {
                    id: 14,
                    question: 'Are there limits on the number of employees?',
                    answer: " • Launchpad: Unlimited employees during the license period  \n • Rhythm: First 50 players included; additional players priced per person \n • Play Day: Pricing depends on event size and duration"

                },
                {
                    id: 15,
                    question: 'Can we start small and scale later?',
                    answer: "Yes.\n Many organizations start with one solution (often Rhythm or Launchpad) and expand as their engagement needs grow."
                },
            ]
        },

        {
            title: 'Security & Privacy',
            questions: [
                {
                    id: 16,
                    question: 'Is employee data secure?',
                    answer: "Yes. \nNgage follows standard best practices for data handling and platform security. We collect only the information needed to run engagement experiences and reporting."

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
                    answer: "During a demo, we help you:\n•	Clarify your engagement goals\n•	Identify where engagement gaps exist\n •	Recommend the best starting point"

                },
                {
                    id: 19,
                    question: 'What’s the best way to get started?',
                    answer: "The easiest way is to book a demo.\n We’ll walk you through Ngage World, show relevant solutions, and answer questions specific to your organization.",
                    button:true

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
                                         { element?.button &&  <button className='base_btn_design' style={{
                                            marginTop:'20px'
                                         }}>Get a demo <img src={img}/></button>}
                                        </div>}
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Buildengagement demobtn={true} para={"The easiest way is to book a demo. We’ll walk you through Ngage World, show relevant solutions, and answer questions specific to your organization."} title={'What’s the best way to get started?'} />
        </>
    )
}

export default Faq
