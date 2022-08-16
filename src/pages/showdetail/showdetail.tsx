import { Link, useParams } from "react-router-dom";
import { getdata } from "../../api/api";
import { useEffect, useState } from "react";
import './showdetail.scss'
import Footer from "../../components/footer/footer";
import { Obj, Localobj } from "../../typescript";
import Productdetails from "../../components/product_detail/productdetail";


function Showdetail(){
    
    const [desind, setDesind]= useState<number>(0);
    
   
    
    type Paramobj={
        id:string
    }
    let param=useParams< Paramobj>();

   
    const [detail, setDetail]= useState<Obj | null>(null)
    useEffect(()=>{
        let d= async()=>{
            let prod: Obj=await getdata(`https://62f5ede1a3bce3eed7b5a91e.mockapi.io/products/${param.id}`);
            setDetail(prod)
        }
        d();
    },[param.id])

    
    const description=(i: number)=>{
        setDesind(i);
    }
    const info=()=>{
        return(
            <div className="addinfo">
                    <div>
                        <p><span>Color</span></p>
                        <p><span>Material</span></p>
                        <p><span>Size</span></p>
                        <p><span>Dimension</span></p>
                        <p><span>Weight</span></p>
                    </div>
                    <div>
                        <p>{detail?.additioninfo.Color}</p>
                        <p>{detail?.additioninfo.Material}</p>
                        <p>{detail?.additioninfo.Size}</p>
                        <p>{detail?.additioninfo.dimension}</p>
                        <p>{detail?.additioninfo.weight}</p>
                    </div>
            </div>
        )
    }

   
    return(
        <div>
            <div className="showdetail">
                <div>
                    <ul className="path">
                        <li><Link to='/shopZy-app/'>{"Home"}</Link></li>
                        <li>{">"}</li>
                        <li><Link to='/shopZy-app/shop'>{"shop"}</Link></li>
                        <li>{">"}</li>
                        <li>{detail?.title}</li>
                    </ul>
                </div>
                <Productdetails detail={detail} par={param.id}/>



                <div className="details">
                    <ul>
                        <li onClick={()=>description(0)} className={desind===0? 'active':''}>{"Description"}</li>
                        <li onClick={()=>description(1)} className={desind===1? 'active':''}>{"Additional information"}</li>
                        <li onClick={()=>description(2)} className={desind===2? 'active':''}>{"Reviews"}</li>
                    </ul>
                    <div>
                        {desind===0 && <p className="description">{detail?.description}</p>}
                        {desind===1 && info()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Showdetail;