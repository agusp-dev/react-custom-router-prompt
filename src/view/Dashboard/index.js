import { useHistory } from 'react-router-dom'

export default function DashBoard () {
  
  const history = useHistory()

  return (
    <div>
      <p>Dashboard</p>
      <button 
        type='button'
        onClick={ () => history.push('/') }>To Home</button>
    </div>
  )
}
