import React from "react";

function App() {
    return(
    <div>
        <h1 className="heading">
            My contacts
        </h1>
        <div className="card">
        <div className="top">
        <h2>Beyonce</h2>
        <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
        />
        </div>
        <div className="bottom">
        <p>+123 456 7890</p>
        <p>bebe@bebe.com</p>
        </div>
        </div>
    </div>
    );
}

export default App;
