import MambaStore from '@mambasdk/store';
import { i18n } from 'svelte-i18n/src/index.js'; // eslint-disable-line

const INITIAL_DATA = {};
const langs = [
  {
    'pt-br': {
      test: 'teste',
      english: 'inglês',
      NO_PAPER: {
        title: 'SEM PAPEL',
        message: 'Eita caramba, que pena...',
      },
      portuguese: 'português',
      real: 'reais | real | reais',
      array: ['um', 'dois', 'tres'],
      hello: 'Olá, {0}, como você vai?',
    },
    'en-us': {
      test: 'test',
      english: 'english',
      portuguese: 'portuguese',
      real: 'dollars | dollar | dollars',
      hello: 'Hello, {0}, how are you?',
    },
  },
  {
    'pt-br': {
      picpay: 'picpago',
    },
  },
];

const store = i18n(MambaStore(INITIAL_DATA), langs);

store.setLocale('pt-br');

export default store;
