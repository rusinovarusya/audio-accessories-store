import { useDispatch } from 'react-redux';
import { headphones, wirelessHeadphones } from '../../../app/db/db';
import { getImageSource } from '../../../features/module/getImageSource';
import { IProduct } from '../../../shared/types';
import Icon from '../../../shared/ui/icon/Icon';
import styles from './Card.module.scss';
import { addProductToBasket } from '../../../features/slices/basketSlice';

interface CardProps {
  productId: string;
}

const Card = ({ productId }: CardProps) => {
  const dispatch = useDispatch();

  const productItem = headphones.find((item) => item.productId === productId) || wirelessHeadphones.find((item) => item.productId === productId);
  const { name, img, price: { oldPrice, newPrice }, rating } = productItem as IProduct;

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const productId = e.currentTarget.value;
    dispatch(addProductToBasket({ productId, count: 1 }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={getImageSource(img || '')} alt='img' className={styles.img} />
      </div>
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
          <button className={styles.buyButton} value={productId} onClick={onClick}>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
