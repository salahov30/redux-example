import React, { Component } from 'react'
import { connect } from 'react-redux'

import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActons'
import { handleLogin } from '../actions/UserActions'
import './App.css'

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          error={page.error}
          getPhotos={getPhotosAction}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  handleLoginAction: () => dispatch(handleLogin()),
})

export default connect(
  mapStateToProps,
  mapDispatchProps
)(App)
