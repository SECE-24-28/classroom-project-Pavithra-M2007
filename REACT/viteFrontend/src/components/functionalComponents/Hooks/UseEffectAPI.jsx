import {useEffect, useState} from "react";
import axios from "axios";

const UseEffectAPI = () => {

    const [postsParameter, setPostsParameter] = useState([]);
    useEffect(() => {
        axios
        
        .get("https://jsonplaceholder.typicode.com/posts")

        .then((res) => { 
        setPostsParameter(res.data);
        console.log(postsParameter);
        })
        
        .catch(() => {
            console.log("Error in fetching data from API");
        });

    },[]);

    return(
        <div>
            <h2>UseEffectAPI Component</h2>
            <p>It is going to fetch data from JSON Typicode Placeholder</p>
            <ol>
                <p>The API Values which fecthed was</p>
                {postsParameter.map((postTitle) => {
                   return <li key={postTitle.id}>{postTitle.title}</li>
                })}
            </ol>
        </div>
    );
}
export default UseEffectAPI;