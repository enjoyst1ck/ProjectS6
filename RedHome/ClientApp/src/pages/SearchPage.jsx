import React from 'react';
import TopSearchBar from './../component/TopSearchBar'
import SearchSection from './../component/SearchSection'
import ForeignUserRating from '../component/ForeingUserRating';

export default function SearchPage() {
  return (
    <div>
      <TopSearchBar/>
      {/* usunac foreign user, podmienic topmenu*/}
      <ForeignUserRating></ForeignUserRating>
      <SearchPage></SearchPage>
    </div>
  )
}
