import Card from './card/Card';
import styles from './ProductSectionInBasket.module.scss';

const ProductSectionInBasket = () => {
  return (
    <div className={styles.container}>
      {['1', '2', '3'].map((productId) => (
        <Card productId={productId} key={productId} />
      ))}
    </div>
  );
}

export default ProductSectionInBasket;
