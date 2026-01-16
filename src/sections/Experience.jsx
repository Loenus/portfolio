import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import { TimeStamp } from "../components/TimelineItem";
import TestImg from '../assets/test.png'
import Github from '../assets/github.svg?react';
import Internship from '../assets/internship.svg?react'
import Opensource from '../assets/opensource.svg?react'
import '../styles/experience.css';

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }} id="experience">
            <h2>Work Experience</h2>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Corporate Job</h3>
                    <p>Gained hands-on experience by contributing to real-world projects, implementing features, fixing bugs, and optimizing workflows. Collaborated with team members to deliver solutions and improve overall project quality.</p>
                    <Timeline>
                        <TimelineItem icon={<img src={TestImg} />} color="rgb(223, 109, 20)" to="https://www.linkedin.com/company/minsait/about/">
                            <h4>Name Test</h4>
                            <TimeStamp stamp="2022" />
                            <p>Worked as a Full Stack Web Developer using the MERN stack. I gained hands-on experience in working with production environments, writing and executing test cases, and creating documentation.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Internship />
                </div>
            </div>
            <div className='experience'>
                <div className="illustration">
                    <Opensource />
                </div>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>
                        Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.
                        I integrate github actions where I can.
                    </p>
                    <div className="repo-list">
                        <a href="https://github.com/treyg/synology-photos-memories" target="_blank" rel="noopener noreferrer" className="repo-button">
                            <Github />
                            treyg/synology-photos-memories
                        </a>
                    </div>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#5f5f5fff" to="https://github.com/Loenus">
                            <h4>Github</h4>
                            <TimeStamp stamp="2019 - now" />
                            <p>Contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
}