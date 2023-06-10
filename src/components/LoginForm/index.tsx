import {
  FormWrap,
  GreetingMsg,
  HintMsg,
  InputContainer,
  InputWrapper,
  PasswordInputWrapper,
  InputIcon,
  Input,
  SignInButton
} from './styled'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '@/hooks/useLogin'
import FormErrorMessage from '@/components/FormErrorMessage'
import AccountIcon from '@/assets/account.svg'
import PasswordIcon from '@/assets/password.svg'

const loginSchema = Yup.object().shape({
  account: Yup.string()
    .required(),
  password: Yup.string()
    .required()
})

type FormPayloadProps = {
  account: string
  password: string
}

function LoginForm () {
  const initialValues: FormPayloadProps = {
    account: '',
    password: ''
  }
  const loginMutation = useLogin()
  const navigate = useNavigate()
  const handleSubmit = (values: FormPayloadProps) => {
    const { account, password } = values
    loginMutation.mutate({ account, password }, {
      onSuccess: () => navigate('/manage')
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrap>
          <GreetingMsg>Login</GreetingMsg>
          <HintMsg>You need to provide an access details below to enter the manage system</HintMsg>
          <Form>
            <InputContainer>
              <InputWrapper>
                <InputIcon src={AccountIcon}/>
                <Input id="account" name="account" placeholder="Account"/>
              </InputWrapper>
              { errors.account && touched.account && <FormErrorMessage name="account" component="div"/>}
              <PasswordInputWrapper>
                <InputIcon src={PasswordIcon}/>
                <Input type="password" id="password" name="password" placeholder="Password"/>
              </PasswordInputWrapper>
              { errors.password && touched.password && <FormErrorMessage name="password" component="div"/>}
            </InputContainer>
            <SignInButton>Sign In</SignInButton>
          </Form>
        </FormWrap>
      )}
    </Formik>
  )
}

export default LoginForm
