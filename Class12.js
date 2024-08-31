import { useEffect, useState } from 'react';
import './Class12.css';

const Class12 = () => {
    const [fname, setFname] = useState("SR");
    const [submitBtn, setSubmitBtn] = useState("SR");
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        setFname('Stella');
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(json => setFakeData(json));
    }, [submitBtn]);

    const handleSubmit = () => {
        setSubmitBtn(fname);
    };

    return (
        <>
            <h4>UseEffect</h4>
            <input value={fname} onChange={(e) => setFname(e.target.value)} />
            <button onClick={() => handleSubmit()}>Submit</button>

            <div className="grid-container" >
                {fakeData.map((el, index) => (
                    <div className="grid-item" key={index}>
                        <img  style={{width:'150px',height:'150px'}}  src={el.image} alt={el.title} />
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <p>Price: ${el.price}</p>
                        <p>Category: {el.category}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Class12;
