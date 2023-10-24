import './Feedback.css'

const Feedback = () => {
  return (
    <div className='feedback'>
      <div className="feedback__user">
        <img src="image-placeholder.svg" alt="Аватар пользователя, оставившего отзыв" className="feedback__image" />
        <p className="feedback__name">Имя</p>
      </div>
      <p className='feedback__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
    </div>
  )
}

export default Feedback
