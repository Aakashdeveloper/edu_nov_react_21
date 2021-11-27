import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './postDetails';
import Home from './Home';
import Header from './Header';

const Routing = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="home" element={<Home />} />
                        <Route path="post" element={<Post />} />
                        <Route path="post/:topic" element={<PostDetails />} />
                        <Route path="profile" element={<Profile />} />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                </main>
                            }   
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
