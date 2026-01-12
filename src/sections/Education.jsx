import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import { TimeStamp } from "../components/TimelineItem";
import TestImg from '../assets/test.png'

export default function Education() {
    return (
        <div className='section education-section' id='education'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
                            <h4>High School ?</h4>
                            <TimeStamp stamp="2014 - 2022" />
                            <p>test1: 55</p>
                            <p>test2: 77</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
                            <h4>University [test]</h4>
                            <TimeStamp stamp="2024 - now" />
                            <p>media: 28</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={TestImg} />} bgColor="#444444">
                            <h4>Certification</h4>
                            <TimeStamp stamp="2025" />
                            <p>ttt</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}