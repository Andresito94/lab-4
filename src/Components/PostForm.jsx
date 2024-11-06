import React from 'react';

const PostForm = ({ newPost, onInputChange, onAddPost }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' , display: '', alignItems: 'center'}}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newPost.title}
                onChange={onInputChange}
            />
            <br></br>
            <input
                type="text"
                name="body"
                placeholder="Body"
                value={newPost.body}
                onChange={onInputChange}
            />
            <br />
            <button onClick={onAddPost}>Add Post</button>
        </div>
    );
};

export default PostForm;