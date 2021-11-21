import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    return(
        <>
           <div className="card">
                <div className="card-header bg-primary">
                    {props.match.params.topic} Details Page
                </div>
                <div className="card-body">
                    <h5 className="card-title"> {props.match.params.topic} Details Page</h5>
                    <p className="card-text">
                        {props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                        <h3>You are on page number {props.location.search.split('=')[1]}</h3>
                </div>
            </div>
        </>
    )
}

export default PostDetails;