import './EbookModal.css'
import icon from '../../assets/svg159 (1).svg'
import img from '../../assets/27e42ede90ca830e0df76305541be0f3199f6da0.jpg'

const Ebookmodal = ({ setShowModal }) => {
    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/Solving_Engagement_Playbook_v1.2.pdf";
        link.download = "Playbook.pdf";
        link.click();
    };
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
                                <input type="email" placeholder="Your Email" />
                                <button onClick={(() => {
                                    downloadPDF()
                                    setShowModal(false)
                                })} class="email-submit" type="submit">
                                    Get the Playbook
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
