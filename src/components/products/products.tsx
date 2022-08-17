import { useEffect, useState } from "react";
import {getdata} from '../../api/api'
import Singleproduct from "./singleproduct";
import "./products.scss"
import {Obj} from '../../typescript'
import Productdetails from "../product_detail/productdetail";
import Favproduct from "../../pages/favproduct/Favproduct";
import { MdNavigateBefore, MdNavigateNext, MdOutlineClose } from "react-icons/md";

type PropsObj={
    filtercontent?: string;
    favproduct?: number[];
}

function Products(props : PropsObj){
    const [data, setData]= useState<Obj[]>([])

    const [overviewind, setOverviewind]= useState(0);
    const [display, setDisplay]= useState("none")
    const [pageInd, setPageInd]= useState<number>(8);

    function overviewdata(n:number){
        setOverviewind(n)
        setDisplay("block")
    }

    useEffect(()=>{
        let d= async()=>{
            let prod: Obj[]=await getdata("https://62f5ede1a3bce3eed7b5a91e.mockapi.io/products");
            setPageInd(8);
            setData(prod.filter((x)=> {
                if(props.filtercontent==='all'){
                    return x;
                }
                if(props.favproduct?.includes(x.id)){
                    return x;
                }
                if(x.category.startsWith(props.filtercontent!)){
                    return x;
                }
                if((x.title.toLowerCase().startsWith(props.filtercontent!) ))
                 return x;
                
            }))
        };
        d();
    },[props.filtercontent,props.favproduct])
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pageInd]);

    function pagenumber(){
        let temp: JSX.Element[]=[];
        for(let i=0; i< data.length ;i+=8){
            temp.push(<button className={(pageInd-8 == i) ? "numberbutton active": "numberbutton"} key={i} onClick={()=>setPageInd(((i/8) + 1)*8)}>{(i/8) + 1}</button>)
        }
        return temp;
    }

    return(
        <div>
            <div className="container">
            {data.map((s,i)=>  { if(i>=pageInd-8 && i<pageInd) return <Singleproduct sdata={s} indexview={i} overviewdata={overviewdata} key={s.id} />})}

            <div className="outerquickview" style={{display: display}}>
                <div className="outerquickview" onClick={()=> setDisplay('none')} >
                </div>
                
                <div className="quickview">
                    <p className="close" onClick={()=> setDisplay('none')}> <MdOutlineClose /> </p>
                    <Productdetails  detail={data[overviewind]}  par={data[overviewind]?.id.toString()} />
                </div>
                
            </div>
        </div>
        <div className="pagenumberContainer">
            <button className="numberbutton" onClick={()=>setPageInd(pageInd-8)} disabled={ (pageInd-8==0) ? true: false}> <MdNavigateBefore /> </button>
            { pagenumber().map((x,i)=> {if((i > (pageInd/8-4)) && (i < (pageInd/8+2))) return x}) }
            <button className="numberbutton" onClick={()=>setPageInd(pageInd+8)} disabled={ (pageInd > data.length) ? true: false}> <MdNavigateNext /></button>
        </div>
        </div>
    )
}

export default Products;