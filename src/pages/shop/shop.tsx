import Products from "../../components/products/products";
import { useState } from "react";
import "./shop.scss"
import { AiOutlineSearch } from "react-icons/ai";
import {MdOutlineClose} from "react-icons/md"
import Footer from "../../components/footer/footer";
function Shop(){

    const [filtercontent, setFiltercontent]= useState<string>('all');
    const [togglebox, setTogglebos]= useState<number>(0);
    const Onclick=(n:string)=>{
        setFiltercontent(n);
    }

    return(
        <div>
                <div  className="wholecontainer">
                    <div className="filter">
                        <ul>
                            <li onClick={()=>Onclick('all')} className={filtercontent==='all'? 'underline': ''}>All Products</li>
                            <li onClick={()=>Onclick('men')} className={filtercontent==='men'? 'underline': ''}>Men</li>
                            <li onClick={()=>Onclick('women')} className={filtercontent==='women'? 'underline': ''}>Women</li>
                            <li onClick={()=>Onclick('bags')} className={filtercontent==='bags'? 'underline': ''}>Bags</li>
                            <li onClick={()=>Onclick('watches')} className={filtercontent==='watches'? 'underline': ''}>Watches</li>
                            <li onClick={()=>Onclick('shoes')} className={filtercontent==='shoes'? 'underline': ''}>Shoes</li>
                        </ul>
                        <div className="right">
                            <p>Filter</p>
                            {togglebox == 0 && <button className="searchbut" onClick={()=>setTogglebos(1)}><div className="textalign"><AiOutlineSearch className="icon" />  Search</div></button>}
                            {togglebox == 1 && <button className="searchbut active" onClick={()=>setTogglebos(0)}><div className="textalign"> <MdOutlineClose className="icon"/>  Search </div></button>}
                        </div>
                    </div>
                    <div className="searchcontainer" style={{height: togglebox==0 ? 0: 63.5 }}>  
                        <input type='text' placeholder="search here..." onChange={(e)=> setFiltercontent(e.target.value) } />
                    </div>
                    <Products filtercontent={filtercontent}/>
                
                </div>
                <Footer />
        </div>
    )
}

export default Shop;