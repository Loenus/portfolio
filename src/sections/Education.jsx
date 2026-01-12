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
                            <h4>AWS and Kuberneetes cert</h4>
                            <TimeStamp stamp="2025" />
                        </TimelineItem>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
                            <a href="https://graphacademy.neo4j.com/c/f2eb92b3-48e2-4cee-a1f8-f65327e22e77/" target="_blank">
                                <h4>Neo4j Certified Professional</h4>
                            </a>
                            <TimeStamp stamp="2023" />
                        </TimelineItem>
                        <TimelineItem icon={<img src={LaSapienza} />} bgColor="#444444">
                            <h4>La Sapienza - University of Rome</h4>
                            <TimeStamp stamp="2019 - now" />
                            <p>Computer Engineering</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}