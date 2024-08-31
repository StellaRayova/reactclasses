import { useEffect, useState } from 'react';

const Class12 = () => {
    const [fname, setFname] = useState("SR");
    const [submitBtn, setSubmitBtn] = useState("SR");
    const [data, setData] = useState([]);
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        setFname('ASR');
        setData(values);
        console.log(fname);
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then(json => setFakeData(json));}, [submitBtn]);

    const handleSubmit = () => {
        setSubmitBtn(fname);
    };

    return (
        <>
            <h4>UseEffect</h4>
            <input onChange={(e) => setFname(e.target.value)} />
            <p>{fname}</p>
            <button onClick={() => handleSubmit()}>Submit</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {fakeData.map((el) => {
                    return (
                        <div style={{ 
                            border: '1px', 
                            padding: '20px', 
                            width: '30%', 
                            backgroundColor: '#f9f9f9', 
                            borderRadius: '10px', 
                            textAlign: 'center', 
                        }}>
                            <img src={el.image} style={{ width: '300px', height: '300px' }} />
                            <h3 style={{ fontSize: '16px' }}>{el.title}</h3>
                            <p style={{  fontSize: '14px' }}>{el.description}</p>
                            <p style={{  fontSize: '14px' }}>Price: ${el.price}</p>
                            <p style={{  fontSize: '14px' }}>Category: {el.category}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const values = [
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    },
    {
        name: "nav",
        designation: 'SE',
        role: 'Emp',
        EmpId: 234
    }
];

export default Class12;