
// styled
import styled from 'styled-components';

// images
import Blog1 from '../images/travel7.jpg';
import Blog2 from '../images/travel9.jpg';
import User from '../images/user.png';
import Calender from '../images/calender.png';

const BlogSection = () => {
    return (
        <StyledBlog id="blog">
        <h2>Our Latest Blog & News</h2>
        <div className="blog">
            <article>
                <img className="blogImage" src={Blog1} alt="room" />
                <div className="articleInfo">
                    <div className="blogWriter">
                        <img src={Calender} alt="" />
                        <h6>03-24-20</h6>
                    </div>
                    <div className="blogWriter">
                        <img src={User} />
                        <h6>Gus Friendly</h6>
                    </div>
                </div>
                <h4>Remarked as the Best Views in Orlando</h4>
                <p>Our Orlando, Florida Resort was rated amongst the top destintations in America for sight seeing and overall views. Something else in this paragraph that I haven't came up with yet. Something else in this paragraph that I haven't came up
                    with yet.</p>
            </article>
            <article>
                <img className="blogImage" src={Blog2} alt="room"/>
                <div className="articleInfo">
                    <div className="blogWriter">
                        <img src={Calender} alt="" />
                        <h6>03-24-20</h6>
                    </div>
                    <div className="blogWriter">
                        <img src={User} alt="" />
                        <h6>Stan Marsh</h6>
                    </div>
                </div>
                <h4>Top Ranked Destintations from Las Vegas Hotel</h4>
                <p>Our Orlando, Florida Resort was rated amongst the top destintations in America for sight seeing and overall views. Something else in this paragraph that I haven't came up with yet. Something else in this paragraph that I haven't came up
                    with yet.</p>
            </article>
        </div>
    </StyledBlog>
    )
}

const StyledBlog = styled.div`
        height: 100%;
        width: 80%;
        background: white;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        @media (max-width: 1450px){
            width: 95%;
        } 
        h2 {
            margin: 8% 0 5% 0;
            font-size: 3em;
            border-top: solid 3px #7b45aa;
            width: 80%;
            color: #7b45aa;
        }
        .blog {
            display: flex;
            width: 80%;
            margin: auto;
            @media (max-width: 650px){
            flex-direction: column;
            margin: 3em auto;
            }
        }
        article {
            width: 45%;
            height: 700px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            align-items: center;
            margin: 0 auto;
            border-radius: 8px;
            background: lightgray;
            box-shadow: 6px 6px 10px #7b45aa5c;
            padding: 1em;
            @media (max-width: 650px){
            width: 95%;
            height: 100%;
            margin: 2% auto;
            }
        }
        .blogImage {
            width: 100%;
            border-radius: 12px;
            margin: 2em auto;
            }
        .articleInfo {
            display: flex;
            align-items: center;
            margin: 1em;
        }
        .blogWriter {
            display: flex;
            align-items: center;
            img{
                width: 30px;
                height: 25px;
            }
        }
        h6 {
            font-size: 1.2em;
            margin: 6px;
        }
        p {
            font-size: 1.2em;
        }
        h4 {
            font-size: 1.5em;
            margin: .5em 0 1em 0;
            letter-spacing: 1px;
        }
    
`;

export default BlogSection;