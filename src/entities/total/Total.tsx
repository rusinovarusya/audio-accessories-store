import { useSelector } from 'react-redux';
import styles from './Total.module.scss';
import { RootState } from '../../app/store';
import { headphones, wirelessHeadphones } from '../../app/db/db';

const Total = () => {
  const productInBasketList = useSelector((state: RootState) => state.basket.list);
  const productInBasketWithCostList = productInBasketList.map((product) => {
    const productWithCost = headphones.find((headphone) => (
      headphone.productId === product.productId
    )) || wirelessHeadphones.find((wirelessHeadphone) => (
      wirelessHeadphone.productId === product.productId
    ));
    return { ...product, price: productWithCost?.price.newPrice || 0 };
  })
  const cost = productInBasketWithCostList.reduce((total, product) => total + product.price * product.count, 0)|| 0;

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
