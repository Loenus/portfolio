import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import { TimeStamp } from "../components/TimelineItem";
import LaSapienza from '../assets/la-sapienza-logo.png'
import Plinio from '../assets/plinio.jpeg'
import Learning from '../assets/learning.svg?react'
import '../styles/education.css'
import BreakableText from "../components/test";

export default function Education() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='section education-section' id='education'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem bgColor="#444444">
                            <h4>Certifications</h4>
                            <TimeStamp stamp="2023 - 2025" />
                            <ul className="cert-list">
                                <li>
                                    <a 
                                        href="https://drive.google.com/file/d/1wXaerB8ItphfVFVveryuM0BtzSH0LiUN/view?usp=sharing" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="cert-pill"
                                    >
                                        <i className={`fa-solid fa-cloud ${theme === 'dark' ? 'light' : 'dark'}`}></i>
                                        Generative AI Essentials on AWS
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://drive.google.com/file/d/16Hp1MtAHx1I17amjdU5k6Rnif1cyqSrB/view?usp=sharing" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="cert-pill"
                                    >
                                        <i className={`fa fa-cubes ${theme === 'dark' ? 'light' : 'dark'}`}></i>
                                        <BreakableText breakpoint={400}> {/* px */}
                                            Certified Kubernetes Application Developer
                                        </BreakableText>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://graphacademy.neo4j.com/c/f2eb92b3-48e2-4cee-a1f8-f65327e22e77/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="cert-pill"
                                    >
                                        <i className={`fa fa-database ${theme === 'dark' ? 'light' : 'dark'}`}></i>
                                        Neo4j Certified Professional
                                    </a>
                                </li>
                            </ul>
                        </TimelineItem>
                        <TimelineItem icon={<img src={LaSapienza} />} bgColor="#444444">
                            <h4 style={{ lineHeight: '1.1', marginBottom: '7px' }}>
                                La Sapienza<br />
                                <span className="uni-subname">University of Rome</span>
                            </h4>
                            <TimeStamp stamp="2019 - now" />
                            <p>Computer Engineering</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={Plinio} />} bgColor="#444444">
                            <h4>Plinio Seniore</h4>
                            <TimeStamp stamp="2014 - 2019" />
                            <p>Scientific High School Diploma</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}