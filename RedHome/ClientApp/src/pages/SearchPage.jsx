import React, { useState } from 'react';
import TopSearchBar from './../component/TopSearchBar'
import SearchSection from './../component/SearchSection'

export default function SearchPage() {
  const [queryUrl, setQueryUrl] = useState('');
  return (
    <div>
      <TopSearchBar setQueryUrl={setQueryUrl} />
      <SearchSection queryUrl={queryUrl}/>
    </div>
  )
}
