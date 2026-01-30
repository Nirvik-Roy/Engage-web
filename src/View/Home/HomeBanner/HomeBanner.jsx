import './HomeBanner.css'
import bannerImg from '../../../assets/Group 1597883006.png'
import buttoIcon from '../../../assets/svg159.svg'
import buttoIcon2 from '../../../assets/svg159 (1).svg'
import { useNavigate } from 'react-router-dom'
const HomeBanner = ({ data }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className='home_banner_wrapper'>
        <img className='banner_overlay_img'  src={bannerImg} />

        <div className='home_banner_content_wrapper'>
          <h1>{data?.title1} <span>{data?.title2}</span></h1>
          <p>{data?.para1}</p>
          <p>{data?.para2}</p>

          <div className='home_banner_btn_wrapper'>
            <button onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))} className='base_btn_design'>{data.button1} <img src={buttoIcon} /></button>
            <button onClick={(() => navigate('/solutions/engagement'))} className='base_btn_design'>{data.button2} <img src={buttoIcon2} /></button>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default HomeBanner
