import React,{useReducer, createContext, useContext, useEffect} from "react";
import {Localobj} from "./typescript"

const cartstatecontext= createContext<State | null>(null);
const cartdispatch= createContext<React.Dispatch<any>>(()=>null);

type State={
    product: Localobj[],
    totalquantity: number,
    totalprice: number,
    togglearray: number[],
    favproduct: number[],
}
enum ActionKind {
    AddProduct = 'ADD_PRODUCT',
    RemoveProduct = 'REMOVE_PRODUCT',
    IncreaseQty = 'Increase',
    DecreaseQty= 'Decrease',
    Togglefav= 'Togglefav',
    Checkout= 'Checkout',
  }
  
type Action = {
    type: ActionKind,
    adddata: Localobj,
    index: number,
}


function cartreducer(state : State, action: Action) {
    let str=(localStorage.getItem("cartdata") || '')
    let s:Localobj[]=  (str=='' ? [] : JSON.parse(str));
    switch(action.type){
        case ActionKind.AddProduct:
            s.push(action.adddata);
            localStorage.setItem('cartdata',JSON.stringify(s));
            return {
                ...state,
                product: s,
                totalquantity: state.totalquantity + 1,
                togglearray: [...state.togglearray, +action.adddata.id],
                totalprice: state.totalprice+ (action.adddata.quantity * action.adddata.price), 
            };

        case ActionKind.RemoveProduct:
            s=s.filter((s)=>(action.index != s.id))
            localStorage.setItem('cartdata',JSON.stringify(s));
            return {
                ...state,
                product: s,
                totalquantity: state.totalquantity - 1,
                togglearray: state.togglearray.filter(x=> x!= action.index),
                totalprice: totalamount(),
            };

        case ActionKind.IncreaseQty:
            s=s.map((x)=>{if(+x.id == +action.index) x.quantity++; return x  })
            localStorage.setItem('cartdata',JSON.stringify(s));
            return {
                ...state,
                product: s,
                totalprice: totalamount(),
            }

        case ActionKind.DecreaseQty:
            s=s.map((x)=>{if(+x.id == +action.index) {(x.quantity-1 <0)? x.quantity=0 : x.quantity--} return x  })
            localStorage.setItem('cartdata',JSON.stringify(s));
            return {
                ...state,
                product: s,
                totalprice: totalamount(),
            }

        case ActionKind.Togglefav:
            str= (localStorage.getItem("favdata") || '');
            let num: number[]=  (str=='' ? [] : JSON.parse(str));
            if(num.includes(action.index)){
                num=num.filter((x)=> x!=action.index)
            }
            else{
                num.push(action.index)
            }
            localStorage.setItem('favdata',JSON.stringify(num));
            return {
                ...state,
                favproduct: num,
            }

        case ActionKind.Checkout:
            localStorage.removeItem('cartdata');
            return{
                ...state,
                product:[],
                totalquantity: 0,
                totalprice: 0,
                togglearray: [],
            }

        default:
            return state;
    }
}


function getdata(storedata:string){
    let str: string=localStorage.getItem(storedata) || '';
    if(str!='')
        return JSON.parse(str)
    else
        return [];
}
function totalamount(){
    let n:number=0;
    getdata("cartdata").map((x:any)=> n+= (x.quantity * x.price));
    return n
}
function Cartprovider({children}: any){
        
        const initialstate: State ={
            product: getdata("cartdata"),
            totalquantity: getdata("cartdata").length,
            totalprice: totalamount(),
            togglearray: getdata("cartdata").map((x:any)=> parseInt(x.id) ),
            favproduct: getdata("favdata"),
        }    
    const [state, dispatch] = useReducer(cartreducer, initialstate)
    
    return(
        <cartstatecontext.Provider value={state}>
            <cartdispatch.Provider value={dispatch}>
                {children}
            </cartdispatch.Provider>
        </cartstatecontext.Provider>
    )
}


export function useCartState() {
    const state = useContext<State | null>(cartstatecontext);

    return state;
  }

  export function useDispactdata() {
    const state = useContext<React.Dispatch<any>>(cartdispatch);

    return state;
  }
export default Cartprovider;