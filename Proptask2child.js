import { useState } from "react";

const Proptask2child  = ({ sendBack }) => {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [gender, setGender] = useState("");

    const handleClick = () => {
        sendBack({ name, place, gender });
        setName("");
        setPlace("");
        setGender("");
    };

    return (
        <div >
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Proptask2child;
