import styled from 'styled-components';

const BORDER_COLOR = "#03525F";
const BORDER_THICKNESS = "1px";

const ProjectBannerContainer = styled.div`
    width: 280px;
    
    display: flex;
    flex-direction: column;

    margin: 10px 20px;

    transition: all 0.3s ease-in-out;
        
`

const ProjectHeader = styled.div`

    height: 80px;
    width: 100%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    background-size: 100px;
    background-repeat: no-repeat; 
    background: ${props => props.backgroundColor || "black"};
    background-position: center;

    border-top: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    border-right: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    border-left: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
`

const ProjectHeaderImage = styled.img`

    height: 79px;

`

const ProjectBody = styled.div`
    width: 100%;
    height: 350px;
    padding: 25px 20px;
     
    box-sizing: border-box;
    

    font-family: 'Ubuntu', sans-serif;
    color: white;
    
    display: flex;
    flex-direction: column;


    @media (max-height: 620px),
           (max-width: 600px) {
        height: 150px;
        padding: 10px 20px;

    }

    border-right: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    border-left: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    
    transition: all 0.3s ease-in-out;

`

const ProjectTitle = styled.h1`
    font-size: 1.5em;
    font-weight: 500;
    margin-top: 0px;
    
    @media (max-height: 620px),
           (max-width: 600px) {
        margin: 15px 0px;
    }

`

const ProjectDescription = styled.p`

    font-size: 0.9em;
    font-weight: 300;
    margin-bottom: 40px;

    text-align: center;
    white-space: pre-line;
    font-family: "Source Code Pro";
    @media (max-height: 620px),
           (max-width: 600px) {
            text-align: center;


    }
` 

const ProjectFooter = styled.div`
    box-sizing: border-box;
    height: 60px;
    width: 100%;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-right: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    border-left: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
    border-bottom: ${BORDER_THICKNESS} solid ${BORDER_COLOR};
`

const ProjectButton = styled.a`

    background: #225E5A;
    height: 40px;
    width: 140px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    border-radius: 5px;

    &:hover {
        background: #2B8D86;
    }
`

function ProjectBanner (props) {
    

    let description = props.description

    if (props.miniMode) {
        //split string from new lines
        description = description.split("\n")[0]

    }

    return (
        <ProjectBannerContainer>
            <ProjectHeader 
                backgroundColor={props.backgroundColor}
            >
                <ProjectHeaderImage 
                    src= {props.backgroundImage}
                    
                />
            </ProjectHeader>

            <ProjectBody>
                <ProjectTitle>
                    {props.title}
                </ProjectTitle>
                <ProjectDescription>
                    {description}

                </ProjectDescription>


            </ProjectBody>

            <ProjectFooter>
                <ProjectButton 
                    href={props.link}
                    target="_blank"
                >
                    Website
                </ProjectButton>
            </ProjectFooter>
        </ProjectBannerContainer>
    )
}

export default ProjectBanner