import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
import {ReactComponent as DiscordLogo} from "../assets/discordlogo.svg"
import { IoAtCircle } from "react-icons/io5";

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


const ContactItem = styled.p`
    font-size: 1.2em;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    align-items: center;


    margin:15px auto;

    
`


const ContactBox = styled.div`
    box-sizing: border-box;
    padding: 1px 50px;
    border-left: 2px solid white;
`

const DiscordLogoStyled = styled(DiscordLogo)`
    width: 50px;
    height: 50px;

    margin-right: 25px;
`

const EmailLogoStyled = styled(IoAtCircle)`
    width: 50px;
    height: 50px;

    margin-right: 25px;
`

function Contact() {
  return (
    <Content>
        <FadeIn
        >
            <ContactBox>
                <ContactItem>
                    <DiscordLogoStyled/>oddiz#9659
                </ContactItem>
                <ContactItem>
                    <EmailLogoStyled />kaansarkaya@gmail.com
                </ContactItem>

            </ContactBox>


        </FadeIn>
    </Content>
  );
}

export default Contact