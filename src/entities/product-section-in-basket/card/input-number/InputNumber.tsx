import { useEffect, useState } from 'react';
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
  const [isDecrementDisabled, setIsDecrementDisabled] = useState<boolean>(false);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (count > MIN) {
      setIsDecrementDisabled(false);
    } else {
      setIsDecrementDisabled(true);
    }
    if (count < MAX) {
      setIsIncrementDisabled(false);
    } else {
      setIsIncrementDisabled(true);
    }
  }, [count]);

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
    } 
    if (count === 1) {
      dispatch(removeProductFromBasket({ productId }));
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={decrement} disabled={isDecrementDisabled}>
        <Icon name='minus' width={14} height={14} />
      </button>
      <input type='number' className={styles.input} name='' id='' min={MIN} max={MAX} value={count} readOnly />
      <button className={styles.button} onClick={increment} disabled={isIncrementDisabled}>
        <Icon name='plus' width={14} height={14} />
      </button>
    </div>
  );
}

export default InputNumber;
