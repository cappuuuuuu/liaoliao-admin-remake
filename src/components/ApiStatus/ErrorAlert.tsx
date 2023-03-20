import { Snackbar, Alert } from '@mui/material'
import { useAPIStore } from '@/store/api'

const ErrorAlert: React.FC = () => {
  const error = useAPIStore((state) => state.error)
  const setError = useAPIStore((state) => state.setError)

  const handleClose = () => {
    setError(null)
  }

  return (
    <Snackbar
      open={error !== null}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  )
}

export default ErrorAlert
