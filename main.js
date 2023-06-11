import './style.css';
import Alpine from 'alpinejs';
import main from './public/components/main/';
import header from './public/components/header/';

export const AlpineTest = () => {
  return {
    greetings: "Hi!",
    field: '',
    init: function () {
      this.greetings = 'XD';
    }
  };
};

window.Alpine = Alpine;
Alpine.data('alpineTest', AlpineTest);
Alpine.start();

const root = document.getElementById('app');
root.setAttribute('x-data', 'alpineTest');

root.innerHTML = `
  ${header}
  ${main}
`;