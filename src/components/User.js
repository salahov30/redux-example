import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <>
        <p>Привет, {name}</p>
      </>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
