// styled
import styled from 'styled-components';

// images
import LandingImage from '../images/pixabay.jpg';

const LandingSection = () => {
    return (
        <StyledLanding id="home">
        <div className="leftColor">
            <div className="leftText">
                <h3>Bring your Dreams,</h3>
                <h3>Leave with Memories</h3>
                <p>Never forget the magical venues you will discover.</p>
            </div>
        </div>
        <div className="homeContents">
            <img className="homeImage" src={LandingImage} alt="room" />
        </div>
        <div className="dateContainer">
            <label for="location">Location:
            <select className="minimal" name="location" id="locationSelect">
                <option value="blank"></option>
                <option value="New York">New York</option>
                <option value="Orlando">Orlando</option>
                <option value="Houston">Houston</option>
                <option value="Las Vegas">Las Vegas</option>
                <option value="San Diego">San Diego</option>
            </select></label>
            <label for="persons">People:
            <select className="minimal" name="location" id="locationSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select></label>
            <label for="checkin-in">Check-In
            <input type="date" /></label>
            <label for="checkin-out">Check-Out
                <input type="date" /></label>
            <button className="dataBtn" type="submit" value="Submit">Check Availability</button>
        </div>
    </StyledLanding>
    )
}


const StyledLanding = styled.div`
    height: 100vh;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: white;
    margin: auto;
    margin-top: 1%;
    .leftColor {
        width: 50%;
        height: 80%;
        background: linear-gradient(to right, #7b45aa, white);
        border-top-left-radius: 12px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .leftText {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 70%;
        top: 40%;
        left: 25%;
        h3 {
            font-size: 3em;
        }
        p {
            font-size: 2em;
        }
    }
    .homeContents {
        display: flex;
        width: 50%;
        height: 80%;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
    }
    .homeImage {
        width: 100%;
        height: 100%;
        position: relative;
        border-top-right-radius: 12px;
    }
    .dateContainer {
        position: absolute;
        bottom: 17%;
        width: 80%;
        height: 10vh;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 6px 6px 6px rgba(133, 133, 133, 0.5);
        z-index: 9;
    }
    select,
    label,
    input {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 1.2em;
        margin: 6px 1em;
        padding: 6px .5em;
        border-radius: 6px;
        color: #7b45aa;
        font-weight: 600;
        cursor: pointer;
    }
    input,
    select {
        border: solid #7b45aa 1px;
    }
    input,
    select {
        &:hover {
            background: lightgray;
        }
    }
    input {
        display: flex;
    }
    select {
        background-color: white;
        border-radius: 4px;
        display: inline-block;
        font: inherit;
        line-height: 1.5em;
        padding: 0.5em 3.5em 0.5em 1em;
        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    select.minimal {
        background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
        background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 1.5em;
        background-repeat: no-repeat;
    }
    select.minimal:focus,
    select.minimal:hover {
        background-image: linear-gradient(45deg, rgb(101, 78, 163)50%, transparent 50%), linear-gradient(135deg, transparent 50%, rgb(101, 78, 163) 50%), linear-gradient(to right, #ccc, #ccc);
        background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 1.5em;
        background-repeat: no-repeat;
        border-color: rgb(101, 78, 163);
        outline: 0;
        font-weight: 700;
    }
    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
        font-weight: 700;
    }
     ::-webkit-calendar-picker-indicator {
        display: none;
    }
     ::-webkit-calendar-picker-indicator::after {
        content: '';
        display: none;
        background: url(/*yourURLHere*/) no-repeat;
        background-size: 10%;
        width: 100px;
        height: 100px;
        position: absolute;
        transform: translateX(-2%);
    }
    .dataBtn {
        font-size: 1em;
        padding: 0 2em;
        border: 1px white solid;
        border-radius: 6px;
        height: 80%;
        background: #7b45aa;
        font-weight: 700;
        color: white;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
            transition: 0.3s ease;
        }
    }
    
`;

export default LandingSection;