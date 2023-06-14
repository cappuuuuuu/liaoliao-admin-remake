import styled from 'styled-components'
import { Field } from 'formik'

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 8%;
  background-color: white;
  border-radius: 20px;


  @media (min-width: 1280px) {
    width: 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const GreetingMsg = styled.div`
  margin-bottom: 16px;
  font-size: 66px;
  color: ${props => props.theme.colors.primary};
`

export const HintMsg = styled.div`
  margin-bottom: 66px;
  color: #6b7280;
  letter-spacing: -0.025em;
`

export const InputContainer = styled.div`
  margin-bottom: 36px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  border-radius: 10px;
  background-color: rgb(246, 246, 246);
  transition: .2s;

  &:focus-within {
    background-color: rgb(236, 237, 240);
  }
`

export const PasswordInputWrapper = styled(InputWrapper)`
  margin-top: 22px;
`

export const InputIcon = styled.img`
  height: 20px;
  margin-right: 16px;
`

export const Input = styled(Field).attrs(props => ({
  type: props.type || 'text'
}))`
  width: 100%;
  padding: 14px 0;
  border: none;
  outline: none;
  color: #6b7280;
  background-color: transparent;

  &:-webkit-autofill {
    transition: .15s ease;
    -webkit-box-shadow: 0 0 0px 1000px rgb(246,246,246) inset;
  }

  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px rgb(236, 237, 240) inset;
  }
`

export const SignInButton = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
  color: white;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  cursor: pointer;
  background-color: #5081ad;
  transition: .2s;

  &:hover {
    background-color: #4b779d;
  }
`
