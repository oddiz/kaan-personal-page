import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Gradient1 = styled.span`
    position: absolute;
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
    position: absolute;
    bottom: -500px;
    right: -500px;

    border-radius: 100%;
    width: 980px;
    height: 980px;

    background: #102F53AA;

    filter: blur(100px);
    z-index: 0;

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
        {activeIndex === 0 && <Landing />}
        {activeIndex === 1 && <Projects />}
        {activeIndex === 2 && <Contact />}

    </div>
  );
}

export default App;
