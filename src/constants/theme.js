//Theme
import { storageData } from '../utils/storage';

const color = storageData('theme').getValue();

export default () => {
  return {
    background: {
      tmdbLightBlue: '#01b4e4',
      tmdbLightGreen: '#1ed5a9',
      darkBlue: 'rgba(3,37,6)',
    },
  };
};
