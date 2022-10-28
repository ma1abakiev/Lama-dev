import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Add from './components/Add'
import Feel from './components/Feel'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import SideBar from './components/SideBar'

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}></SideBar>
          <Feel></Feel>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  )
}

export default App
