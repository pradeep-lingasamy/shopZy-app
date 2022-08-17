import Products from "../../components/products/products";
import {useCartState} from '../../cart-context'
import Footer from "../../components/footer/footer";

function Favproduct(){
    return(
        <div>
            <div className="wholecontainer" style={{marginTop:100}}>
                <Products favproduct={useCartState()?.favproduct}/>
            </div>
            <Footer />
        </div>
    )
}

export default Favproduct;