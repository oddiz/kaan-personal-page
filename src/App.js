import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const AppContainer = styled.div`
    text-align: center;
    background: ${props => props.backgroundColor};

    width: 100vw;
    height: 100vh;
    min-height: 440px;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    justify-content: center;

    transition: background-color 0.8s cubic-bezier(.09,.67,.69,.99);
`

const Gradient1 = styled.span`
    position: fixed;
    top: ${props => -props.activeIndex*100 + -85}vh;
    left: -550px;

    border-radius: 100%;
    width: 1280px;
    height: 1280px;

    background: #0943478A;


`
const Gradient2 = styled.span`
    position: fixed;
    bottom: ${props => props.activeIndex*100 + -60}vh;
    right: -500px;

    border-radius: 100%;
    width: 980px;
    height: 980px;

    background: #102F53AA;


`
const Gradient3 = styled.span`
    position: fixed;
    top: ${props => -props.activeIndex*100 + 125}vh;
    left: -950px;

    border-radius: 100%;
    width: 1280px;
    height: 1280px;

    background: #0000001a;;

    


`
const Gradient4 = styled.span`
    position: fixed;
    bottom: ${props => props.activeIndex*100 + -260}vh;
    right: -500px;

    border-radius: 100%;
    width: 980px;
    height: 980px;

    background: #37d75f1f;



`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`
const DownArrow = styled(MdKeyboardArrowDown)`
    color: #FFFFFF;

    opacity: 0.2;
    width: 60px;
    height: 60px;

    position: relative;
    bottom: 15px;
    transform: scaleX(2);

    @media (min-width: 800px) {

        margin-left: 140px;
    }

`

const Content = styled.div`
    @media (min-width: 800px) {

        margin-left: 140px;
    }
    z-index: 10000;
`

function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    const [lastPageChange, setLastPageChange] = useState(0);

    const pages = [
        "ABOUT ME", "PROJECTS", "CONTACT"
    ]

    const backgroundColors =[
        "#072038",
        "#022c33",
        "#173535",
    ]

    function changeActivePage(index) {
        setActiveIndex(index);
        setLastPageChange(Date.now());
    }

    function wheelListener(e) {
        if (lastPageChange + 400 > Date.now()) {
            return
        }

        if (e.deltaY < 0) {
            //wheel down
            if (activeIndex > 0) {
                changeActivePage(activeIndex - 1);
            }
        } else if(e.deltaY > 0) {
            //wheel up

            if (activeIndex < pages.length - 1) {
                changeActivePage(activeIndex + 1);
            }
        }
    }

  return (
    <AppContainer 
        onWheel = {(e) => wheelListener(e)}
        backgroundColor = {backgroundColors[activeIndex]}
    >
    
        <Gradient1 className={"blob"} activeIndex = {activeIndex} />
        <Gradient2 className={"blob"} activeIndex = {activeIndex} />
        <Gradient3 className={"blob"} activeIndex = {activeIndex} />
        <Gradient4 className={"blob"} activeIndex = {activeIndex} />
        <Navbar 
            activeIndex = {activeIndex}
            setActive = {changeActivePage}
            pages = {pages}
        />
        <Content>
            {activeIndex === 0 && <Landing />}
            {activeIndex === 1 && <Projects />}
            {activeIndex === 2 && <Contact />}
        </Content>
        <Footer>
            {activeIndex !== 2 && <DownArrow />}
        </Footer>
    </AppContainer>
  );
}

export default App;
