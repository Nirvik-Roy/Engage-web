import './EbookModal.css'
import icon from '../../assets/svg159 (1).svg'
import img from '../../assets/27e42ede90ca830e0df76305541be0f3199f6da0.jpg'
const Ebookmodal = ({ setShowModal }) => {
    return (
        <>
            <div class="modal-overlay" onClick={(() => setShowModal(false))}>
                <div class="ebook-modal" onClick={((e)=>e.stopPropagation())}>
                    <button type="button" class="modal-close" onClick={(() => setShowModal(false))}>×</button>

                    <div class="modal-image">
                        <img src={img}
                            alt="Team collaboration" />
                    </div>

                    <div class="modal-content">
                        <h2 class="modal-title">Download our E-book</h2>
                        <p class="modal-text">
                            Sign up to get your free E-book now. Step into the world of modern engagement
                            designed to help you connect and grow.
                        </p>

                        <form class="email-form">
                            <div class="email-field">
                                <input type="email" placeholder="Your Email" />
                                <button onClick={(() => setShowModal(false))} class="email-submit" type="submit">
                                    Submit
                                    <img src={icon}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ebookmodal
