import { Snackbar, Alert } from '@mui/material'
import { useAPIStore } from '@/store/api'
import { useMemo } from 'react'

const severityDefault = 'success'

const ReponseAlert: React.FC = () => {
  const content = useAPIStore((state) => state.message.content)
  const type = useAPIStore((state) => state.message.type)
  const initMessage = useAPIStore((state) => state.initMessage)

  const alertProps = useMemo(() => {
    return {
      severity: type ?? severityDefault,
      children: content,
      onClose: initMessage
    }
  }, [type, content])

  return (
    <Snackbar
      open={content !== null}
      autoHideDuration={6000}
      onClose={initMessage}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert { ...alertProps }/>
    </Snackbar>
  )
}

export default ReponseAlert
