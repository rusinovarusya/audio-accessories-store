import Icon from '../../../shared/ui/icon/Icon';
import InputNumber from './input-number/InputNumber';
import styles from './Card.module.scss';
import { productData } from '../../../app/db/db-data';
import { IProduct } from '../../../shared/types';

interface Card {
  productId: string;
}

const Card = ({ productId }: Card) => {
  const productItem = productData.find((item) => item.productId === productId);
  const { name, price: { oldPrice, newPrice }, rating } = productItem as IProduct;

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img src='' alt='img' />
        <InputNumber />
      </div>
      <div className={styles.mainInformation}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{newPrice}</div>
      </div>
      <div className={styles.control}>
        <button className={styles.deleteButton}><Icon name='delete' width={20} height={17} /></button>
        <div className={styles.price}>{newPrice} ₽</div>
      </div>
    </div>
  );
}

export default Card;
