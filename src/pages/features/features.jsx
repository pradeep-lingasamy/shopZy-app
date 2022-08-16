import features from "../../assets/features.jpg"
import fe1 from "../../assets/fe1.jpg"
import fe2 from "../../assets/fe2.jpg"
import fe3 from "../../assets/fe3.jpg"
import './features.scss'
import Footer from "../../components/footer/footer"

function Features(){
    return(
        <div>
            <div className="imghead">
                <img src={features}/>
                <p className='subword'>Features</p>
            </div>
            <div className="featurecontainer">
            <div className="mainfeatures">
                <div>
                    <div className="feImgContainer">
                        <img src={fe1} />
                        <span><p>22</p> <small>jan 2022</small></span>
                    </div>
                    <h2>8 Inspiring Ways to Wear Dresses in the Winter</h2>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
                </div>
                <div>
                    <div className="feImgContainer">
                        <img src={fe2} />
                        <span><p>18</p> <small>jan 2022</small></span>
                    </div>
                    <h1>The Great Big List of Men's Gifts for the Holidays</h1>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <p>By Admin |StreetStyle, Fashion, Couple |8 Comments</p>
                </div>
                <div>
                    <div className="feImgContainer">
                        <img src={fe3} />
                        <span><p>16</p> <small>jan 2022</small></span>
                    </div>
                    <h1>5 Winter-to-Spring Fashion Trends to Try Now</h1>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                    <p>By Admin |StreetStyle, Fashion, Couple |8 Comments</p>
                </div>
            </div>
            <div className="submain">
                <input type="text" placeholder="search"/>
                <div className="category">
                    <h2>Category</h2>
                    <hr />
                    <p>Fashion</p>
                    <hr />
                    <p>Beauty</p>
                    <hr />
                    <p>Street Style</p>
                    <hr />
                    <p>Life Style</p>
                    <hr />
                    <p>{"DIY & Crafts"}</p>
                    <hr />
                </div>
                <div className="archive">
                    <h2>Archive</h2>
                    <p>January 2022</p>
                    <p>February 2022</p>
                    <p>March 2022</p>
                    <p>April 2022</p>
                    <p>May 2022</p>
                    <p>June 2022</p>
                </div>
                <div className="tags">
                    <h2>Tags</h2>
                    <div className="spanconatiainer">
                        <span>Fashion</span>
                        <span>Lifestyle</span>
                        <span>Denim</span>
                        <span>Streetstyle</span>
                        <span>Craft</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Features;