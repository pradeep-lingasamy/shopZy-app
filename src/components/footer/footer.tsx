import './footer.scss'
function Footer(){
    return(
        <div className="footer">
            <div className="mainsection">
                <div className='section'> 
                    <ul className='list'>
                        <li>CATEGORIES</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                </div>
                <div className='section'>
                    <ul className='list'>
                        <li>HELP</li>
                        <li>Track Order</li>
                        <li>Return</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className='section' style={{display:'flex'}}>
                    <div>
                        <ul className='list'>
                            <li>GET IN TOUCH</li>
                            <li><p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p></li>
                        </ul>
                    </div>
                </div>
                    <div className='section'    >
                        <ul className='list'>
                            <li>NEWSLETTER</li>
                            <input type='email' placeholder='email@example.com'/>
                            <div className='hrdiv'>
                            <hr className='hr1' /> 
                            <hr className='hr2' />
                            </div> 
                            <li><button>SUBSCRIBE</button></li>
                        </ul>
                    </div>
                
            </div>
            <p>Copyright ©2022 All rights reserved | This is made by &hearts; Pradeep</p>
        </div>
    )
}

export default Footer;