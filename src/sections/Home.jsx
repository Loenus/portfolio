import '../styles/home.css'
import IconCloud from '../components/IconCloud'
import SpaceBg from '../components/SpaceBg'
import TestImg from '../assets/test.png'
import HackerText from '../components/HackerText'


export default function Home() {
    return (
        <div className="hero-container" id='home'>
            <div className='hero-1'>
                <IconCloud />
            </div>
            
            <div className='hero-2'>
                    <div>
                        <div className='pf-info'>
                            <div className='malay-img-cont'>
                                <img src={TestImg} alt="Malay" className='malay-img' />
                            </div>
                            <div>
                                <span className='country-badge'>📍Italy</span>
                                <p className='name'>Hi, I'm Lorenzo<span className="wave">👋</span></p>
                            </div>
                        </div>
                        <div className="hacker-text-wrapper">
                            <HackerText
                                words={["Fullstack Developer", "API Expert", "Data Engineer", "DevOps Specialist"]}
                                interval={4500}
                                transitionDuration={900}
                            />
                        </div>
                    </div>
                </div>

            <div id="space-container" className='space-container'>
                <SpaceBg />
            </div>
        </div>
    );
}
