import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCat, setSelectedCat }) => (
  <Stack
    direction={'row'}
    sx={{
      flexDirection: { md: 'column' },
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
    }}
  >
    {categories.map((category) => (
      <button
        style={{
          background: category.name === selectedCat && `#FC1503`,
          color: '#fff',
        }}
        key={category.name}
        className="category-btn"
        onClick={() => {
          setSelectedCat(category.name)
        }}
      >
        <span
          style={{
            color: category.name === selectedCat ? 'white' : 'red',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
