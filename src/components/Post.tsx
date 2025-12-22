import { ChipTag } from "./Chip";

export interface PostProps {
    title: string;
    status: string;
    chips: string[];
    description: string;
    upvotes: number;
    downvotes: number;
    comments: number;
    id: number;
    author: string;
}

export default function Post({
    title,
    status,
    chips,
    description,
    upvotes,
    downvotes,
    comments,
    id,
    author
}: PostProps) {
    return (
        // comment that will hopefully actually track on github aaaaaa
        <a className="div post" href={`/posts/${id}`}>
            <h3 className="title">
                {title}{" "}
                <span className="status">
                    <i>• {status}</i>
                </span>
            </h3>
            <div className="post-author">
                <div className="image-container">
                    <img src="./react.svg" alt="PFP of the person that made this post" className="image" width={16} height={16}/>
                </div>
                {author}
            </div>
            <div className="post-chips row-bar">
                {chips.map((chip) => (
                    <ChipTag key={chip.toLowerCase()} id={chip.toLowerCase()} />
                ))}
            </div>
            <span className="description">{description}</span>
            <div className="row-bar post-actions">
                <div className="rating-counters">
                    <div className="action-counter">
                        <button className="icon-button" id="upvote">
                            <img
                                src="./upvote-icon.svg"
                                alt=""
                                className="image"
                                width={16}
                                height={16}
                            />
                        </button>
                        <p className="post-number">{upvotes}</p>
                    </div>
                    <div className="action-counter">
                        <button className="icon-button" id="downvote">
                            <img
                                src="./downvote-icon.svg"
                                alt=""
                                className="image"
                                width={16}
                                height={16}
                            />
                        </button>
                        <p className="post-number">{downvotes}</p>
                    </div>
                </div>
                <div className="action-counter">
                    <button className="icon-button" id="comments">
                        <img
                            src="./comment-icon.svg"
                            alt=""
                            className="image"
                            width={16}
                            height={16}
                        />
                    </button>
                    <p className="post-number">{comments}</p>
                </div>
            </div>
        </a>
    );
}
