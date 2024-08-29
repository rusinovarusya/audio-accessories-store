import { productData } from '../../../app/db/db-data';
import { IProduct } from '../../../shared/types';
import Icon from '../../../shared/ui/icon/Icon';
import styles from './Card.module.scss';

interface CardProps {
  productId: string;
}

const Card = ({ productId }: CardProps) => {
  const productItem = productData.find((item) => item.productId === productId);
  const { name, price: { oldPrice, newPrice }, rating } = productItem as IProduct;

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const v = e.currentTarget.value;
    alert(v)
  }

  return (
    <div className={styles.container}>
      <img src='' alt='img' className={styles.img} />
      <div className={styles.description}>
        <div className={styles.row}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>
            {oldPrice ? (
              <>
                <span className={styles.newPrice}>{newPrice} ₽</span>
                <span className={styles.oldPrice}>{oldPrice} ₽</span>
              </>
            ) : (
              <span className={styles.newPrice}>{newPrice} ₽</span>
            )}
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.rating}>
          <Icon name='star' width={24} height={22} />
          {rating}
        </div>
          <button className={styles.buyButton} onClick={onClick}>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
