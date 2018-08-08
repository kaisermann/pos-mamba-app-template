import MambaStore from '@mambasdk/store';
import { i18n } from 'svelte-i18n'; // eslint-disable-line

const INITIAL_DATA = {};
const dictionary = {
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
};

const store = i18n(MambaStore(INITIAL_DATA), {
  dictionary,
});

store.i18n.extendDictionary(
  {
    'pt-br': {
      picpay: 'picpago',
    },
  },
  {
    'en-us': {
      picpay: 'picpay english',
    },
  },
);
store.i18n.setLocale('pt-br');

export default store;
