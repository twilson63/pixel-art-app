import React from 'react'

import { Button } from 'jrs-react-components@2.0.x'
import Header from '../components/header'

import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <Header />
      <main className="mw6 mt2 center tc">
        <Link to="/new"><Button>Add New</Button></Link>
      </main>
    </div>
  )
}

export default Home