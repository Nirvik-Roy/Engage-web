import React from 'react'
import img from '../../../assets/a7f5c8232e705c6602746d04cf8d901390bd5776(1).jpg'
import listimg from '../../../assets/Vector (8).svg'
import button from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import { useNavigate } from 'react-router-dom'
import './Chooseyourengagelive.css'
const Chooseyourengagelive = () => {
  const navigate = useNavigate()

  const data = [
    {
      id: 1,
      title: 'Campaign Quest',
      subTilte: 'Turn a campaign into an interactive journey',
      price: '1,199',
      listTitle: 'How it works',
      list: [
        'Participants join via link or QR',
        'Challenges unlock over a defined period',
        'Points reward participation and progress',
        'Engagement and completion are tracked'
      ],
    },
    {
      id: 2,
      title: 'Challenge Series',
      subTilte: "Build momentum over time",
      price: '1,199',
      listTitle: 'How it works',
      list: [
        'Participants join the series',
        'Challenges unlock on a schedule',
        'Participation builds through repetition',
        'Progress and engagement are measured',
      ],

    },
  ]


  const data2 = [
    {
      id: 1,
      title: 'Conference Engagement',
      subTilte: 'Increase interaction and networking at conferences',
      price: '1,199',
      listTitle: 'How it works',
      list: [
        '	Attendees sign up on arrival',
        'Engagement runs throughout the event',
        'Points reward interaction and networking',
        'Leaderboard revealed at the end'
      ],
    },
    {
      id: 2,
      title: 'Challenge Series',
      subTilte: "Build momentum over time",
      price: '1,199',
      listTitle: 'How it works',
      list: [
        'Attendees sign up at entry',
        'Booth visits unlock challenges and points',
        'Rewards redeemed via the marketplace',
        'Engagement insights generated for organisers and exhibitors',
      ],

    },
  ]
  return (
    <>
      <div className=' corporate_fun_wrapper choose_your_engage_wrapper'>
        <div className='container rythm_package_prices_wrapper'>
          <div className='solutions_engage_world'>
            <img src={img} />
          </div>
          <div className='rythm_prices_wrapper'>
            <div className='team_building_head'>
              <h1 className='heading'  style={{
                lineHeight:'3.5rem'
              }}>Choose your Ngage Live experience format</h1>
              {/* <h6 style={{
                fontSize: '1.6rem',
              }}>Signature Experience</h6>
              <h4>
                Starting at US$4,999</h4> */}
              <p>Each format offers a different way to engage audiences and can be shaped to match your theme, goals, and context.</p>
            </div>
            {data.map((e, i) => (
              <div className='launch_pad' style={{
                padding: '20px 20px 40px 20px'
              }} key={i}>
                <div>
                  <h2 style={{
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e.title}</h2>

                  <h4 style={{
                    fontWeight: '800',
                    fontSize: '0.8rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e?.subTilte}</h4>

                  <h3 style={{
                    fontWeight: '600',
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>Starting at <span style={{
                    fontWeight:'800'
                    }}>US${e?.price}</span></h3>
                  <h4 style={{
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e?.listTitle} </h4>
                  <ul>

                    {e.list.map((ele,) => (
                      <>
                        <li><img src={listimg} />{ele}</li>
                      </>
                    ))}
                  </ul>
                </div>

                <div className='corporate_btn_wrapper' style={{
                  gridColumn: '1/-1',
                  marginTop: '20px'
                }}>
                  <button className='base_btn_design'>Request a Quote<img src={button} /></button>
                  <button onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))} className='base_btn_design'>Talk to an Expert<img src={buttonIcon2} /></button>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>



      <div className=' corporate_fun_wrapper choose_your_engage_wrapper2'>
        <div className='container rythm_package_prices_wrapper'>
          <div className='solutions_engage_world'>
            <img src={img} />
          </div>
          <div className='rythm_prices_wrapper'>
           
            {data2.map((e, i) => (
              <div className='launch_pad' style={{
                padding: '20px 20px 40px 20px'
              }} key={i}>
                <div>
                  <h2 style={{
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e.title}</h2>

                  <h4 style={{
                    fontWeight: '800',
                    fontSize: '0.8rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e?.subTilte}</h4>

                  <h3 style={{
                    fontWeight: '600',
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>Starting at <span style={{
                    fontWeight: '800'
                  }}>US${e?.price}</span></h3>
                  <h4 style={{
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    marginBottom: '10px',
                    letterSpacing: '0.1rem'
                  }}>{e?.listTitle} </h4>
                  <ul>

                    {e.list.map((ele,) => (
                      <>
                        <li><img src={listimg} />{ele}</li>
                      </>
                    ))}
                  </ul>
                </div>

                <div className='corporate_btn_wrapper' style={{
                  gridColumn: '1/-1',
                  marginTop: '20px'
                }}>
                  <button className='base_btn_design'>Request a Quote<img src={button} /></button>
                  <button onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))} className='base_btn_design'>Talk to an Expert<img src={buttonIcon2} /></button>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>

    </>
  )
}

export default Chooseyourengagelive
