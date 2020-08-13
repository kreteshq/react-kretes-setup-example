import { Handler, response } from 'kretes';

const { OK } = response;

const names = [ 'Rick Deckard', 'Harry Bryant', 'Roy Batty', 'Dr. Eldon Tyrell', 'Hannibal Chew',
  'Niander Wallace', 'Taffey Lewis', 'Dave Holden', 'Ana Stelline', 'Leon Kowalski'];

export const browse: Handler = ({ params }) => {
  const nameAtRandom = names[Math.floor(Math.random() * names.length)];

  return OK({ name: nameAtRandom });
}
