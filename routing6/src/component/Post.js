import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <>
        <div className="card">
            <h5 className="card-header bg-primary">Post</h5>
            <div className="card-body">
                <h5 className="card-title">Post Page</h5>
                <p className="card-text">
                    Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <h3>JavaScript</h3>
                <Link className="btn btn-success" to={`/post/JavaScript?page=1&test=hi`}>Details</Link>
                <h3>React</h3>
                <Link className="btn btn-info" to="/post/React">Details</Link>
                <h3>Node</h3>
                <Link className="btn btn-warning" to="/post/Node">Details</Link>
            </div>
        </div>
        </>
    )
}

export default Post