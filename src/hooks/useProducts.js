import {useEffect,useState} from "react";
import {getProducts} from "../services/api"

const useProducts=()=>{
    //all producs
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                setLoading(true);
                setError(null)
                const data=await getProducts();
                setProducts(data.products);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }}
            fetchProducts();
        },[]);
    return{products,error,loading};};
export default useProducts;