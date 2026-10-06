import {useEffect,useState} from "react";
import {getCategories} from "../services/api"

const useCategories=()=>{
    //all categories
    const [categories,setCategories]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchCategories=async()=>{
            try{
                setLoading(true);
                setError(null)
                const data=await getCategories();
                console.log("Products from API:", data);
                setCategories(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }}
            fetchCategories();
        },[]);
    return{categories,error,loading};};
export default useCategories;