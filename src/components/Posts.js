import React from 'react';

const Posts = ({ posts }) => {

 return (

  <ul className='list-group mb-4'>

   {posts.map(post => (

    <li key={post.name1} className='list-group-item'>
     <a href={post.edit_path} >{post.name1}  </a> <br />
     <small>{post.email}</small>
    </li>



   ))}
  </ul>
 );
};

export default Posts;