import Card from './card/Card';
import styles from './ProductSection.module.scss';

interface ProductSectionProps {
  title: string;
}

const ProductSection = ({ title }: ProductSectionProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {['1', '2', '3', '4', '5', '6', '7'].map((productId: string) => (
          <Card productId={productId} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
