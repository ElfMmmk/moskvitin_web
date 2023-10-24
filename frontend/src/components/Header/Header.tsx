import Container from '@components/Container/Container';
import Input from '@components/Input/Input';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <a href="#" className="header__logo">
          <img className='header__logo-img' src='logo.svg' alt='Логотип сайта'/> 
        </a>
        <div className="header__menu menu">
          <a href="#" className="menu__item">
            Каталог
          </a>
          <a href="#" className="menu__item">
            О нас
          </a>
          <a href="#" className="menu__item">
            Блог
          </a>
        </div>
        <div className="header__manage">
          <Input>Введите для поиска..</Input>
          <a href="#" className="header__search-btn">
            <img className='header__search-img' src="search.svg" alt="Поиск по сайту" />
          </a>
          <a href="#" className="header__profile-btn">
            <img className='header__profile-img' src="profile.svg" alt="Профиль пользолователя" />
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
