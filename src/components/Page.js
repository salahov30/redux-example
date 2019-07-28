import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  render() {
    const { year, photos } = this.props
    return (
      <>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </>
    )
  }
}

Page.propTypes = {
  yaer: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
}
