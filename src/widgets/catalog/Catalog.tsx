import ProductSectionInCatalog from '../../entities/product-section-in-catalog/ProductSectionInCatalog';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <main className={styles.container}>
      <ProductSectionInCatalog sectionId='headphones' title='Наушники' />
      <ProductSectionInCatalog sectionId='wirelessHeadphones' title='Беспроводные наушники' />
    </main>
  );
}

export default Catalog;
