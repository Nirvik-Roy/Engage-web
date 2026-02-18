import './EbookModal.css'
import icon from '../../assets/svg159 (1).svg'
import img from '../../assets/27e42ede90ca830e0df76305541be0f3199f6da0.jpg'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Ebookmodal = ({ setShowModal }) => {
    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/Solving_Engagement_Playbook_v1.2.pdf";
        link.download = "Playbook.pdf";
        link.click();
    };

    const [email, setemail] = useState('');
    const [loading, setloading] = useState(false)
    const handleSubmit = async () => {
        if (email != "") {

            setloading(true);
            const res = await fetch('https://joz8jiulr0.execute-api.ap-south-1.amazonaws.com/dev/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    mode: 'onlyemail',
                })
            });
            const data = await res.json();
            if (res?.status == 201) {
                downloadPDF()
                toast.success('Email submitted successfully!')
                setloading(false)
                setShowModal(false)
            }
            if (res?.status == 409) {
                setloading(false)
                toast.error(data?.error && data?.error)
            }
            console.log(res)

        } else {
            toast.error('Plz enter your email...')
        }

    }

    return (
        <>
            <div class="modal-overlay" onClick={(() => setShowModal(false))}>
                <div class="ebook-modal" onClick={((e) => e.stopPropagation())}>
                    <button type="button" class="modal-close" onClick={(() => setShowModal(false))}>×</button>

                    <div class="modal-image">
                        <img src={img}
                            alt="Team collaboration" />
                    </div>

                    <div class="modal-content">
                        <h2 class="modal-title">Free Download: The Solving Engagement Playbook</h2>
                        <p class="modal-text">
                            A practical guide to solving the toughest engagement challenges — from onboarding and ongoing engagement to team-building experiences.
                        </p>

                        <form class="email-form" onSubmit={((e) => e.preventDefault())}>
                            <div class="email-field">
                                <input onChange={((e) => setemail(e.target.value))} type="email" placeholder="Your Email" />
                                <button disabled={loading} onClick={(() => {
                                    handleSubmit()
                                })} class="email-submit" type="submit">
                                    {loading ? 'Submiting...' : 'Get the Playbook'}
                                    <img src={icon} />
                                </button>
                            </div>
                            {/* <button onClick={downloadPDF}
                                    style={{
                                        marginTop:'20px',
                                        padding: "5px 10px",
                                        border: "1px solid #010085",
                                        backgroundColor: "#010085",
                                        color: "#fff",
                                    }}
                                    className="base_btn_design"
                                >
                                    Get the Playbook
                                </button> */}


                            <small style={{
                                marginTop: '10px',
                                display: 'block'
                            }}>By downloading, you’ll receive occasional engagement insights from Ngage. You can unsubscribe anytime.</small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ebookmodal
