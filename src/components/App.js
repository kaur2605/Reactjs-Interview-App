import React, { useState } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import Search from './Search';
import '../App.css';

const App = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [search, setSearch] = useState('')


  // Get current rows
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Filtering row 
  const filterrow = currentPosts.filter(post => {
    return post.name1.toLowerCase().includes(search.toLowerCase());
  })


  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>User List</h1>
      <Search search={search} setSearch={setSearch} />
      <Posts posts={filterrow} locale="da" />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
