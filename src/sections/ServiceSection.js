// styled
import styled from "styled-components";

// images
import AdImage from '../images/adimage.jpg';
import AdImage2 from '../images/travel4.jpg';
import Timely from '../images/timely.png';
import Friendly from '../images/friendly.png';
import Food from '../images/eat.png';
import Locations from '../images/location.png';

const ServiceSection = () => {
    return (
        <StyledService>
        <article className="topAd">
            <img className="adImage" src={AdImage2} alt="advesting" />
            <div className="rightAdText">
                <h4>Your Dreams are our Goals!</h4>
                <p>At each Hotely location our Hotels and Staff main focus is your complete and total satisfaction. Enjoy our exclusive services at our amazing locations! </p>
                <a className="adBtn" href="#rooms">Book Now</a>
            </div>
        </article>
        <article className="bottomAd">
            <div className="leftAdText">
                <h4>See Our Services</h4>
                <p>Enjoy our exclusive amenities!</p>
                <div className="serviceList">
                    <div className="service">
                        <img src={Food} alt="" />
                        <h6>Quality Food</h6>
                    </div>
                    <div className="service">
                        <img src={Timely} alt="" />
                        <h6>Timely Service</h6>
                    </div>
                    <div className="service">
                        <img src={Friendly} alt="" />
                        <h6>Friendly Staff</h6>
                    </div>
                    <div className="service">
                        <img src={Locations} alt="" />
                        <h6>Great Locations</h6>
                    </div>
                </div>

            </div>
            <img className="adImage" src={AdImage} alt="bootom ad" />
        </article>
        </StyledService>
    )
}

const StyledService = styled.div`
        height: 40%;
        width: 80%;
        display: flex;
        flex-direction: column;
        background: white;
        margin: auto;
    .topAd,
    .bottomAd {
        display: flex;
        width: 80%;
        margin: 2% auto;
        justify-content: space-between;
    }
    .adImage {
        border-radius: 8px;
        width: 480px;
        box-shadow: 6px 6px 6px rgba(133, 133, 133, 0.5);
    }
    .rightAdText,
    .leftAdText {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 5%;
        width: 50%;
    }
    h4 {
        font-size: 1.5em;
        margin: 1em 0;
    }
    p {
        margin: .5em 0;
        font-size: 1.5em;
    }
    .adBtn {
        padding: 8px 2em;
        border: 2px solid rgba(101, 78, 163, 0.658);
        font-size: 1.5em;
        background: rgb(101, 78, 163);
        margin: 1em 0;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        font-weight: 700;
        &:hover {
            transform: scale(1.1);
            transition: 0.3s ease;
        }
    }
    .serviceList {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1em;
        margin: 2em 0;
    }
    .service {
        display: flex;
        align-items: center;
        p {
            font-size: 1em;
            margin: 1em 0;
        }
    h6 {
        font-size: 1.2em;
    }
    img {
        width: 50px;
        margin: 6px;
    }
    }
`;

export default ServiceSection;