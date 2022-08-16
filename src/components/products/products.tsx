import { useEffect, useState } from "react";
import {getdata} from '../../api/api'
import Singleproduct from "./singleproduct";
import "./products.scss"
import {Obj} from '../../typescript'
import Productdetails from "../product_detail/productdetail";
import Favproduct from "../../pages/favproduct/Favproduct";
import { MdOutlineClose } from "react-icons/md";

type PropsObj={
    filtercontent?: string;
    favproduct?: number[];
}

function Products(props : PropsObj){
    const [data, setData]= useState<Obj[]>([])

    const [overviewind, setOverviewind]= useState(0);
    const [display, setDisplay]= useState("none")

    function overviewdata(n:number){
        setOverviewind(n)
        setDisplay("block")
    }

    useEffect(()=>{
        let d= async()=>{
            let prod: Obj[]=await getdata("https://62f5ede1a3bce3eed7b5a91e.mockapi.io/products");
            setData(prod.filter((x)=> {
                if(props.filtercontent==='all'){
                    return x;
                }
                if(x.category.startsWith(props.filtercontent!) || (x.title.toLowerCase().startsWith(props.filtercontent!.toLowerCase()) )){
                    return x;
                }
                if(props.favproduct?.includes(x.id)){
                    return x;
                }
            }))
        };
        d();
    },[props.filtercontent,props.favproduct])

    return(
        <div className="container">
            {data.map(s=> <Singleproduct sdata={s} overviewdata={overviewdata}/>)}
            
            
            <div className="outerquickview" style={{display: display}}>
                <div className="outerquickview" onClick={()=> setDisplay('none')} >
                </div>
                
                <div className="quickview">
                    <p className="close" onClick={()=> setDisplay('none')}> <MdOutlineClose /> </p>
                    <Productdetails  detail={data[overviewind-1]}  par={overviewind.toString()} />
                </div>
                
            </div>
        </div>
    )
}

export default Products;