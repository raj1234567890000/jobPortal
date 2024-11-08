import { setAllJobs } from "@/Redux/jobSlices"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const useGetAllJobs = () => {
    const dispatch=useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs=async()=>{
            try{
                const res= await axios.get(`${JOB_API_END_POINT}/getallpostjob?keyword=${searchedQuery}`,{
                    withCredentials:true,
                })
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }
                //console.log("job",res)

            }catch(err){
                console.error(err)

            }
        }
        fetchAllJobs();
        //eslint-disable-next-line
    },[])
 
}

export default useGetAllJobs