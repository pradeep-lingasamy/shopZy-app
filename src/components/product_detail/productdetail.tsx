import { useEffect, useState } from 'react';
import {Obj, Localobj} from '../../typescript'
import { BiRupee } from "react-icons/bi";
import "./productdetail.scss"
import { useCartState, useDispactdata } from '../../cart-context';

type Propsobj={
    detail:Obj | null,
    par?:string,
}

function Productdetails({detail, par}: Propsobj){

    let dispatch=useDispactdata();  
    const prod=useCartState()?.product!;



    const [ind, setInd]= useState<number>(0);
    const [qty, setQty]= useState<number>(0);

  

    let option=(data: string[] | undefined)=>{
        let s= data?.map(x=><option key={x} value={x}>{x}</option>)
        return s;
    }

    function setdata(){
        let singleob: Localobj={
            id: detail?.id!,
            img: detail?.image[0]!,
            title: detail?.title!,
            price: detail?.price.value!,
            quantity: qty,
        };
        return singleob;
    }

    
    useEffect(()=>{
       setQty(0);
       console.log(par);
        (prod.map((x)=> {if(x.id == parseInt(par!)) setQty(x.quantity)}));
        
    },[par])
    

    
    return(
        <div className="detailcontainer">
        <div className="imagecontainer">
            <div className="threeimage">
                <img src={detail?.image[0]} onClick={()=>setInd(0)} />
                <img src={detail?.image[1]} onClick={()=>setInd(1)} />
                <img src={detail?.image[2]} onClick={()=>setInd(2)}/>
            </div>
            <div className="singleimage">
                {ind==0 && <img src={detail?.image[0]} />}
                {ind==1 && <img src={detail?.image[1]} />}
                {ind==2 && <img src={detail?.image[2]} />}
            </div>
            
        </div>
        <div className="contentcontainer">
            <p>{detail?.title}</p>
            <p className="price"> <BiRupee /> {detail?.price.value}</p>
            <p>{detail?.specification}</p>
            <div  className="addinfo">
                <div>
                  <label htmlFor="size"><p>Size</p></label>
                  <label htmlFor="color"><p>Color</p></label>
                </div>
                <div>
                    <select name="size" id="size" >
                        <option value='none' selected disabled>Choose an option</option>
                        {option(detail?.additioninfo.Size)}
                    </select> <br />
                    <select name="color" id="color" >
                        <option value='none' selected disabled>Choose an option</option>
                        {option(detail?.additioninfo.Color)}
                    </select>
                    <div className='cartbtn'>
                        <div className="quantity">
                            <button onClick={()=>setQty(qty==0? 0: qty-1)}>-</button>
                            <input type='number' value={qty} onChange={(e)=> setQty(parseInt(e.currentTarget.value))} />
                            <button onClick={()=>setQty(isNaN(qty) ? 1: qty+1)}>+</button>
                        </div>
                        { !useCartState()?.togglearray.includes(+(detail?.id!)) ? <button className="cartbutton" onClick={()=>{dispatch({ type: 'ADD_PRODUCT', adddata: setdata() })}}>ADD TO CART</button> :
                                            <button className="cartbutton" onClick={()=>{dispatch({ type: 'REMOVE_PRODUCT', index: detail?.id})}}>Remove from cart</button>
                                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Productdetails;