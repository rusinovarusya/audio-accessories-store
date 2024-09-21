import { Link } from 'react-router-dom';
import LanguageController from '../../entities/language-controller/LanguageController';
import Icon from '../../shared/ui/icon/Icon';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link to={'/'} className={styles.link}>
        <h2 className={styles.logo}>QPICK</h2>
      </Link>
      <nav className={styles.pagination}>
        <Link to={'/wish-list'} className={styles.link}>
          <span className={styles.favorites}>Избранное</span>
        </Link>
        <Link to={'/basket'} className={styles.link}>
          <span className={styles.basket}>Корзина</span>
        </Link>
        <span className={styles.contacts}>Контакты</span>
      </nav>
      <div className={styles.addition}>
        <span className={styles.serviceTerms}>Условия сервиса</span>
        <LanguageController />
      </div>
      <ul className={styles.socials}>
        <li className={styles.socialsItem}>
          <a href=''>
            <Icon name='vk' className={styles.icon} width={30} height={20} />
          </a></li>
        <li className={styles.socialsItem}>
          <a href=''>
            <Icon name='telegram' className={styles.icon} width={30} height={30} />
          </a>
        </li>
        <li className={styles.socialsItem}>
          <a href=''>
            <Icon name='whatsapp' className={styles.icon} width={30} height={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
