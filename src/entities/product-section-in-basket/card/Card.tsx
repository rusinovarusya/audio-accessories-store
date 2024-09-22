import Icon from '../../../shared/ui/icon/Icon';
import InputNumber from './input-number/InputNumber';
import styles from './Card.module.scss';
import { IProduct } from '../../../shared/types';
import { getImageSource } from '../../../features/module/getImageSource';
import { headphones, wirelessHeadphones } from '../../../app/db/db';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { removeProductFromBasket } from '../../../features/slices/basketSlice';

interface Card {
  productId: string;
}

const Card = ({ productId }: Card) => {
  const dispatch = useDispatch();

  const productItem = headphones.find((item) => item.productId === productId) || wirelessHeadphones.find((item) => item.productId === productId);
  const { name, img, price: { newPrice } } = productItem as IProduct;

  const productInBasketList = useSelector((state: RootState) => state.basket.list);
  const count = productInBasketList.find((product) => product.productId === productId)?.count || 0;

  const deleteProductFromBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const productId = e.currentTarget.value;
    dispatch(removeProductFromBasket({ productId }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={getImageSource(img || '')} alt='img' />
        </div>
        <InputNumber defaultValue={count} productId={productId} />
      </div>
      <div className={styles.mainInformation}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{newPrice}</div>
      </div>
      <div className={styles.control}>
        <button className={styles.deleteButton} value={productId} onClick={deleteProductFromBasket}>
          <Icon name='delete' width={20} height={17} />
        </button>
        <div className={styles.price}>{newPrice} ₽</div>
      </div>
    </div>
  );
}

export default Card;
