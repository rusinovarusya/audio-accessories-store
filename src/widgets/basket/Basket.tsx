import ProductSectionInBasket from '../../entities/product-section-in-basket/ProductSectionInBasket';
import Total from '../../entities/total/Total';
import Section from '../../shared/ui/section/Section';
import styles from './Basket.module.scss';

const Basket = () => {
  const title = 'Корзина';

  return (
    <Section title={title}>
      <div className={styles.container}>
        <ProductSectionInBasket />
        <Total />
      </div>
    </Section>
  );
}

export default Basket;
