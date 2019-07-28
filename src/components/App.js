import React from 'react'
import UserContainer from '../containers/PageContainer'
import PageContainer from '../containers/UserContainers'

export default function App() {
  return (
    <div className="app">
      <PageContainer />
      <UserContainer />
    </div>
  )
}
