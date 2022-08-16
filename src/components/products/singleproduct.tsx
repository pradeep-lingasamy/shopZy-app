import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {BiRupee} from "react-icons/bi";
import {Link} from "react-router-dom"
import {Obj} from '../../typescript';
import {useCartState ,useDispactdata} from "../../cart-context"

type Propsobj={
    sdata: Obj,
    overviewdata: (n:number)=>void,
}

function Singleproduct(props : Propsobj){
    const dispatch=useDispactdata();
    return(
        <div key={props.sdata.id} className="singlecontainer">  
            <div className="imgcontainer">
                <img src={props.sdata.image[0]} />
                <button onClick={()=>props.overviewdata(props.sdata.id)}>Quick view</button>
            </div> 
            <div className="content">
                <div>
                    <Link to={`/shop/${props.sdata.id}`}><p>{props.sdata.title}</p></Link>
                    
                    <p className="rate"> <BiRupee /> {props.sdata.price.value}</p>
                </div>
                {!useCartState()?.favproduct.includes(props.sdata.id)  && <AiOutlineHeart onClick={()=> dispatch({ type:"Togglefav", index:props.sdata.id }) } className="iconheart"/>}
                {useCartState()?.favproduct.includes(props.sdata.id)  && <AiFillHeart onClick={()=> dispatch({ type:"Togglefav", index:props.sdata.id }) } className="iconheart" style={{color:"#007bff"}} />}

            </div>
            
        </div>
    )
}

export default Singleproduct;