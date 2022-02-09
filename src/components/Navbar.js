import styled from 'styled-components';


const minNavWidth = "800px";
const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    position: fixed;
    top: 0px;
    left: 0px;
    width: 150px;
    //height: ${props => props.activePage !== 1 ? "100px" : "50px"};
    height: 100%;
    margin-left: 80px;


    
    

    @media (max-width: ${minNavWidth}) {

        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin-left: 0px;
        
        
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
    flex-direction: column;
    justify-content: space-around;
    align-items: start;

    height: 200px;
    


    @media (max-width: ${minNavWidth}) {

        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        width: 550px;
        height: 100px;

        margin-left: 0px;
        @media (max-height: 668px)  {
            height: 50px;
        
        }

    }

    transition: all 0.2s cubic-bezier(.09,.67,.69,.99);
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