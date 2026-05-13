import { ToastContainer, Slide } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './toast.css'

export function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={2500}
      transition={Slide}
      theme=""
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
    />
  )
}

export default ToastProvider
