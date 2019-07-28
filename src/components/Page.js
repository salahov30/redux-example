import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map((entry, index) => (
        <div key={index} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }

  renderButtons() {
    const years = [2019, 2018, 2016, 2015, 2014, 2013, 2012, 2011]

    return years.map(item => (
      <button key={item} onClick={this.onBtnClick} className="btn-year">
        {item}
      </button>
    ))
  }
  render() {
    const { year, photos } = this.props
    return (
      <div className="page">
        {this.renderButtons()}
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
