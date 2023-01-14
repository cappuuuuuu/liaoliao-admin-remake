import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import { GlobalStyle } from '@/style/global'
import { ResetStyle } from '@/style/reset'
import theme from '@/style/theme'

function App () {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResetStyle/>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
