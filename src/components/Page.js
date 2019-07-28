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
          <div className="photo-item">
            <img src={entry.sizes[2].url} alt={`Фото из профиля`} />
            <span>{entry.likes.count} ❤</span>
          </div>
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
    return (
      <div className="page-wrapper">
        {this.renderButtons()}
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
