
// styled
import styled from 'styled-components';

// images
import Hamburger from '../images/hamburgereBlack.png';

const Nav = () => {
  
function toggleNav() {
    var x = document.getElementById('mobileNav');
    if (x.style.width === "100%") {
      x.style.width = "0%";
    } else {
      x.style.width = "100%";
    }
  }

  let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
 let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.position = "fixed";
    } else {
    document.getElementById("nav").style.top = "1%";
    document.getElementById("nav").style.position = "absolute";
  }
  prevScrollpos = currentScrollPos;
}
    return (
        <StyledNav id="nav">
            <h3>Hotely</h3>
            <nav>
                <a href="#home">Home</a>
                <a href="#rooms">Rooms</a>
                <a href="#blog">Blog</a>
                <a href="#footer">Contact</a>
                <a href="#rooms" className="bookBtn">Book Now</a>
            </nav>
            <div id="mobileNav" className="overlay">
                <a className="closebtn" onClick={toggleNav}>&times;</a>
                <div className="overlayContent">
                    <a href="#home">Home</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#blog">Blog</a>
                    <a href="#footer">Contact</a>
                    <a href="#rooms">Book Now</a>
                </div>
            </div>
            <button id="openNavButton" onClick={toggleNav}><img src={Hamburger} alt="menu" id="hamburger" /></button>
    </StyledNav>
    )
}

const StyledNav = styled.div`
     width: 70%;
     height: 10vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background: white;
     margin: 1em auto;
     position: absolute;
     z-index: 999;
     left: 15%;
     border-radius: 8px;
     transition: 0.3s; 
     border: 1px solid rgba(101, 78, 163, 0.534);    
     @media (max-width: 1450px){
         left: 5%;
        width: 90%
    } 
    @media (max-width: 950px){
         left: 2.5%;
        width: 95%;
        height: 7vh;
    } 
     h3 {
         padding: 0 2em;
         font-size: 2.5em;
         color: rgb(101, 78, 163);
     }
     nav {
         display: flex;
         justify-content: center;
         width: 40%;
         align-items: center;
         justify-content: space-around;
     a {
         font-size: 1.2em;
         color: black;
         transition: 0.3s;
         &:hover {
             transform: scale(1.1);
             color: rgb(101, 78, 163);
            }
        }
     .bookBtn {
         padding: 6px 10px;
         border-radius: 6px;
         color: white;
         border: rgb(101, 78, 163) 2px solid;
         cursor: pointer;
         font-weight: 400;
         background-color: rgb(101, 78, 163);
         &:hover {
             transform: scale(1.1);
             transition: 0.3s;
             color: white;
            }
        }
    }
    #mobileNav {
        transition: 0.3s;
    }

     /* nav overlay */
     .overlay {
         width: 0;
         position: fixed;
         z-index: 1000;
         left: 0;
         top: 0;
         background: rgba(0, 0, 0, 0.938);
         overflow-x: hidden;
         transition: 0.5s;
         height: 100%;
     }
     .overlayContent {
         position: relative;
         top: 25%;
         width: 100%;
         text-align: center;
         margin-top: 30px;
     }
     .overlay a {
         padding: 8px;
         text-decoration: none;
         font-size: 36px;
         color: rgb(101, 78, 163);
         display: block;
         transition: 0.3s;
         &:hover,
         &:focus {
             color: white;
             transform: scale(1.1);
             transition: 0.3s;
         }
     }
     .overlay .closebtn {
         position: absolute;
         top: 20px;
         right: 45px;
         font-size: 8em;
         cursor: pointer;
     }
     #openNavButton {
         display: none;
         align-items: center;
         justify-content: center;
         font-size: 6em;
         margin-right: 1em;
         color: rgb(101, 78, 163);
         cursor: pointer;
         &:hover {
             transform: rotateZ(110deg);
             transition: 1s;
         }
     }
     @media screen and (max-height: 450px) {
         .overlay a {
             font-size: 20px
         }
         .overlay .closebtn {
             font-size: 40px;
             top: 15px;
             right: 35px;
         }
     }
 
 
 @media screen and (max-width: 932px) {
         nav{
             display: none;
         }
        #openNavButton {
            display: flex;
            background: none;
            border: none;
            width: 50px;
            #hamburger{
                width: 50px;
            }
        }
        
}
`;


export default Nav;