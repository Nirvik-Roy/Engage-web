import './HomeBanner.css'
import bannerImg from '../../../assets/Home.png'
import buttoIcon from '../../../assets/svg159.svg'
import buttoIcon2 from '../../../assets/svg159 (1).svg'
import sample from '../../../assets/image 222.png'
const HomeBanner = () => {
  return (
    <>
      <div className='home_banner_wrapper'>
        <img className='banner_overlay_img' src={bannerImg} />

        <div className='home_banner_content_wrapper'>
          <h1>Happier Teams. <span>Stronger Connections.</span></h1>
          <p>Ngage World is an employee engagement system that helps HR teams build culture, participation, and connection — from onboarding, to everyday engagement, to company-wide moments.</p>
          <p>One platform. Endless ways to engage.</p>

          <div className='home_banner_btn_wrapper'>
            <button className='base_btn_design'>Get a Demo <img src={buttoIcon} /></button>
            <button className='base_btn_design'>Explore Ngage World <img src={buttoIcon2} /></button>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'end',
        background: '#f8f8f8',
        width: '80%',
        margin: '70px 0',
        marginInline: 'auto',
        overflow: 'visible',
        position: 'relative',
        height: '80vh'
      }}>
        <div style={{
          width: '55%',
          height: '100%',
          position: 'absolute',
          bottom: '0px',
          right: '0',
          transform:'translateY(0px)'
        }}>
          <img src={sample} style={{
            width: '100%',
            height: '85vh',
          }} />
        </div>

      </div>
    </>
  )
}

export default HomeBanner
