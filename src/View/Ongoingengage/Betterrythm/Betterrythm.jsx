import './Betterrythm.css'
import img from '../../../assets/Group 1597882971 (1).png'
import bgImg from '../../../assets/Rectangle 6682.png'
const Betterrythm = () => {
    return (
        <>
            <div className='engamenet_report_Wrapper'>
                <img src={bgImg} style={{
                    position: 'absolute',
                    top: '-100%',
                    left: '0'
                }} />
                <div className='container engage_world_content_wrapper engamen_report_wrapper'>
                    <div className='engage_world_content'>
                        <h1 className='heading' style={{
                            marginBottom: '30px'
                        }}>A better rhythm for everyday engagement</h1>
                        <p>Ngage Rhythm is a <span style={{
                            fontWeight:'700'
                        }}>packaged, virtual engagement experience</span> delivered through the Ngage platform. <br /> <br /> HR teams choose from a library of ready-to-run experiences designed to spark interaction, collaboration, and light competition — without facilitation or complex setup. <br /> <br />Employees join using their phones, participate at their own pace, and earn points simply by getting involved. <br /> <br /> Rhythm runs quietly in the background, helping teams stay connected while work continues.
                        </p>
                    </div>
                    <img src={img} />
                </div>
            </div>
        </>
    )
}

export default Betterrythm
