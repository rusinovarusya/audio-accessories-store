import { PropsWithChildren } from 'react';
import styles from './AppContainer.module.scss';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
