
// styled
import styled from 'styled-components';

// images
import Hamburger from '../images/hamburgerWhite.png';

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
            <button id="openNavButton" onClick={toggleNav}><img src={Hamburger} alt="menu" id="hamburgerIcon" /></button>
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
         font-size: 1.5em;
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

     /* nav overlay */
     .overlay {
         width: 0;
         position: fixed;
         z-index: 1000;
         left: 0;
         top: 0;
         background-color: rgb(0, 0, 0);
         background-color: rgba(0, 0, 0, 0.9);
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
             transition: 1s ease;
         }
     }
     .overlay .closebtn {
         position: absolute;
         top: 20px;
         right: 45px;
         font-size: 60px;
     }
     #openNavButton {
         display: none;
         align-items: center;
         justify-content: center;
         font-size: 4em;
         margin: auto;
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
     #nav {
         flex-wrap: wrap;
         box-shadow: 6px 6px 6px rgb(133, 133, 133);
     }
     nav #bookBtn {
         display: none;
     }
     nav li {
         display: none;
     }
     #nav #hamburger {
         display: flex;
     }
 }
 
 @media screen and (max-width: 732px) {
     #nav {
         width: 100%;
         left: 0;
     }
 }

`;


export default Nav;