import { useState } from 'react';
import Icon from '../../../../shared/ui/icon/Icon';
import styles from './InputNumber.module.scss';
import { useDispatch } from 'react-redux';
import { MAX, MIN } from './constants';
import { decreaseProductCountInBasket, increaseProductCountInBasket, removeProductFromBasket } from '../../../../features/slices/basketSlice';

interface InputNumberProps {
  defaultValue: number;
  productId: string;
}

const InputNumber = ({ defaultValue, productId }: InputNumberProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(defaultValue);

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
      dispatch(increaseProductCountInBasket({ productId, count }));
    }
  }
  const decrement = () => {
    if (count > MIN) {
      setCount(count - 1);
      dispatch(decreaseProductCountInBasket({ productId, count }));
    } else {
      dispatch(removeProductFromBasket({ productId }));
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement}>
        <Icon name='minus' width={14} height={14} />
      </button>
      <input type='number' className={styles.input} name='' id='' min={MIN} max={MAX} value={count} readOnly />
      <button className={styles.button} onClick={increment}>
        <Icon name='plus' width={14} height={14} />
      </button>
    </div>
  );
}

export default InputNumber;
