import LanguageController from '../../entities/language-controller/LanguageController';
import Icon from '../../shared/ui/icon/Icon';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.logo}>QPICK</h2>
      <nav className={styles.pagination}>
        <span className={styles.favorites}>Избранное</span>
        <span className={styles.basket}>Корзина</span>
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
