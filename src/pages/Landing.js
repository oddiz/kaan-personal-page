import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";

const Content = styled.div`
    width: 100%;
    height: auto;
    margin-top: -200px;
    text-align: center;

    font-family: "Ubuntu", sans-serif;
    color: white;

    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 3em;

    font-weight: 400;
    margin-bottom: 5vh;
    margin-top: 0px;
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    font-weight: 300;

    padding: 0px 10px;
    max-width: 570px;

    margin: 15px auto;
`;

const Emphasized = styled.span`
    font-family: "Source Code Pro";

    color: ${(props) => props.inputColor || "white"};

    font-smooth: always;
    text-rendering: optimizeLegibility;
`;

const imageSize = 200;
const PfpPicture = styled.img`
    width: ${imageSize}px;
    height: ${imageSize}px;
    border-radius: 100%;
    margin-bottom: 20px;
`;
function Landing() {
    return (
        <Content>
            <FadeIn delay={300}>
                <PfpPicture src="img/pfp.jpg" />
                <Title>Hi there,</Title>

                <Paragraph>
                    I’m Kaan “oddiz” Şarkaya, I love <Emphasized inputColor="#4BD6F4">computers</Emphasized>,{" "}
                    <Emphasized inputColor="#B3FF52">technology</Emphasized> and writing{" "}
                    <Emphasized inputColor="#FF9E47">spaghetti</Emphasized> code.
                </Paragraph>
                <Paragraph>
                    I am not a professional <Emphasized inputColor="#FF4747">programmer</Emphasized> however I binge
                    code random months of the year as a hobby.
                </Paragraph>
            </FadeIn>
        </Content>
    );
}

export default Landing;
