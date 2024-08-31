import { useState } from "react";
import Tesseract from "tesseract.js";

function Demo() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [designation, setDesignation] = useState("");
    const [employer, setEmployer] = useState("");
    const [image, setImage] = useState(null);
    const [extractedText, setExtractedText] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLastnameChange(e) {
        setLastname(e.target.value);
    }

    function handleDesignationChange(e) {
        setDesignation(e.target.value);
    }

    function handleEmployerChange(e) {
        setEmployer(e.target.value);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }

    function handleImageUpload() {
        if (!image) return;
        Tesseract.recognize(
            image,
            "eng", // English language
            { logger: (m) => console.log(m) } // Optional logger function
        ).then(({ data: { text } }) => {
            setExtractedText(text);
        });
    }

    return (
        <>
            <input type="text" value={name} placeholder="Name" onChange={handleNameChange} />
            <input type="text" value={lastname} placeholder="Lastname" onChange={handleLastnameChange} />
            <input type="text" value={designation} placeholder="Designation" onChange={handleDesignationChange} />
            <input type="text" value={employer} placeholder="Employer" onChange={handleEmployerChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
            {extractedText && <p>{extractedText}</p>}
            <p>
                Beginner HTML & CSS Tutorial
                <br />
                HTML is a hypertext markup language which is used to create web pages in web browser where
            </p>
        </>
    );
}

export default Demo;
