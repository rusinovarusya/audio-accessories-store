import Icon from '../../shared/ui/icon/Icon';
import styles from './Header.module.scss';

const Header = () => {
  const favoritesCount = 0;
  const basketCount = 0;

  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>QPICK</h1>
      <div className={styles.row}>
        <div className={styles.iconWrapper}>
          <Icon name='favorites' className={styles.icon} />
          <div className={styles.countWrapper}>
            <span className={styles.count}>{favoritesCount}</span>
          </div>
        </div>
        <div className={styles.iconWrapper}>
          <Icon name='basket' className={styles.icon} />
          <div className={styles.countWrapper}>
            <span className={styles.count}>{basketCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
