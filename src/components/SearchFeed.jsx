import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from '../components'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [vidz, setVidz] = useState([])
  const { searchTerm } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVidz(data.items)
        console.log(vidz)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        ml={1}
        sx={{ color: 'white' }}
      >
        Search result for :{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos vidz={vidz} />
    </Box>
  )
}

export default SearchFeed
