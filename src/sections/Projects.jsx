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
        <ProjectCard>
          <img src='Unity' alt='Unity' />
          <Content>
            <h3>Youtube</h3>
            <p>Canale in cui divulgo</p>
            <Tags>
              <Tag hashtag="YouTube" />
              <Tag hashtag="Personal Brand" />
            </Tags>
          </Content>
          <CardActions visit="https://t.me/finanzacheconta" />
        </ProjectCard>
        <ProjectCard>
          <img src='dbPlain.png' alt='dbPlain' />
          <Content>
            <h3>dbPlain</h3>
            <p>Test</p>
            <Tags>
              <Tag hashtag="Big Proj" />
              <Tag hashtag="DB" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/dbPlain/dbPlain" />
        </ProjectCard>
        <ProjectCard>
          <img src='EventsAggregator.png' alt='EventsAggregator' />
          <Content>
            <h3>EventsAggregator</h3>
            <p>Test</p>
            <Tags>
              <Tag hashtag="Ruby On Rails" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/EventsAggregator/EventsAggregator" />
        </ProjectCard>
        <ProjectCard>
          <img src='syno.png' alt='syno' />
          <Content>
            <h3>Synology Photos Memory</h3>
            <p>Test</p>
            <Tags>
              <Tag hashtag="Synology" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/treyg/synology-photos-memories" />
        </ProjectCard>
      </Holder>
    </div>
  )
}
