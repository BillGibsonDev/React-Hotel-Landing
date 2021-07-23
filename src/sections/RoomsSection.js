// styled
import styled from 'styled-components';

import Room1 from '../images/room5.jpg';
import Room2 from '../images/room2.jpg';
import Room3 from '../images/room3.jpg';

const RoomsSection = () => {
    return (
        <StyledRoom id="rooms">
        <h2>Choose Your Room</h2>
        <div className="roomContainer">
            <article>
                <img className="roomImage" src={Room1} alt="room" />
                <h4>Classic Room</h4>
                <h5>$150/ per night</h5>
                <h6>Free Wifi</h6>
                <h6>1 King Bed</h6>
                <h6>Patio</h6>
                <h6>2 Person Room</h6>
                <a className="selectBtn" href="#">Select Room</a>
            </article>
            <article>
                <img className="roomImage" src={Room2} alt="room"/>
                <h4>Fancy Room</h4>
                <h5>$250/ per night</h5>
                <h6>Free Wifi</h6>
                <h6>1 King Bed</h6>
                <h6>Patio</h6>
                <h6>2 Person Room</h6>
                <a className="selectBtn" href="#">Select Room</a>
            </article>
            <article>
                <img className="roomImage" src={Room3} alt="room"/>
                <h4>Modern Room</h4>
                <h5>$200/ per night</h5>
                <h6>Free Wifi</h6>
                <h6>1 King Bed</h6>
                <h6>Patio</h6>
                <h6>2 Person Room</h6>
                <a className="selectBtn" href="#">Select Room</a>
            </article>
        </div>
    </StyledRoom>
    )
}

const StyledRoom = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1450px){
            width: 95%;
        } 
    h2 {
        width: 80%;
        font-size: 3em;
        margin: 1em 0;
        border-top: 3px solid rgba(101, 78, 163, 0.534);
        text-align: left;
        color: #7b45aa;
    }
    .roomContainer {
        height: 90%;
        width: 90%;
        display: flex;
        margin: 3em auto;
        @media (max-width: 650px){
            width: 95%;
        }
    }
    article {
        width: 32%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 0 1em;
        box-shadow: 6px 6px 10px #7b45aa5c;
        border: 1px solid rgba(101, 78, 163, 0.534);
        border-radius: 8px;
        &:hover {
            background: rgba(101, 78, 163, 0.2);
            transform: scale(1.1);
            transition: 0.3s;
            z-index: 99;
        }
    }
    .roomImage {
        width: 95%;
        border-radius: 8px;
        position: relative;
        margin: 6px;
    }
    h4 {
        font-size: 2em;
        font-weight: normal;
        text-decoration: underline 3px solid;
        text-underline-position: under;
    }
    h5 {
        margin: 8px;
        font-size: 1.5em;
    }
    h6 {
        font-size: 1em;
        margin: 8px;
        font-weight: normal;
    }
    .selectBtn {
        margin: 1em 0;
        border: 1px solid rgba(101, 78, 163, 0.534);
        border-radius: 8px;
        padding: 8px 1em;
        color: #7b45aa;
        &:hover {
            background: rgba(101, 78, 163, 0.8);
            color: white;
            transition: 0.3s;
        }
    }

`;

export default RoomsSection;