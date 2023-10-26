import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Container from '@components/Container/Container'
import FeedbackList from '@components/FeedbackList/FeedbackList'
import TextField from '@components/TextField/TextField'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>О нас</h1>
          <TextField className='about-us'>
            <p className='about-us__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TextField>
          <h1>Контакты</h1>
          <TextField className='contacts'>
            <p className='contacts__item'>
            +7 (999) 333 33-33
            </p>
            <p className='contacts__item'>
              mail@mail.ru
            </p>
            <p className='contacts__item'>
              tg: @telegram_link
            </p>
          </TextField>
          <h1>Отзывы</h1>
          <FeedbackList />
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default WelcomePage
