import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import { GlobalStyle } from '@/style/global'
import { ResetStyle } from '@/style/reset'
import theme from '@/style/theme'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Loading from '@/components/ApiStatus/Loading'
import ErrorAlert from '@/components/ApiStatus/ErrorAlert'

const queryClient = new QueryClient()

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <ThemeProvider theme={theme}>
          <ResetStyle/>
          <GlobalStyle/>
          <RouterProvider router={router} />
          <Loading/>
          <ErrorAlert/>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
