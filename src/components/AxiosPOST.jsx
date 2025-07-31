import { useState } from "react";
import axios from "axios";
function AxiosPOST(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title,
            body,
        };

    axios.post("https://jsonplaceholder.typicode.com//posts", newPost)
        .then((response) => {
            console.log(response.data);
            setResponseMessage("Successfully created")
        })
        .catch((error)=>{setResponseMessage("Error")})
    }

    return(
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow space-y-4">
        <h1 className="text-2xl font-semibold text-center">Post method in axios</h1>
        <form onSubmit={handleSubmit}>

            <input className="w-full p-2 border rounded"
            value={title} placeholder="Add title" onChange={(e) => setTitle(e.target.value)} />

            <textarea className="w-full p-2 border rounded"
            value={body} placeholder="Add body" onChange={(e) => setBody(e.target.value)}></textarea>
            
            <button className="bg-blue-500 text-white px-4 py-2" type="submit">submit</button>
        </form>
        {responseMessage && <p className="text-green-600">{responseMessage}</p>}
        </div>
    )
}

export default AxiosPOST;