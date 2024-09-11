import { useState } from 'react'
import SignUpPage from './pages/SignUpPage'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-redPattern bg-signupRed px-6 md:flex-row">
      <ToastContainer />
      <SignUpPage />
    </div>
  )
}

export default App
