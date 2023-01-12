import {
  FormWrap,
  GreetingMsg,
  HintMsg,
  InputContainer,
  InputWrapper,
  AccountInputWrapper,
  InputIcon,
  Input,
  SignInButton
} from './styled'
import AccountIcon from '@/assets/account.svg'
import PasswordIcon from '@/assets/password.svg'

function LoginForm () {
  return (
    <FormWrap>
      <GreetingMsg>Login</GreetingMsg>
      <HintMsg>You need to provide an access details below to enter the manage system</HintMsg>
      <InputContainer>
        <AccountInputWrapper>
          <InputIcon src={ AccountIcon }/>
          <Input placeholder='Username' name='acoount'/>
        </AccountInputWrapper>
        <InputWrapper>
          <InputIcon src={PasswordIcon}/>
          <Input type="password" placeholder='Password' name='password' autocomplete="on"/>
        </InputWrapper>
      </InputContainer>
      <SignInButton>Sign In</SignInButton>
    </FormWrap>
  )
}

export default LoginForm
