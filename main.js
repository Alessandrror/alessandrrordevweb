import './style.css';
import Alpine from 'alpinejs';

const AlpineTest = () => {
  return {
    greetings: "Hi!",
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
  <div x-data="alpineTest">
    <h1 x-text="greetings"></h1>
  </div>
`;