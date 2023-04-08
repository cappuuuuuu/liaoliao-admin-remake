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
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '@/hooks/useLogin'

function LoginForm () {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const loginMutation = useLogin()
  const navigate = useNavigate()

  const handleSubmit = () => {
    loginMutation.mutate({ account, password }, {
      onSuccess: () => navigate('/manage')
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <FormWrap>
      <GreetingMsg>Login</GreetingMsg>
      <HintMsg>You need to provide an access details below to enter the manage system</HintMsg>
      <InputContainer>
        <AccountInputWrapper>
          <InputIcon src={ AccountIcon }/>
          <Input
            placeholder='Username'
            name='account'
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </AccountInputWrapper>
        <InputWrapper>
          <InputIcon src={PasswordIcon}/>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputWrapper>
      </InputContainer>
      <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
    </FormWrap>
  )
}

export default LoginForm
