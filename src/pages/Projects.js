import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProjectBanner from '../components/ProjectBanner';
import useWindowSize from '../components/useWindowSize';



const Content = styled.div`
    width: 100%;
    height: auto;

    margin-top: 20px;

    text-align: center;

    font-family: 'Ubuntu', sans-serif;
    color: white;

    
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 800px) {
       
    }

    transition: all 0.3s ease-in-out;

    z-index: 10;
`

const FadeInFlexed = styled(FadeIn)`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) {

        flex-direction: column;
    }
`

function Projects() {

    const { width, height } = useWindowSize();
     
    let miniMode = false 

    if (height < 620 || width < 600) {
        miniMode =true
    }

    return (
        <Content>
            <FadeInFlexed>
                <ProjectBanner 
                    title="Ecofood"
                    description={`Skillpoint calculator based on what you eat for Eco game.\n\nThis is the first app that I've made after completing an Udemy course for JS and web developement.\n\nFeatures a simple vanilla js frontend + backend for storing highscores.`}
                    link="https://ecofood.app/"
                    backgroundImage="img/ecodiet_logo.png"
                    backgroundColor="#5A5C84"
                    miniMode = {miniMode}
                />
                <ProjectBanner 
                    title="Botdiz"
                    description={`A music bot for discord.\n\nFeatures a nice web interface to control the music player and even import spotify playlists into it.\n\nMy first React webpage and proper full stack project including MongoDB, external and internal auth, websockets.`}
                    link="https://botdiz.kaansarkaya.com/"
                    backgroundImage="img/botdiz_logo.png"
                    backgroundColor="linear-gradient(132deg, rgba(31,29,40,1) 44%, rgba(44,44,62,1) 60%);"
                    miniMode = {miniMode}

                />
                

            </FadeInFlexed>
        </Content>
    )
}

export default Projects;