import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    position: fixed;
    top: 0px;

    width: 100%;
    //height: ${props => props.activePage !== 1 ? "100px" : "50px"};
    height: 100px;
    
    @media (max-height: 468px) {
        height: 50px;
    }

    transition: all 0.2s cubic-bezier(.09,.67,.69,.99);
    z-index: 9999;

`;

const NavbarItem = styled.div`
    font-family: "Ubuntu Mono", monospace;
    color: white;

    text-decoration: ${props => props.active ? "underline" : "none"};
    cursor: pointer;
`;

const NavbarItemsContainer = styled.div`
    position: relative;

    font-size: 1.3em;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: end;
    width: 550px;
`;

function Navbar (props) {

    const pages = props.pages


    function navbarClicked(index) {
        props.setActive(index);
    }
    
    

    const NavbarItems = pages.map((page, index) => {
        return (
        <NavbarItem 
            active= {props.activeIndex === index} 
            key={index}
            onClick={ () => navbarClicked(index) }
        >
            {page}
        </NavbarItem>
        )
    })

    return(
        <NavbarContainer
            activePage = {props.activeIndex}
        >
            <NavbarItemsContainer>
                {NavbarItems}
            </NavbarItemsContainer>


        </NavbarContainer>
    )
}
export default Navbar;