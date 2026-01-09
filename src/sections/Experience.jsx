import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import { TimeStamp } from "../components/TimelineItem";
import TestImg from '../assets/test.png'
import '../styles/experience.css';

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }} id="experience">
            <h2>Work Experience</h2>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>First job</h3>
                    <p>Gained hands-on experience by contributing to real-world projects, implementing features, fixing bugs, and optimizing workflows. Collaborated with team members to deliver solutions and improve overall project quality.</p>
                    <Timeline>
                        <TimelineItem icon={<img src={TestImg} />} color="rgb(223, 109, 20)" to="https://www.linkedin.com/company/minsait/about/">
                            <h4>Name Test</h4>
                            <TimeStamp stamp="2022" />
                            <p>Worked as a Full Stack Web Developer using the MERN stack. I gained hands-on experience in working with production environments, writing and executing test cases, and creating documentation.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
}