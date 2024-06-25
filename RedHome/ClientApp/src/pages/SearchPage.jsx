import React, { useState } from 'react';
import TopSearchBar from './../component/TopSearchBar'
import SearchSection from './../component/SearchSection'

export default function SearchPage() {
  const [queryUrl, setQueryUrl] = useState('');
  const [searchText, setSearchText] = useState({});

  return (
    <div>
      <TopSearchBar setQueryUrl={setQueryUrl} setSearchText={setSearchText} />
      <SearchSection queryUrl={queryUrl} searchText={searchText}/>
    </div>
  )
}
