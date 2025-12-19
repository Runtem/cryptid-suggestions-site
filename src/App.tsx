import * as Components from "./components/index.ts";
import type { PostProps } from "./components/Post.tsx";
import { useState } from "react";

function App() {
    const [posts, setPosts] = useState<PostProps[]>([
        {
            title: "Title",
            status: "Approved",
            chips: ["content"],
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
            upvotes: 1,
            downvotes: 1,
            comments: 1,
            id: 123,
            author: "Author#0001",
        },
        {
            title: "Title",
            status: "Approved",
            chips: ["content"],
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
            upvotes: 1,
            downvotes: 1,
            comments: 1,
            id: 123,
            author: "Author#0001",
        },
        {
            title: "Title",
            status: "Approved",
            chips: ["content"],
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
            upvotes: 1,
            downvotes: 1,
            comments: 1,
            id: 123,
            author: "Author#0001",
        },
    ]);

    return (
        <div className="container">
            <div className="content-container">
                <h1>Welcome, User!</h1>
                <Components.Button subtitle="Sign in with Discord" icon="./discord-icon.svg" onClick={() => {}}/>
                <div className="posts-list">
                    {posts.map((post, index) => (
                        <Components.Post
                            key={index}
                            title={post.title}
                            status={post.status}
                            chips={post.chips}
                            description={post.description}
                            upvotes={post.upvotes}
                            downvotes={post.downvotes}
                            comments={post.comments}
                            id={post.id}
                            author={post.author}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
