import Feedback from '@components/Feedback/Feedback'
import './FeedbackList.css'

const FeedbackList = () => {
  return (
    <ul className='feedback-list'>
      <li className='feedback-list__item'>
        <Feedback />
      </li>
      <li className='feedback-list__item'>
        <Feedback />
      </li>
      <li className='feedback-list__item'>
        <Feedback />
      </li>
    </ul>
  )
}

export default FeedbackList