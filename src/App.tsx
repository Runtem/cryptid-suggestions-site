import * as Components from "./components/index.ts";

function App() {
    return (
        <div className="container">
            <button className="button">
                <img src="./react.svg" alt="Icon" className="image" />
                test button
            </button>
            <Components.TextArea
                placeholder="placeholder"
                value="wawa"
                onChange={() => {}}
            />
            <textarea placeholder="placeholder" />
            <input type="text" placeholder="placeholder" />
            <button className="icon-button">
                <img src="./vite.svg" alt="Icon" className="image" />
            </button>
            <div className="chip">
                <img src="./react.svg" alt="Icon" className="image" />
                test button
            </div>
            <Components.Post
                title="Title"
                status="Approved"
                chips={["ConTEnT"]}
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
                upvotes={1}
                downvotes={1}
                comments={1}
                id={123}
            ></Components.Post>
        </div>
    );
}

export default App;
