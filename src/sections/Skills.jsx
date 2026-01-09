import '../styles/skills.css';
import SkillCard from '../components/SkillCard.jsx';
import { skills } from '../data/skills.js';

export default function Skills() {
    return (
        <div className='skills-section section' id="skills">
            <div className='skills-header'>
                <h2>Skills</h2>
                <div style={{
                    flex: 1
                }}></div>
            </div>
            <SkillCard heading='Frontend' hcolor="#FF6F61" skills={skills.frontend} />
            <SkillCard heading='Backend' hcolor="#6A5ACD" skills={skills.backend} />
            <SkillCard heading='Databases' hcolor="#FFB400" skills={skills.databases} />
            <SkillCard heading='Languages' hcolor="#4CAF50" skills={skills.languages} />
            <SkillCard heading='Tools' hcolor="#00BFFF" skills={skills.tools} />
            <SkillCard heading='Extras' hcolor="#FF69B4" skills={skills.extras} />
        </div>
    );
}
