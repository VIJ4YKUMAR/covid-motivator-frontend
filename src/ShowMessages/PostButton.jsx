import React from "react";
import { Link } from "react-router-dom";

const PostButton = () => {
    return (<Link to={'/post_messages'}>
        <div className="post-button">
            POST A MESSAGE
        </div>
    </Link>)
}

export default PostButton