import React from 'react'
import Add from './Add'
import View from './View'

function App() {
  return (
    <div className='bg-green-300 h-screen '>
      <h3 className='text-center mt-12 font-bold text-2xl'>Todo Application</h3>
      <Add/>
      <View/>
    </div>
  )
}

export default App