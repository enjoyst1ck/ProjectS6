import React from 'react';
import TopSearchBar from './../component/TopSearchBar'
import SearchSection from './../component/SearchSection'
import ForeignUserRating from '../component/ForeingUserRating';

export default function SearchPage() {
  return (
    <div>
      <TopSearchBar/>
      {/* usunac foreign user*/}
      <ForeignUserRating></ForeignUserRating>
      
    </div>
  )
}
