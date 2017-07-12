import React from 'react'

import Header from '../components/header'
import PixelForm from '../containers/form-container'
import Sidebar from '../containers/sidebar-container'

const Form = () => {
  return (
    <div>
      <Header />
      <main className="cf">
        <div className="fl w-75">
          <PixelForm />
        </div>
        <div className="fl w-25">
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

export default Form