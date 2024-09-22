import { useSelector } from 'react-redux';
import Card from './card/Card';
import styles from './ProductSectionInBasket.module.scss';
import { RootState } from '../../app/store';

const ProductSectionInBasket = () => { 
  const productInBasketList = useSelector((state: RootState) => state.basket.list);
  const productIdList: string[] = productInBasketList.map((product) => product.productId);

  return (
    <div className={styles.container}>
      {productIdList.map((productId) => (
        <Card productId={productId} key={productId} />
      ))}
    </div>
  );
}

export default ProductSectionInBasket;
