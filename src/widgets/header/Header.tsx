import { Link } from 'react-router-dom';
import Icon from '../../shared/ui/icon/Icon';
import styles from './Header.module.scss';

const Header = () => {
  const favoritesCount = 0;
  const basketCount = 0;

  return (
    <header className={styles.container}>
      <Link to={'/'}>
        <h1 className={styles.logo}>QPICK</h1>
      </Link>
      <div className={styles.row}>
        <Link to={'/wish-list'} className={styles.iconWrapper}>
          <Icon name='favorites' className={styles.icon} />
          <div className={styles.countWrapper}>
            <span className={styles.count}>{favoritesCount}</span>
          </div>
        </Link>
        <Link to={'/basket'} className={styles.iconWrapper}>
          <Icon name='basket' className={styles.icon} />
          <div className={styles.countWrapper}>
            <span className={styles.count}>{basketCount}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
