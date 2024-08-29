import ProductSection from '../../entities/product-section/ProductSection';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <main className={styles.container}>
      <ProductSection title='Наушники' />
      <ProductSection title='Беспроводные наушники' />
    </main>
  );
}

export default Catalog;
