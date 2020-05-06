import React from 'react'
import { useState, useEffect } from 'react'

function List() {
  let data = []

  useEffect(() => {
    let storageData = localStorage.getItem('data')
    data = JSON.parse(storageData)
    console.log(data[0].company)
  }, [])

  return(
    <div>
      {data && data.map(x => (
      console.log(data[x].company)
    ))}
    </div>
  )
}

export default List
