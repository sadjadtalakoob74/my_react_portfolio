import barg from './assets/barg.png';
import dartil from './assets/dartil.png';
import scab from './assets/scab.png';
import yallow from './assets/yallow.jpeg';

export const CORE_CONCEPTS = [
  {
    image: {dartil},
    title: 'Dartil',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: {yallow},
    title: 'YALLOW',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: {barg},
    title: 'Barg',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: {scab},
    title: 'Scab',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
export const EXAMPLES = {
    Yallow: {
        title: 'Yallow',
        description:
            'Developed two mobile applications using Flutter for EaseLease. Created separate apps for\n' +
            'customers and technicians. Enabled customer booking for repair services and bike\n' +
            'requirements. Facilitated job allocation from customers to technicians',
        code: ``,
    },
    Dartil: {
        title: 'Dartil',
        description:
            'Golrang is a leading Iranian conglomerate with more than 50,000 employees and a revenue of\n' +
            '$67.3 million. Golrang launched Dartil in 2021 with a team of 200 to dominate the online\n' +
            'retail market', code: ``,
    },
    TOK: {
        title: 'TOK',
        description:
            'Learn English more efficiently, faster, and wherever you are!\n' +
            'Nice design and easy interface navigation make it clear and more attractable. Learn English in Vocabulary courses quickly  and effectively and Track your progress.\n' +
            'Our mission is to deliver in one place all the knowledge and inspiration you need to keep ahead.\n' +
            'In this application you will find very useful content for you to learn English or practice your knowledge of the language.',
        code: ``,
    }
};