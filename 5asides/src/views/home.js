import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import EventCard from '../components/event-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>5-Asides-Turf-Kings</title>
        <meta name="description" content="Footballing institution" />
        <meta property="og:title" content="5-Asides-Turf-Kings" />
        <meta property="og:description" content="Footballing institution" />
      </Helmet>
      <Navigation
        imageSrc="/turfkingscut-1500h.png"
        imageSrc1="/turfkingscut-1500h.png"
      ></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text Heading1">
                <span>5 Asides </span>
                <span className="home-text02">Men-shoulder to shaulder </span>
                <span>IN cape town</span>
              </h1>
              <span className="home-text04">
                <span>
                  boys will be boys, even better when men will be MEN!
                </span>
                <br></br>
                <span>
                  Working class gents breaking a leg every wednesday afternoon
                  for fun and fitness.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-video-container">
              <img alt="image" src="/ball-700w.jpeg" className="home-image" />
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container">
              <span className="home-text09">
                16 Fine players who ensure to play no man or woman, but play the
                ball.
              </span>
              <h1 className="home-text10 Heading2">meet our TEAM</h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard
                role="High Five FC "
                lastName="Memela"
                firstName="Nkululeko"
                imageSrc="/nkululeko-300h.jpeg"
              ></SpeakerCard>
              <SpeakerCard
                role="High Five FC"
                lastName="-"
                firstName="SCOTT"
              ></SpeakerCard>
              <SpeakerCard
                role="High Five"
                lastName="-"
                firstName="DR. Barbs"
                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="High Five FC"
                lastName="Makungo"
                firstName="Khumelani"
                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="High Five FC"
                lastName="Dacosta"
                firstName="Max "
                imageSrc="/max-300h.jpeg"
              ></SpeakerCard>
              <SpeakerCard
                role="Southern Suburbs fc"
                lastName="-"
                firstName="Enoch"
                imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="southern suburbs fc"
                lastName="-"
                firstName="Kaelin"
                imageSrc="/kaelin-300h.jpeg"
              ></SpeakerCard>
              <SpeakerCard
                role="Southern Suburbs FC"
                lastName="-"
                firstName="Theo"
                imageSrc="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="southern Suburbs fc"
                lastName="Buchalter"
                firstName="Josh"
                imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="southern suburbs fc"
                lastName="-"
                firstName="Barlo"
                imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Tidal Wave FC"
                lastName="-"
                firstName="Wesley"
                imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Tidal Wave FC"
                lastName="-"
                firstName="Stubbe"
                imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Tidal Wave FC"
                lastName="-"
                firstName="Humbulani"
                imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Tidal Wave FC"
                lastName="-"
                firstName="Chad"
                imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Tidal Wave FC"
                lastName="-"
                firstName="Obayd"
                imageSrc="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="Rotational Squad player"
                lastName="Mokhiti"
                firstName="Mashudu"
                imageSrc="/mashudu-300w.jpeg"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container01 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text11">
                5-asides compertitive standings 
              </span>
              <h1 className="home-text12 Heading2">
                March 2024: Table Standings
              </h1>
            </div>
            <div className="home-numbers-container">
              <div className="home-max-width2 max-content-container">
                <div className="home-container02">
                  <div className="home-container03">
                    <h1 className="home-text13">Position</h1>
                  </div>
                  <div className="home-container04">
                    <h1 className="home-text14">CLUB</h1>
                  </div>
                  <div className="home-container05">
                    <h1 className="home-text15">MP</h1>
                  </div>
                  <div className="home-container06">
                    <h1 className="home-text16">W</h1>
                  </div>
                  <div className="home-container07">
                    <h1 className="home-text17">D</h1>
                  </div>
                  <div className="home-container08">
                    <h1 className="home-text18">L</h1>
                  </div>
                  <div className="home-container09">
                    <h1 className="home-text19">PTS</h1>
                  </div>
                  <div className="home-container10">
                    <h1 className="home-text20">GF</h1>
                  </div>
                  <div className="home-container11">
                    <h1 className="home-text21">GA</h1>
                  </div>
                  <div className="home-container12">
                    <h1 className="home-text22">GD</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-max-width3 max-content-container">
              <div className="home-container13">
                <div className="home-container14">
                  <h1 className="home-text23">1</h1>
                </div>
                <div className="home-container15">
                  <h1 className="home-text24">Tidal Wave </h1>
                </div>
                <div className="home-container16">
                  <h1 className="home-text25">22</h1>
                </div>
                <div className="home-container17">
                  <h1 className="home-text26">14</h1>
                </div>
                <div className="home-container18">
                  <h1 className="home-text27">2</h1>
                </div>
                <div className="home-container19">
                  <h1 className="home-text28">6</h1>
                </div>
                <div className="home-container20">
                  <h1 className="home-text29">44</h1>
                </div>
                <div className="home-container21">
                  <h1 className="home-text30">35</h1>
                </div>
                <div className="home-container22">
                  <h1 className="home-text31">18</h1>
                </div>
                <div className="home-container23">
                  <h1 className="home-text32">17</h1>
                </div>
              </div>
            </div>
            <div className="home-max-width4 max-content-container">
              <div className="home-container24">
                <div className="home-container25">
                  <h1 className="home-text33">2</h1>
                </div>
                <div className="home-container26">
                  <h1 className="home-text34">High Fives</h1>
                </div>
                <div className="home-container27">
                  <h1 className="home-text35">19</h1>
                </div>
                <div className="home-container28">
                  <h1 className="home-text36">8</h1>
                </div>
                <div className="home-container29">
                  <h1 className="home-text37">3</h1>
                </div>
                <div className="home-container30">
                  <h1 className="home-text38">8</h1>
                </div>
                <div className="home-container31">
                  <h1 className="home-text39">27</h1>
                </div>
                <div className="home-container32">
                  <h1 className="home-text40">20</h1>
                </div>
                <div className="home-container33">
                  <h1 className="home-text41">21</h1>
                </div>
                <div className="home-container34">
                  <h1 className="home-text42">-1</h1>
                </div>
              </div>
            </div>
            <div className="home-max-width5 max-content-container">
              <div className="home-container35">
                <div className="home-container36">
                  <h1 className="home-text43">3</h1>
                </div>
                <div className="home-container37">
                  <h1 className="home-text44">sOUTHERN sUBURBS</h1>
                </div>
                <div className="home-container38">
                  <h1 className="home-text45">17</h1>
                </div>
                <div className="home-container39">
                  <h1 className="home-text46">3</h1>
                </div>
                <div className="home-container40">
                  <h1 className="home-text47">3</h1>
                </div>
                <div className="home-container41">
                  <h1 className="home-text48">11</h1>
                </div>
                <div className="home-container42">
                  <h1 className="home-text49">12</h1>
                </div>
                <div className="home-container43">
                  <h1 className="home-text50">13</h1>
                </div>
                <div className="home-container44">
                  <h1 className="home-text51">28</h1>
                </div>
                <div className="home-container45">
                  <h1 className="home-text52">-15</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image1"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container46">
              <span className="home-text53">CAPE TOWN, SOUTH AFRICA</span>
              <span className="home-text54">WEDNESDAYS, 5-7 PM, 2023</span>
              <div className="home-container47">
                <span className="home-text55">—GRAND </span>
                <span className="home-text56">cENTRAL 5S</span>
                <span className="home-text57">CITY center</span>
              </div>
              <div className="home-container48">
                <span className="home-text58">
                  beautiful, vibrant Cape Town
                </span>
                <span className="home-text59">
                  <span>
                    1. “If it does not challenge you, it does not change
                    you.” Fred DeVito
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    2. “The secret of getting ahead is getting started.” Mark
                    Twain
                  </span>
                  <br></br>
                  <span>
                    3.“Take care of your body. It is the only place you have to
                    live.&quot; Jim Rohn
                  </span>
                  <br></br>
                  <span>
                    4. “Once you exercise regularly, the hardest thing is to
                    stop it.” Erin Grey
                  </span>
                  <br></br>
                  <span>
                    5. “The real workout starts when you want to stop.” Ronnie
                    Coleman
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    6. “I do not count my sit-ups. I only start counting when it
                    starts hurting because they are the only ones that count.”
                    Muhammad Ali
                  </span>
                  <br></br>
                  <span>
                    7. “Confidence comes from discipline and training.” Robert
                    Kiyosaki
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-agenda section-container">
          <div className="home-max-width6 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text74 Heading2">Leadership</h1>
              <span className="home-text75">Captains &amp; Team Manger</span>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <div className="home-line"></div>
                  <span className="home-text76">Wednesday - 5pm</span>
                </div>
                <EventCard
                  text="Manages the team operations and ensures team cohesion and high spirits. Can be a little obtuse in front of goal but threads a pass like Xavi Hernandes, or at least intends to."
                  newProp="Nkululeko Memela"
                  imageSrc="/nkululeko-300h.jpeg"
                ></EventCard>
                <EventCard
                  title="tik tok or what?"
                  imageSrc="/max-300h.jpeg"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <span className="home-text77">wednesday - 7pm</span>
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  text="Captains the Southern Suburbs side, a team of 5 that threatens only to age like fine wine, letting everyone else have their premature heydays. Josh, a tireless winger with pace and wicked reaction time. Phil Foden would be in ore. He still to dig deep to inspire his side. "
                  title="digital marketing strategies"
                  newProp="Josh Buchalter"
                  imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  text="Captains the Tidal Wave, a team that threatens to assert a cultic dominance in the group. Strong Real-Ronaldo like striker who can create magic out of nothing but can be full of himself. "
                  title="a new era of social media"
                  newProp="Humbulani"
                ></EventCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container49">
              <h1 className="home-text78">
                industry professIONALs, part time amature soccer players.
              </h1>
              <span className="home-text79">
                Come view us play is your boredom levels are over the moon,
                WedNESDAYs 5pm.
              </span>
              <span className="home-text80">
                We enjoy each other&apos;s company beyond football. This is one
                of the biggest friendship/networking groups in Cape Town sharing
                one common goal, stay fit.
              </span>
              <button className="button button-md button-outline">
                Check our Social Media
              </button>
            </div>
          </div>
          <img alt="image" src="/team3-1500w.jpeg" className="home-image2" />
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width7 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text81 Heading2">previous Weeks</h1>
              <span className="home-text82">
                Take a tour of our previous week&apos;s performances
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide
              heading="Week 1: Tidal Wave"
              rootClassName="slide-root-class-name4"
            ></Slide>
            <Slide
              heading="Week 2: Tidal Wave"
              rootClassName="slide-root-class-name1"
            ></Slide>
            <Slide
              heading="Week 3: Upcoming"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              heading="Week 4: Upcoming"
              rootClassName="slide-root-class-name3"
            ></Slide>
            <Slide
              heading="Week 5: Upcoming"
              rootClassName="slide-root-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
