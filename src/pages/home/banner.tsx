import { Link } from 'react-router-dom'
import data from '../../data/bannerdata'
import './banner.scss'
function Banner(){

    let displaydata=()=>{
        let a= data.map((d)=>{
            return (
                    <div className='subbanner'>
                        <img src={d.img} alt='img' />
                        <div className='bannercontent'>
                            <p className='title'>{d.title}</p>
                            <p className='highlight'>{d.highlight}</p>
                        </div>
                        <Link to="/shop">
                        <div className='fading'>
                        </div>
                        <div className='fadingtxt'>
                            <p>SHOP NOW</p>
                            <hr />
                        </div>
                        </Link>
                    </div>
                    )
        })
        return a;
    }

    return(
        <div className='banner'>
            {displaydata()}
        </div>
    )
}

export default Banner;