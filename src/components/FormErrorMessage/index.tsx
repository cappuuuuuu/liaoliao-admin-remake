import styled from 'styled-components'
import { ErrorMessage } from 'formik'
import WarningIcon from '@mui/icons-material/Warning'

type ErrorMessageProps = {
  name: string
  component?: string
  children?: (message: string) => React.ReactNode
  render?: (error: string) => React.ReactNode
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 8px;
`

const Message = styled(ErrorMessage)`
  color: #bf1650;
`

const Warning = styled(WarningIcon).attrs({
})`
  font-size: 14px !important;
  width: 4px;
  color: #bf1650;
  margin-right: 4px;
`

function FormErrorMessage (props: ErrorMessageProps) {
  return (
    <Container>
      <Warning/>
      <Message {...props}/>
    </Container>
  )
}

export default FormErrorMessage
