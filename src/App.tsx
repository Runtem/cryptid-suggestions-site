import { useState } from "react";

function App() {
    return (
        <div className="container">
            <button className="button">
                <img src="/src/assets/react.svg" alt="Icon" className="image" />
                test button
            </button>
            <textarea placeholder="placeholder"/>
            <input type="text" placeholder="placeholder"/>
            <button className="icon-button">
                <img src="./vite.svg" alt="Icon" className="image" />
            </button>
            <div className="chip">
                <img src="/src/assets/react.svg" alt="Icon" className="image" />
                test button
            </div>
            <div className="div post">
                <h2 className="title">Hey there <span className="status"><i>• Approved</i></span></h2>
                <div className="post-chips row-bar">
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                </div>
                <span className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</span>
                <div className="row-bar post-actions">
                    <button className="icon-button" id="like">
                        <img src="./like.svg" alt="" className="image"/>
                    </button>
                    1
                </div>
            </div>
        </div>
    );
}

export default App;
