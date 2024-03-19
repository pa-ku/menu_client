import React, { useState } from 'react'
import { useEffect } from 'react';

export default function useUnique(object) {
  const [uniqueList, setUniqueList] = useState([])
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  useEffect(() => {
    let allItems = []
    object.map(item => {
      allItems.push(item.categoria)
    })
    let unique = allItems.filter(onlyUnique)
    setUniqueList(unique)
  }, [object])

  return { uniqueList }
}
