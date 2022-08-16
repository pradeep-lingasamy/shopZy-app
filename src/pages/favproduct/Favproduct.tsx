import Products from "../../components/products/products";
import {useCartState} from '../../cart-context'

function Favproduct(){
    return(
        <div className="wholecontainer" style={{marginTop:100}}>
            <Products favproduct={useCartState()?.favproduct}/>
        </div>
    )
}

export default Favproduct;