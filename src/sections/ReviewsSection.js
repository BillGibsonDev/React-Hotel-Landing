
// styled
import styled from 'styled-components';

// images
import ReviewImage from '../images/travel2.jpg';
import Reviewer from '../images/reviewer1.jpg';


const ReviewsSection = () => {
    return (
        <StyledReview>
            <h2>See Satisfied Adveturer Reviews</h2>
            <article>
                <img src={ReviewImage} />
                <div className="reviewInfo">
                    <div className="btnContainer">
                        <button></button>
                        <button></button>
                    </div>
                    <p>"Our Orlando, Florida Resort was rated amongst the top destintations in America for sight seeing and overall views. Something else in this paragraph that I haven't came up with yet."</p>
                    <div className="reviewerContainer">
                        <img src={Reviewer} />
                        <div className="reviewerWrapper">
                            <h4>Martha Riley</h4>
                            <h5>Satisifed Adventurer</h5>
                        </div>
                    </div>
                </div>
            </article>
    </StyledReview>
    )
}

const StyledReview = styled.div`
    height: 60vh;
    width: 80%;
    background: rgb(255, 255, 255);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
        h2 {
            font-size: 3em;
            border-top: solid 3px #7b45aa;
            width: 80%;
            color: #7b45aa;
            margin: 0 auto;
        }
        article {
            height: 50%;
            width: 80%;
            background: rgba(101, 78, 163, 0.185);
            border-radius: 8px;
            display: flex;
            margin: 2em auto;
            img {
            width: 320px;
            border-radius: 8px;
            }
        .btnContainer {
            position: absolute;
            right: 0;
            top: 0;
         button {
            background: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin: 0 10px;
            &:hover {
                background: lightgray;
                transform: scale(1.1);
                transition: 0.3s;
            }
        }
        button i {
            font-size: 2em;
            margin: 8px 8px;
        }
    }
    .reviewInfo {
        display: flex;
        flex-direction: column;
        margin: 3em;
        p {
            font-size: 1em;
            margin: 1em auto;
        }
        h4 {
            font-size: 1.2em;
        }
        .reviewerContainer {
            display: flex;
            margin: 1em;
            img {
            width: 80px;
            border-radius: 8px;
            }
        }
        .reviewerWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            h5 {
                opacity: .7;
            }
        }
    }
}
    
`;

export default ReviewsSection;