import { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { Link, useSearchParams } from 'react-router-dom';
import {useCartState, useDispactdata } from '../../cart-context'
import './Cart.scss'

function Cart(){
    let cartdata=useCartState()?.product;
    let dispatch=useDispactdata();
    const [msg, setMsg] = useState<string>('none');
    function fillrow(){
        let temp= cartdata?.map((x)=> {
            return(
                <tr key={x.id}>
                    <td> <div className='imgcontainer' onClick={()=>{dispatch({ type: 'REMOVE_PRODUCT', index: x.id})}}><img src={x.img} /></div> </td>
                    <td> {x.title}</td>
                    <td><div className='rate'><BiRupee />{ x.price}</div></td>
                    <td><div className="quantity">
                            <button onClick={()=>dispatch({type: 'Decrease', index: x.id}) } >-</button>
                            <input type='number' value={x.quantity} readOnly />
                            <button onClick={()=>dispatch({type: 'Increase', index: x.id}) }>+</button>
                        </div></td>
                    <td><div className='rate'><BiRupee />{x.price * x.quantity}</div></td>
                </tr>
            )
        })
        return temp;
    }
    return(
        <div className='cartcontainer' >
            <div style={{alignSelf: "baseline", marginLeft: '5vw'}}>
                <ul className="path">
                    <li><Link to='/shopZy-app/'>{"Home"}</Link></li>
                    <li>{">"}</li>
                    <li>{"Shopping cart"}</li>
                </ul>
            </div>
            {cartdata?.length == 0 && <h3>Cart Empty</h3> }
            <div className='pricecontainer' style={{display: (msg)== 'none'? 'flex' : 'none'}}>
                
                <div className='tablecontainer'>  
                    {cartdata?.length != 0 && 
                        <table className='table'>
                                <tbody >
                                <tr>
                                    <th>Product</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                                {fillrow()}
                                </tbody>
                            </table>
                    }
                </div>
                <div className='totalprice'>
                    <h3>CART TOTALS</h3>
                    <p><b>Total Price:</b> &nbsp;&nbsp;&nbsp;&nbsp; <BiRupee />{useCartState()?.totalprice}</p>
                    {cartdata?.length != 0 && <button onClick={()=> {setMsg('block'); dispatch({type:'Checkout'})}} >Proceed to Checkout</button>}
                </div>
            </div>
            <div style={{display: msg}}>
                <h1>Thanks for purchasing</h1>
            </div>
        </div>
    )
}

export default Cart;