import { PropsWithChildren } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  title: string;
}

const Section = ({ title, children }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
