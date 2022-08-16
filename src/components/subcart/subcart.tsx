import './subcart.scss'
import {useCartState, useDispactdata} from '../../cart-context'
import { Link } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import { useState } from 'react';

type Propsobj={
    setOpa:(n:number)=>void
}
function Subcart({setOpa}: Propsobj){
    const product =useCartState()?.product ;
    const dispatch=useDispactdata();
    const [msg, setMsg] = useState<string>('none');

    return(
        <div className='subcartcontainer'>
            <div className='contentscroll'>
                {product?.length! > 0 && product?.map((x)=>{
                    return(
                        <div key={x.id} className='subcontainer'> 
                            <div className='imgcontainer' onClick={()=>{dispatch({ type: 'REMOVE_PRODUCT', index: x.id})}}>
                                <img src={x.img} />
                            </div>
                            <div className='subcartcontent'>
                                <Link to={`/shopZy-app/shop/${x.id}`}><p onClick={()=>setOpa(-400)}>{x.title}</p></Link>
                                <p className='rate'>{x.quantity}  x <BiRupee />{x.price} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            {product?.length! == 0 && <p style={{display: (msg)== 'none'? 'block' : 'none'}}>cart empty</p>}
            <div style={{display: msg}}>
                <h1>Thanks for purchasing</h1>
            </div>
            <div>
                <p>Total Price: {useCartState()?.totalprice}</p>
                <div className='buttondiv'>
                    <Link to='/shopZy-app/cart'><button onClick={()=>setOpa(-400) }>View cart</button></Link>
                    
                    <button onClick={()=> {setMsg('block'); setTimeout(()=>setMsg('none'), 5000);dispatch({type:'Checkout'})}}>Check out</button>
                </div>
            </div>

           
        </div>
    )
}

export default Subcart;