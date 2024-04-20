import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [pincode, setPincode] = useState('');
  

    const navigate = useNavigate()

    const getSearchText = () => {
        navigate("/display/"+pincode)
    };

    return (
        <div className="home">
            <h1>Enter Pincode</h1>
            <div>
                <input
                    className="input"
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    maxLength={6}
                    minLength={6}
                    pattern="[0-9]{6}"
                    required
                />
                <br />
                <button
                    className="btn"
                    onClick={() => {
                        getSearchText();
                    }}
                >
                    Look up
                </button>
            </div>
           

        </div>
    );
};

export default Home;
