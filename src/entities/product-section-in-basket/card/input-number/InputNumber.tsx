import Icon from '../../../../shared/ui/icon/Icon';
import styles from './InputNumber.module.scss';

const InputNumber = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Icon name='minus' width={14} height={14} />
      </button>
      <input type='number' className={styles.input} name='' id='' min={0} max={10} value={1} />
      <button className={styles.button}>
        <Icon name='plus' width={14} height={14} />
      </button>
    </div>
  );
}

export default InputNumber;
