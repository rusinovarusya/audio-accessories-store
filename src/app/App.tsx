import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './app-container/AppContainer';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';
import MainPage from '../pages/main-page/MainPage';
import BasketPage from '../pages/basket-page/BasketPage';
import WishListPage from '../pages/wish-list-page/WishListPage';

const App = () => {
  return (
    <BrowserRouter basename='/audio-accessories-store'>
      <AppContainer>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/wish-list' element={<WishListPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
