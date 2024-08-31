import styles from './Total.module.scss';

const Total = () => {
  const cost = 0;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.costLabel}>Итого</span>
        <span className={styles.cost}>₽ {cost}</span>
      </div>
      <button className={styles.submitButton}>Перейти к оформлению</button>
    </div>
  );
}

export default Total;
