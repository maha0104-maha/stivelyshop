import {useEffect,useState} from "react";
import {getProductById} from "../services/api";
const useProduct=(id)=>{
    //all producs
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                setLoading(true);
                setError(null)
                const data=await getProductById(id);
                setProduct(data)
             
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }}
            fetchProduct();
        },[id]);
    return{product,error,loading};};

export default useProduct;