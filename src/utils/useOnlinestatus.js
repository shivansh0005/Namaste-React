import { useEffect ,useState} from "react";
const  useOnlinestatus=()=>{

    const [onlinestatus,check]=useState(true);

    //Check if online
   useEffect(()=>{
    window.addEventListener("offline",()=>{
check(false)
    })

    window.addEventListener("online",()=>{
        check(true)
            })
    
   },[])


   


    //boolean value
    return onlinestatus;
}
export default useOnlinestatus;