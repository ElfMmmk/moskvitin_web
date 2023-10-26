import { useEffect, useState } from 'react'
import './SliderWrapper.css'

const SliderWrapper = ({
  children
}: React.PropsWithChildren) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (current > 0) {
      setCurrent(-2)
    }
    if (current < -2) {
      setCurrent(0)
    }
  }, [current])

  return (
    <div className='slider-wrapper'>
      <button onClick={ () => setCurrent(current + 1) } className='slider-wrapper__nav slider-wrapper__nav--prev'>
        <img src="arrow.svg" alt="Предыдущий слайд" />
      </button>
      <div 
        style={{
          transform: `translateX(${current * 100}%)`
        }} 
        className="slider-wrapper__wrapper"
      >
        { children }
      </div>
      <button onClick={ () => setCurrent(current - 1) } className='slider-wrapper__nav slider-wrapper__nav--next'>
        <img src="arrow.svg" alt="Следующий слайд" />
      </button>
    </div>
  )
}

export default SliderWrapper
