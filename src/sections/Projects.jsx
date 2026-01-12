import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section' id="projects">
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='Finance.png' alt='Finance' />
          <Content>
            <h3>Finanza che conta</h3>
            <p>Controlla...</p>
            <Tags>
              <Tag hashtag="Telegram Bot" />
              <Tag hashtag="Finance" />
            </Tags>
          </Content>
          <CardActions visit="https://t.me/finanzacheconta" source="https://github.com/Loenus/finanza-che-conta" />
        </ProjectCard>
      </Holder>
    </div>
  )
}
