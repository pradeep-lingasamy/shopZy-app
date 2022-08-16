import { useEffect } from "react";
import axios from "axios";

export const getdata=async (url:string)=>{
           // const url="https://62f5ede1a3bce3eed7b5a91e.mockapi.io/products";
            let res= await axios.get(url);
            let data= await res.data;   
            return await data;
}

