import {NavLink, BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {HiShoppingCart} from 'react-icons/hi'
import {AiOutlineHeart, AiOutlineMenu} from 'react-icons/ai'
import './header.scss'
import { useEffect, useState } from 'react'
import {Localobj} from '../../typescript'
import Subcart from '../subcart/subcart'
import {useCartState } from '../../cart-context'
import { MdOutlineClose } from 'react-icons/md'

function Header(){
    const [opa, setOpa]= useState<number>(-400);
    const [menuheight, setMenuheight]= useState<number>(-400);
    let qty= useCartState()?.totalquantity;

    let activecolor=({isActive} : any)=>{
        return {color: isActive ? "#717fe0" : ""};
    }

    let menustyle={
        top: menuheight
    }
    const [cartdata, setCartdata]= useState<Localobj[] | null>(null);

    useEffect(()=>{
        let str: string=localStorage.getItem("cartdata") || '';
        setCartdata((str!='') && JSON.parse(str))
    },[opa])
    
    return(
        <div>
            <div className={'header'}>
                <NavLink to='/shopZy-app' className='shopname'><h2>ShopZy</h2></NavLink>
                <div className='left'>
                    <NavLink to='/shopZy-app/' style={activecolor}>Home</NavLink>
                    <NavLink to='/shopZy-app/shop' style={activecolor}>Shop</NavLink>
                    <div className={'features'}><NavLink to='/shopZy-app/features' style={activecolor}>Features </NavLink><div className='hot'>HOT</div></div>
                    <NavLink to='/shopZy-app/about' style={activecolor}>About</NavLink>
                    <NavLink to='/shopZy-app/contact' style={activecolor}>Contact</NavLink>
                </div>
                <div className={'right'}>
                    <div className='itemcontainer'>
                        <HiShoppingCart className={'iconstyle'} onClick={()=>setOpa(0)}/>
                        <div className='totalitem'>{qty}</div>
                    </div>
                    <div className="vl"></div>
                    <div className='itemcontainer'>
                        <Link to="/shopZy-app/fav"><AiOutlineHeart className={'iconstyle'}/></Link>
                        <div className='totalitem'>{useCartState()?.favproduct.length}</div>
                    </div>
                    <div className="vl"></div>
                    <div>
                        <AiOutlineMenu className='iconstyle menuicon' onClick={()=> menuheight==80 ?setMenuheight(-400) :setMenuheight(80) } />
                    </div>
                  </div>
            </div>


            <div className={opa==0 ? "blur" : ""} onClick={()=>setOpa(-400)}> 
            </div>
            <div className={'cart'} style={{right: opa}}>
                <div style={{display:'flex', justifyContent:"space-around", alignItems:"center" }}>
                    <h3>YOUR CART</h3>
                    <div style={{cursor:"pointer", fontSize:25, marginTop:10}} onClick={()=>setOpa(-400)}> <MdOutlineClose />  </div>
                </div>
                <Subcart setOpa={setOpa}/>
            </div>

            
           <div className="menu" style={menustyle} >
                    <NavLink to='/shopZy-app/' onClick={()=> setMenuheight(-400) }>Home</NavLink>
                    <NavLink to='/shopZy-app/shop' onClick={()=> setMenuheight(-400) }>Shop</NavLink>
                    <NavLink to='/shopZy-app/features' onClick={()=> setMenuheight(-400) }>Features </NavLink>
                    <NavLink to='/shopZy-app/about' onClick={()=> setMenuheight(-400) }>About</NavLink>
                    <NavLink to='/shopZy-app/contact' onClick={()=> setMenuheight(-400) }>Contact</NavLink>
           </div>
            
        </div>
    )
}
export default Header;