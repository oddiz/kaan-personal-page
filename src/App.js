import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Gradient1 = styled.span`
    position: fixed;
    top: -750px;
    left: -750px;

    border-radius: 100%;
    width: 1280px;
    height: 1280px;

    background: #0943478A;

    filter: blur(100px);
    z-index: 0;
`
const Gradient2 = styled.span`
    position: fixed;
    bottom: -500px;
    right: -500px;

    border-radius: 100%;
    width: 980px;
    height: 980px;

    background: #102F53AA;

    filter: blur(100px);
    z-index: 0;

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

    function changeActivePage(index) {
        setActiveIndex(index);
        setLastPageChange(Date.now());
        console.log(index, Date.now());
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
    <div 
        className="App" 
        onWheel = {(e) => wheelListener(e)}
    >
        <Gradient1 />
        <Gradient2 />
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
    </div>
  );
}

export default App;
