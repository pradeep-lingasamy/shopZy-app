import React,{ Component, useState } from 'react';
import './Sliders.scss'
import slidedata from '../../data/slidedata';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
type State={
    ind:number;
};
class Sliders extends Component{
    constructor(props:any){
        super(props)
    }
    state: State={
        ind:0,
    }
    timer: any;
    slide(i:number):void{
        clearInterval(this.timer)
        if(i==0){
            this.setState({ ind: this.state.ind ==0 ? slidedata.length-1 : this.state.ind - 1 })
        }
        else{
            this.setState({ ind: this.state.ind == slidedata.length-1 ? 0 : this.state.ind + 1 })
        }
    }
    componentDidMount(): void {
         this.timer = setInterval(()=>this.sliding(),8000);
    }
    sliding():void{
        this.setState({ ind: this.state.ind == slidedata.length-1 ? 0 : this.state.ind + 1 })
    }
    alldata(){
        let data = slidedata.map((d,i)=>{
            return (
                <div key={i} className= {(i==this.state.ind) ? 'slideimg' : 'slideimg none'}>
                    <img src={d.img} />
                    <div className='slidecontent'>
                        <p className='title'>{d.title}</p>
                        <p className='highlight'>{d.highlight}</p>
                        <Link to="/shopZy-app/shop"><button>Shop Now</button></Link> 
                    </div>
                    <div className='arrow'>
                        <AiFillCaretLeft onClick={()=>this.slide(0)} className='arrowbutton'/>
                        <AiFillCaretRight onClick={()=>this.slide(1)} className='arrowbutton'/>
                    </div>
                </div>
            )
        })
        return data;
    }
    render(){
        return(
            <div>
                {this.alldata()}
                
            </div>
        )
    }
}
export default Sliders;