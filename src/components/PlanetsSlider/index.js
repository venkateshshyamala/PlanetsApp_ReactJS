// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="container">
      <h1 className="heading">PLANETS</h1>
      <div className="slider" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem details={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
