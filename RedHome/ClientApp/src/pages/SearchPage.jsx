import React from 'react';
import TopSearchBar from './../component/TopSearchBar'
import SearchSection from './../component/SearchSection'
import { useState } from 'react';

export default function SearchPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <TopSearchBar setIsOpen={setIsOpen}/>
      <SearchSection isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}
