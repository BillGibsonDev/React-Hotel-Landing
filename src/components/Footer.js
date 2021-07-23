// styled
import styled from 'styled-components';

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
                    <input type="email" value="Enter email Address" />
                    <button type="submit">Join</button>
                </label>

            </div>
        </div>
        <div className="bottomFooter">
            <div className="socials">
                <a href="#">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fab fa-pinterest-square"></i>
                </a>
            </div>
            <p>&copy; 2021 Logo.com</p>
        </div>
    </StyledFooter>
    )
}

const StyledFooter = styled.div`
    height: 45vh;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    .contactContainer {
        width: 100%;
        height: 70%;
        display: flex;
        margin: 0 auto;
        background: #7b45aa;
    }
    .contactListContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        flex-direction: column;
    }
    h5 {
        font-size: 1.5em;
        text-decoration: underline;
        text-underline-position: under;
        margin: .5em;
        opacity: .6;
    }
    h6 {
        font-size: 1em;
        opacity: .8;
        cursor: pointer;
        margin: 3px;
        &:hover {
            color: white;
        }
    }
    label {
        margin: 8px;
    }
    input,
    button {
        font-size: 1em;
        padding: 6px 1em;
        border-radius: 9px;
    }
    button {
        background: #7b45aa;
        border: none;
        color: white;
        letter-spacing: 1px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            color: #7b45aa;
            background: white;
            transition: 1s ease-in-out;
        }
    }
    .bottomFooter {
        height: 20%;
        background: #7b45aa;
        border-radius: 0 0 12px 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .socials {
        display: flex;
        align-items: center;
    a {
        color: white;
    }
    i {
        font-size: 2em;
        width: 50%;
        margin: .5em;
    }
    }
`;

export default Footer;