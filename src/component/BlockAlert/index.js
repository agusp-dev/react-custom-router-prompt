import { 
  useEffect, 
  useState 
} from 'react'
import { useHistory } from 'react-router'
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  Button
} from '@mui/material'
import { Prompt } from 'react-router'

export default function BlockAlert (props) {

  const { when, title, message, onOk } = props

  console.log(when, title, message)

  const history = useHistory()

  const [showAlert, setShowAlert] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  const handleOkClick = () => {
    setShowAlert(false)
    onOk()
  }

  useEffect(() => {

    console.log('aaa')

    if (when) {
      history.block(prompt => {
        setCurrentPath(prompt.pathname)
        setShowAlert(true)
        return true
      })
    } else {
      history.block(() => {})
    }

    return () => history.block(() => {})

  }, [history, when])

  // return showAlert ? (
    // <Dialog
    //     open={showAlert}
    //     onClose={ handleOkClick }
    //   >
    //     <DialogTitle>{ title }</DialogTitle>
    //     <DialogContent>
    //       <DialogContentText>{ message }</DialogContentText>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button 
    //         onClick={ handleOkClick } >
    //         OK
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
  // ) : null

    return (
      <>
        <Prompt when={ when } message={ location => 'You sure?' } />
        <Dialog
          open={showAlert}
          onClose={ handleOkClick }
        >
          <DialogTitle>{ title }</DialogTitle>
          <DialogContent>
            <DialogContentText>{ message }</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={ handleOkClick } >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}
