import React from 'react'

export default function ({ setSearch }) {
 return (
  <div className="mb-3" width="50">
   <input label="search" placeholder="Search User..." onChange={(e) => setSearch(e.target.value)} className="search" />
   <br />

  </div>
 )
}
