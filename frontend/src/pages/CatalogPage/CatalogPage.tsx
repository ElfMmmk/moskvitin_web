import Header from '@components/Header/Header'
import Container from '@components/Container/Container'
import Footer from '@components/Footer/Footer'
import Button from '@components/Button/Button'
import { ButtonStyles } from '@/types/ButtonStyles'
import './CatalogPage.css'

const CatalogPage = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>Каталог</h1>
          <div className="catalog__menu">
            <Button className="catalog__item">
              Рекомендации
            </Button>
            <Button className="catalog__item">
              Фильмы
            </Button>
            <Button className="catalog__item">
              Сериалы
            </Button>
            <Button className="catalog__item">
              Мультфильмы
            </Button>
            <Button className="catalog__item">
              Новинки
            </Button>
            <Button className="catalog__item" style={ ButtonStyles.Green }>
              Жанр
            </Button>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default CatalogPage
