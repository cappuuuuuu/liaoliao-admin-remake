import styled from 'styled-components'
import LoginBackGround from '@/assets/login-background.png'
import Logo from '@/assets/logo.svg'

export const LoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bg};
`

export const LoginBoxContainer = styled.div`
  display: flex;
  width: 65%;
  height: 80%;
  max-width: 1500px;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`

export const LoginBackgroundWrapper = styled.div`
  display: none;
  position: relative;
  width: 75%;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => props.theme.colors['light-primary']};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${LoginBackGround});

  @media (min-width: 1280px) {
    display: block;
  }
`

export const ProductExhibit = styled.div`
  position: absolute;
  top: 32px;
  right: 42px;
  display: flex;
  color: white;
  font-size: 22px;
  letter-spacing: 0.1em;
`

export const ProductIcon = styled.img.attrs(
  { src: Logo }
)`
  height: 28px;
  margin-right: 16px;
  transform: translateY(1px);
`

export const BackgroundDescription = styled.div`
  position: absolute;
  bottom: 46px;
  width: 100%;
  color: white;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.025em;
`
