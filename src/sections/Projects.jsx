import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section' id="projects">
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='finanza-che-conta.png' alt='Finance' />
          <Content>
            <h3>Finanza-che-conta</h3>
            <p>
              Finance is a long-term game, but some indicators are more concrete, current, and tangible than others. But who has time to monitor them regularly and remember to do so? 
              Imagine this: a bot that sends a maximum of two notifications a week to an app you already use. Let the technology work for you, so you can focus on making informed decisions with the least amount of effort possible. Goodbye FOMO!
            </p>
            <Tags>
              <Tag hashtag="Telegram Bot" />
              <Tag hashtag="Scheduled" />
              <Tag hashtag="Finance" />
              <Tag hashtag="Python" />
              <Tag hashtag="Web Scraper" />
            </Tags>
          </Content>
          <CardActions visit="https://t.me/finanzacheconta" source="https://github.com/Loenus/finanza-che-conta" />
        </ProjectCard>
        <ProjectCard>
          <img src='Unity' alt='Unity' /> {/* TODO recuperare dal pc con i file */}
          <Content>
            <h3>Unity Tutorial</h3>
            <p>
              Conceived, produced, and published a series of Italian-language tutorials dedicated to video game development with Unity. 
              The project has garnered hundreds of thousands of views, becoming a reference point for novice developers.
            </p>
            <Tags>
              <Tag hashtag="YouTube" />
              <Tag hashtag="Tutorial" />
              <Tag hashtag="Personal Brand" />
              <Tag hashtag="Unity" />
              <Tag hashtag="Adobe Premiere Pro" />
              <Tag hashtag="OBS" />
            </Tags>
          </Content>
          <CardActions visit="https://www.youtube.com/@FactotumProduction/videos" />
        </ProjectCard>
        <ProjectCard>
          <img src='dbPlain3.png' alt='dbPlain' />
          <Content>
            <h3>dbPlain</h3>
            <p>
              The application aims to act as a bridge between the end user and the database, facilitating and speeding up database management. 
              Specifically, the application allows for the simultaneous management of multiple databases, allowing the viewing of their constituent tables and the subsequent insertion/deletion of data as needed.
            </p>
            <Tags>
              <Tag hashtag="Docker Compose" />
              <Tag hashtag="NodeJS" />
              <Tag hashtag="Nginx" />
              <Tag hashtag="CouchDB" />
              <Tag hashtag="PostgreSQL" />
              <Tag hashtag="Google API" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/dbPlain/dbPlain" />
        </ProjectCard>
        <ProjectCard>
          <img src='ruby-on-rails.png' alt='EventsAggregator' />
          <Content>
            <h3>EventsAggregator</h3>
            <p>
              Development of an academic web application aimed at analyzing and using the main features and benefits of the Ruby on Rails framework. 
              The project explored the MVC architecture and framework conventions to create a structured and extensible event aggregator.
            </p>
            <Tags>
              <Tag hashtag="Ruby On Rails" />
              <Tag hashtag="MVC" />
              <Tag hashtag="Web Development" />
            </Tags>
          </Content>
          <CardActions source="https://github.com/EventsAggregator/EventsAggregator" />
        </ProjectCard>
      </Holder>
    </div>
  )
}
