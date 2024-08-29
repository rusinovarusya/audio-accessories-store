import Icon from '../../shared/ui/icon/Icon';
import styles from './LanguageController.module.scss';

const LanguageController = () => {
  return (
    <div className={styles.container}>
      <Icon name='world' width={20} height={20} />
      <label htmlFor='ru'>
        <input type='radio' name='language' id='ru' defaultChecked />
        <span className={styles.languageLabel}>Рус</span>
      </label>
      <label htmlFor='en'>
        <input type='radio' name='language' id='en' />
        <span className={styles.languageLabel}>Eng</span>
      </label>
    </div>
  );
}

export default LanguageController;
