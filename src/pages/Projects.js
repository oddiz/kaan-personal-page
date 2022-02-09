import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
const Content = styled.div`
    width: 100%;
    height: auto;

    text-align: center;

    font-family: 'Ubuntu', sans-serif;
    color: white;

    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;

`

const ProjectLink = styled.a`
    font-size: 1.5em;
    font-weight: 500;
`

function Projects() {
    return (
        <Content>
            <FadeIn>
                <h1>
                    Coming soon
                </h1>
                <p>
                    <ProjectLink target="_blank" href="https://ecodiet.kaansarkaya.com"> Ecodiet </ProjectLink> - Diet calculator for Eco game
                </p>
                <p>
                    <ProjectLink target="_blank" href="https://botdiz.kaansarkaya.com"> Botdiz </ProjectLink> - Discord bot that plays music and more

                </p>
                

            </FadeIn>
        </Content>
    )
}

export default Projects;