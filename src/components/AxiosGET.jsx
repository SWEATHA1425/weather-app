import { useEffect, useState } from "react";
import axios from "axios";

function AxiosGET(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com//posts")
        .then((response)=>{
            setData(response.data)
            setLoading(false)
        })
        .catch((err)=> {
            setError(err.message);
            setLoading(false);
        })
    },[]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow space-y-4">
            <h1 className="text-2xl font-semibold text-center">Get method in Axios</h1>
            <ul className="list-disc list-inside space-y-1 text-left">{data.map((post) =>(
                <li key={post.id}>{post.title}</li>
            ))}</ul>
        </div>
    )
}

export default AxiosGET;
