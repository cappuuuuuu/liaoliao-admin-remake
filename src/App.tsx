import { ThemeProvider } from 'styled-components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyle } from '@/style/global'
import { ResetStyle } from '@/style/reset'
import { FontStyle } from '@/style/font'
import router from '@/router'
import theme from '@/style/theme'
import Loading from '@/components/ApiStatus/Loading'
import ResponseAlert from '@/components/ApiStatus/ResponseAlert'

const queryClient = new QueryClient()

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <ThemeProvider theme={theme}>
          <ResetStyle/>
          <GlobalStyle/>
          <RouterProvider router={router}/>
          <FontStyle/>
          <Loading/>
          <ResponseAlert/>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
