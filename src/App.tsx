function App() {
    return (
        <div className="container">
            <button className="button">
                <img src="./react.svg" alt="Icon" className="image" />
                test button
            </button>
            <textarea placeholder="placeholder" />
            <input type="text" placeholder="placeholder" />
            <button className="icon-button">
                <img src="./vite.svg" alt="Icon" className="image" />
            </button>
            <div className="chip">
                <img src="./react.svg" alt="Icon" className="image" />
                test button
            </div>
            <div className="div post">
                <h2 className="title">
                    Hey there{" "}
                    <span className="status">
                        <i>• Approved</i>
                    </span>
                </h2>
                <div className="post-chips row-bar">
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                    <span className="chip">Content</span>
                </div>
                <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                </span>
                <div className="row-bar post-actions">
                    <div className="rating-counters">
                        <div className="action-counter">
                            <button className="icon-button" id="like">
                                <img
                                    src="./upvote-icon.svg"
                                    alt=""
                                    className="image"
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <p className="post-number">1</p>
                        </div>
                        <div className="action-counter">
                            <button className="icon-button" id="like">
                                <img
                                    src="./downvote-icon.svg"
                                    alt=""
                                    className="image"
                                    width={16}
                                    height={16}
                                />
                            </button>
                            <p className="post-number">1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
