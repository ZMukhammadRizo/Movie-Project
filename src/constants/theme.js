//Theme
import { storageData } from '../utils/storage';

const color = storageData('theme').getValue();

export default () => {
  return {
    background: {
      tmdbLightBlue: '#01b4e4',
      tmdbLightGreen: '#1ed5a9',
      darkBlue: 'rgba(3,37,6)',
      accountPurple: 'rgba(128,91,231)',
      accountLightBlue: 'rgba(1,180,228)',
      lightGrey: 'rgba(227,227,227)',
    },
    borderRadius: {
      imageBorderRadius: '8px',
    },
  };
};
