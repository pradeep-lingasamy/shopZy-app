import "./contact.scss"
import {FiMapPin} from "react-icons/fi"
import {BsTelephone} from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io";
import about from '../../assets/about.jpg';
import Footer from "../../components/footer/footer";
function Contact(){
    return(
        <div>
             <div className="headerimg">
                <img src={about}/>
                <p className='subword'>Contact</p>
            </div>
            <div className="contactContainer">
                <div className="msgContainer">
                    <p>Send Us A Message</p>
                    <input type='email' placeholder="Your Email Address" /> <br/>
                    <textarea placeholder="How Can We Help?" /> <br />
                    <button> submit</button>
                </div>
                <div className="addressContainer">
                    <p className="alignicon"><FiMapPin />  Address</p>
                    <p style={{color: "gray"}}>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                    <p className="alignicon"> <BsTelephone />Let's Talk</p>
                    <p>+919876543210</p>
                    <p className="alignicon"> <AiOutlineMail />Sale Support</p>
                    <p>contact@gmail.com</p>
                </div>
            </div>
        <Footer />
        </div>
    )
}
export default Contact;