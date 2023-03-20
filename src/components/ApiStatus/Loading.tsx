import styled from 'styled-components'
import { CircularProgress } from '@mui/material'
import { useAPIStore } from '@/store/api'

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const Loading = () => {
  const isLoading = useAPIStore((state) => state.isLoading)

  return isLoading
    ? <LoadingOverlay>
        <CircularProgress />
      </LoadingOverlay>
    : null
}

export default Loading
