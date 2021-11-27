import React from 'react';
import { useParams,useSearchParams } from "react-router-dom";

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams();

    console.log(params)
    console.log(searchParams.getAll('page'))
    console.log(searchParams.getAll('test'))
    
    return(
        <div className="card">
            <h5 className="card-header bg-info"> {params.topic}</h5>
            <div className="card-body">
                <h5 className="card-title"> {params.topic} Page</h5>
                <p className="card-text">
                    {params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <h3>You are on page number {searchParams.getAll('page')}</h3>
            </div>
        </div>
    )
}

export default PostDetails