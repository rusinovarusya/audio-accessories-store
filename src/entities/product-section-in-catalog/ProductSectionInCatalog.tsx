import { headphones, wirelessHeadphones } from '../../app/db/db';
import { IProduct } from '../../shared/types';
import Section from '../../shared/ui/section/Section';
import Card from './card/Card';
import styles from './ProductSectionInCatalog.module.scss';

interface ProductSectionInCatalogProps {
  sectionId: string;
  title: string;
}

const ProductSectionInCatalog = ({ sectionId, title }: ProductSectionInCatalogProps) => {
  const headphonesIdList = headphones.map((product: IProduct) => product.productId);
  const wirelessHeadphonesIdList = wirelessHeadphones.map((product: IProduct) => product.productId);
  const idList = sectionId === 'headphones' ? headphonesIdList : wirelessHeadphonesIdList;

  return (
    <Section title={title}>
      <div className={styles.container}>
        {idList.map((productId: string) => (
          <Card productId={productId} key={productId} />
        ))}
      </div>
    </Section>
  );
}

export default ProductSectionInCatalog;
