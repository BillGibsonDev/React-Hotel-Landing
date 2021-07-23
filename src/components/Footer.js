// styled
import styled from 'styled-components';

// images
import Linkedin from '../images/linkedinWhite.png';
import Twiiter from '../images/twitterWhite.png';
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instaWhite.png';
import Github from '../images/githubWhite.png';

const Footer = () => {
    return (
        <StyledFooter id="footer">
        <div className="contactContainer">
            <div className="contactListContainer">
                <h5>Logo</h5>
                <h6>555-666-777</h6>
                <h6>Info@Website.com</h6>
                <h6>444 Main St, Orlando, FL, US 09876</h6>
            </div>
            <div className="contactListContainer">
                <h5>Legal</h5>
                <h6>Terms of Service</h6>
                <h6>Privacy Policy</h6>
                <h6>Cookie Policy</h6>
            </div>
            <div className="contactListContainer">
                <h5>Resources</h5>
                <h6>How It Works</h6>
                <h6>Website</h6>
                <h6>Contact</h6>
            </div>
            <div className="contactListContainer">
                <h5>Newsletter</h5>
                <h6>Sign up for the latest news and offers</h6>
                <label for="">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="submit">Join</button>
                </label>
            </div>
        </div>
        <div className="bottomFooter">
            <div className="iconContainer">
                <a href="https://linkedin.com" target="_blank"><img src={Linkedin} alt="company linkedin link" /></a>
                <a href="https://facebook.com" target="_blank"><img src={Facebook} alt="company facebook link" /></a>
                <a href="https://twitter.com" target="_blank"><img src={Twiiter} alt="company twitter link" /></a>
                <a href="https://instagram.com" target="_blank"><img src={Instagram} alt="company Instagram link" /></a>
                <a href="https://github.com" target="_blank"><img src={Github} alt="company github link" /></a>
            </div>
            <p>&copy; 2021 Hotely.com</p>
        </div>
    </StyledFooter>
    )
}

const StyledFooter = styled.div`
    height: 45vh;
    width: 80%;
    margin: auto;
    margin-bottom: 2%;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1450px){
            width: 95%;
        } 
        @media (max-width: 650px){
           height: 100%;
        }
    .contactContainer {
        width: 100%;
        height: 70%;
        display: flex;
        margin: 0 auto;
        background: #7b45aa;
        @media (max-width: 650px){
            flex-direction: column;
        }
    .contactListContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        flex-direction: column;
    h5 {
        font-size: 1.5em;
        text-decoration: underline;
        text-underline-position: under;
        margin: .5em;
        @media (max-width: 650px){
            font-size: 3em;
        }
        
    }
    h6 {
        font-size: 1em;
        opacity: .9;
        cursor: pointer;
        margin: 3px;
        @media (max-width: 650px){
            font-size: 2em;
        }
        &:hover {
            color: white;
            transform: scale(1.1);
            transition: 0.3s;
        }
    }
    label {
        margin: 8px;
        @media (max-width: 650px){
            font-size: 2em;
            margin: 2em auto;
        }
    }
    input,
    button {
        font-size: 1em;
        padding: 6px 1em;
        border-radius: 9px;
    }
    button {
        background: white;
        border: none;
        color: #7b45aa;
        letter-spacing: 1px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            color: white;
            background: black;
            transition: 0.3s;
        }
    }
}
}
    .bottomFooter {
        height: 20%;
        background: #7b45aa;
        border-radius: 0 0 12px 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 650px){
            flex-direction: column;
        }
    .iconContainer {
    display: flex;
    width: 30%;
    align-items: center;
    @media (max-width: 920px){
        width: 90%;
        margin: auto;
        justify-content: center;
    }
    img {
        margin: 0 10px;
        width: 50px;
        &:hover {
            transform: scale(1.2);
            transition: 0.3s;
        }
    }
}
p {
    font-size: 2em;
}
}
`;

export default Footer;