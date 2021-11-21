import React from 'react';
import {Link} from 'react-router-dom'

const Post = () => {
    return(
        <>
           <div className="card">
                <div className="card-header bg-danger">
                    Post Page
                </div>
                <div className="card-body">
                    <h5 className="card-title">Post Page</h5>
                    <p className="card-text">
                    Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <h3>JavaScript</h3>
                    <Link className="btn btn-success" to="/post/JavaScript?page=1">Details</Link>
                    <h3>React</h3>
                    <Link className="btn btn-info" to="/post/React?page=2">Details</Link>
                    <h3>Node</h3>
                    <Link className="btn btn-primary" to="/post/Node?page=3">Details</Link>
                </div>
            </div>
        </>
    )
}

export default Post;