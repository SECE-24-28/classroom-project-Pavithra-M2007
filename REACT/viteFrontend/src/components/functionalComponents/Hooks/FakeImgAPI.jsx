import { useEffect, useState } from "react";

const FakeImgAPI = () => {
    
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        setImgUrl('https://picsum.photos/300?random=${Math.random()}');
    }, []);
    
    
    return(
        <div>
            <h3>This is FakeImgAPI Component</h3>
            <img src={imgUrl} alt=""/>
        </div>
    );
}
export default FakeImgAPI;