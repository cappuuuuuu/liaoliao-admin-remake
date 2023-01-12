import {
  LoginPageWrapper,
  LoginBoxContainer,
  LoginBackgroundWrapper,
  ProductExhibit,
  ProductIcon,
  BackgroundDescription
} from './styled'
import LoginForm from '@/components/LoginForm'

function Login () {
  return (
    <LoginPageWrapper>
      <LoginBoxContainer>
      <LoginForm/>
        <LoginBackgroundWrapper>
          <ProductExhibit>
            <ProductIcon/>
            <div>LIAO LIAO</div>
          </ProductExhibit>
          <BackgroundDescription>Because every second matters</BackgroundDescription>
        </LoginBackgroundWrapper>
      </LoginBoxContainer>
    </LoginPageWrapper>
  )
}

export default Login
