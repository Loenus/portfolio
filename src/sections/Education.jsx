import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import { TimeStamp } from "../components/TimelineItem";
import TestImg from '../assets/test.png'
import LaSapienza from '../assets/la-sapienza.png'
import Learning from '../assets/learning.svg?react'
import '../styles/education.css'

export default function Education() {
    return (
        <div className='section education-section' id='education'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
                            <h4>Certifications</h4>
                            <TimeStamp stamp="2023 - 2025" />
                            <ul className="cert-list">
                                <li><i className="fa fa-cloud"></i> Generative AI Essenials on AWS</li>
                                <li><i className="fa fa-cubes"></i> Certified Kubernetes Application Developer (CKAD)</li>
                                <li>
                                    <i className="fa fa-database"></i>
                                    <a href="https://graphacademy.neo4j.com/c/f2eb92b3-48e2-4cee-a1f8-f65327e22e77/" target="_blank" rel="noreferrer">
                                        Neo4j Certified Professional
                                    </a>
                                </li>
                            </ul>
                        </TimelineItem>
                        <TimelineItem icon={<img src={LaSapienza} />} bgColor="#444444">
                            <h4>La Sapienza - University of Rome</h4>
                            <TimeStamp stamp="2019 - now" />
                            <p>Computer Engineering</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
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