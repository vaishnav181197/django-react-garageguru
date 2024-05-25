import axios from "axios";

const commonApi=async(reqHeader,reqBody,url,method)=>{
    const options={
        url,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"},
        data:reqBody,
        method
    }
    return await axios(options)
}



export default commonApi