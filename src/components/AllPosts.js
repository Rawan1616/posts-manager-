import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


const AllPosts = () => {

    const [posts , setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://10.191.240.65:5000/posts')
        .then(response => response.json())
        .then(data =>setPosts(data))
        .catch(err=> console.log("error"+ err));
        },[]);

        return (
            <div>
              <h1>All Posts</h1>
              {posts.length > 0 ? (
                <ul>
                  {posts.map(post => (
                    <li key={post.id}>
                      <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          );
        };
export default AllPosts;

    
