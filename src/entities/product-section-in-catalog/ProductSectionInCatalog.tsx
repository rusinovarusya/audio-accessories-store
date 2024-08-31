import Section from '../../shared/ui/section/Section';
import Card from './card/Card';
import styles from './ProductSectionInCatalog.module.scss';

interface ProductSectionInCatalogProps {
  title: string;
}

const ProductSectionInCatalog = ({ title }: ProductSectionInCatalogProps) => {
  return (
    <Section title={title}>
      <div className={styles.container}>
        {['1', '2', '3', '4', '5', '6', '7'].map((productId: string) => (
          <Card productId={productId} />
        ))}
      </div>
    </Section>
  );
}

export default ProductSectionInCatalog;
