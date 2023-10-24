import Container from '@components/Container/Container'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <ul className="footer__menu">
          <li className="footer__item">
            <a href="#" className="footer__link">
              Каталог
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              О нас
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Личный кабинет
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Вопросы и ответы
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Блог
            </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Footer
