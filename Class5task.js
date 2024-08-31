import { useEffect, useState } from "react";
import './Class5task.css'
import axios from "axios";
import { Link } from "react-router-dom";

function Class5task() {
    const [s1, setS1] = useState("")
    const [s2, setS2] = useState("")
    const [s3, setS3] = useState("")
    const [cards, setCards] = useState([])
    const[data,setFakeData]=useState("")
    const [products, setProducts] = useState([]);
const [img,setImg] = useState("")
const image=(e) =>{
    setImg(URL.createObjectURL(e.target.files(0)))
}
useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error('Error fetching data:', error));
}, []);




    function S1(e) {
        setS1(e.target.value);
    }

    function S2(e) {
        setS2(e.target.value);
    }

    function S3(e) {
        setS3(e.target.value);
    }

    function handleClick() {
        setCards([...cards, { img,s1, s2, s3 }]);
        setS1("");
        setImg("")
        setS2("");
        setS3("");


    }


    return (
        <>
        <Link to ="/bye">contact</Link>
            <div>
                <input type="file" onChange={image}/>
                <input type="text" placeholder="text" value={s1} onChange={S1} />
                <input type="text" placeholder="text" value={s2} onChange={S2} />
                <input type="text" placeholder="text" value={s3} onChange={S3} />
                <button onClick={handleClick}>Add to Card</button>
            </div>



            <div className='flex'>
                {cards.map(( e) => (
                    <div className='card' >
                        {/* <img className="img" src="https://instedia.com/images/courses/html-image.webp" /> */}
                       
                        <img src={e.image} alt="loading" width="350px" />
                        <div>{e.s1}</div>
                        <div>{e.s2}</div>
                        <div>{e.s3}</div>
                    </div>
              
                ))}





            </div>











        </>
    )
}
export default Class5task;  