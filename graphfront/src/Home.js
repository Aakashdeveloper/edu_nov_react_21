import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
})

const GET_MOVIES = gql`
    query Movies($id: Int){
        Movies(id: $id){
            name,
            language,
            type
        }
    }
`

const Movies = () => {
    return(
        <div>
            <Query query={GET_MOVIES} client ={client} variables={{id:2}}>
                {({loading, error, data}) => {
                    if(loading) return <p>Loading .....</p>
                    if(error) console.log(error)
                    return(
                        <div>
                            <h2>{data.Movies.name}</h2>
                            <h2>{data.Movies.language}</h2>
                            <h2>{data.Movies.type}</h2>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default Movies;