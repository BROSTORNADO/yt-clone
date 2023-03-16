import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from '../components'
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState('New')
  const [vidz, setVidz] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`)
      .then((data) => {
        setVidz(data.items)
        console.log(vidz)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [selectedCat])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          ml={1}
          sx={{ color: 'white' }}
        >
          {selectedCat} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        <Videos vidz={vidz} />
      </Box>
    </Stack>
  )
}

export default Feed
