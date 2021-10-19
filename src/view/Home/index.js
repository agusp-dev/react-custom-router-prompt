import { useState } from 'react'
import { useHistory, Prompt } from 'react-router-dom'

export default function Home () {
  const history = useHistory()

  const [isAuth, setIsAuth] = useState(false)

  console.log(typeof Prompt)

  return (
    <div>
      <Prompt 
        when={!isAuth}
        message={() => {
          alert('Please, save your work!')
          return false
        }}
      />
      <p>Home</p>
      <div style={{ marginBottom: '16px' }}>
        <p>{`Is Auth: ${ isAuth }`}</p>
        <button 
          type='button'
          onClick={ () => setIsAuth(!isAuth) }
          >{ isAuth ? 'Logout' : 'Login' }
        </button>
      </div>
      <button 
        type='button'
        onClick={ () => history.push('/dashboard') }
        >To Dashboard
      </button>
    </div>
  )
}
