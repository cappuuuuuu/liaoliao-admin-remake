import styled, { keyframes } from 'styled-components'
import { useAPIStore } from '@/store/api'

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.primary};
  background-color: rgba(0, 0, 0, .45);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 999;
`

const BreathAnimation = keyframes`
  0% {
    height: 15px;
  }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
`

const Line = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: white;

  &:nth-last-child(1) {
    animation: ${BreathAnimation} 1s 1s infinite;
  }
  
  &:nth-last-child(2) {
    animation: ${BreathAnimation} 1s 0.5s infinite;
  }

  &:nth-last-child(3) {
    animation: ${BreathAnimation} 1s 0s infinite;
  }
`

const Loading = () => {
  const isLoading = useAPIStore((state) => state.isLoading)

  return isLoading
    ? <LoadingOverlay>
        <Line/>
        <Line/>
        <Line/>
      </LoadingOverlay>
    : null
}

export default Loading
