import SliderWrapper from '@components/SliderWrapper/SliderWrapper'
import './Slider.css'

const Slider = () => {
  return (
    <SliderWrapper>
      <div className="slider">
        <div className="slider__item">
          <img src="interstellar.jpg" alt="Элемент слайдера" className="slider__image" />
        </div>
        <div className="slider__item">
          <img src="breaking-bad.jpg" alt="Элемент слайдера" className="slider__image" />
        </div>
        <div className="slider__item">
          <img src="eight.jpg" alt="Элемент слайдера" className="slider__image" />
        </div>
      </div>
    </SliderWrapper>
  )
}

export default Slider
