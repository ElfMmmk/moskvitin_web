import { Link } from 'react-router-dom';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Input from '@components/Input/Input';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Link to="/" className="header__logo">
          <img className='header__logo-img' src='logo.svg' alt='Логотип сайта'/> 
        </Link>
        <div className="header__menu menu">
          <Link to="/catalog" className="menu__item">
            <Button>
              Каталог
            </Button>
          </Link>
          <Link to="/about" className="menu__item">
            О нас
          </Link>
          <Link to="/blog" className="menu__item">
            Блог
          </Link>
        </div>
        <div className="header__manage">
          <Input>Введите для поиска..</Input>
          <Link to="/search" className="header__search-btn">
            <img className='header__search-img' src="search.svg" alt="Поиск по сайту" />
          </Link>
          <Link to="/me" className="header__profile-btn">
            <img className='header__profile-img' src="profile.svg" alt="Профиль пользолователя" />
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
