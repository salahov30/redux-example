import React from 'react'
import UserContainer from '../containers/PageContainer'
import PageContainer from '../containers/UserContainers'

export default function App() {
  return (
    <div className="app">
      <h1 className="page-title">Топ фото из профиля</h1>
      <PageContainer />
      <UserContainer />
    </div>
  )
}
