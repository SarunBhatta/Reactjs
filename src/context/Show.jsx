import React from 'react'
import CompA from './CompA'
import GlobalContextProvider from './GlobalContext'

const Show = () => {
  return (
    <GlobalContextProvider>
        <CompA/>
    </GlobalContextProvider>
  )
}

export default Show
