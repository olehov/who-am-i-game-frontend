import avatar01 from '../assets/avatars/avatar01.png';
import avatar02 from '../assets/avatars/avatar02.png';
import avatar03 from '../assets/avatars/avatar03.png';
import avatar04 from '../assets/avatars/avatar04.png';

export const currentUser = {
  id: 1,
  name: 'GreenDean',
  iconSrc: avatar01,
  character: 'Shrack',
};

export const users = [
  {
    id: 2,
    name: 'Khalilormous',
    iconSrc: avatar02,
    character: 'Orlando Bloom',
  },
  { id: 3, name: 'KayPee', iconSrc: avatar03, character: 'Geoffrey Rush' },
  { id: 4, name: 'Ted_Read', iconSrc: avatar04, character: 'Dwayne Johnson' },
];

export const history = [
  {
    id: 0,
    user: { name: 'GreenDean', iconSrc: avatar01 },
    question: 'Am I from England?',
    answers: [
      { userId: 2, userIconSrc: avatar02, status: 'yes' },
      { userId: 3, userIconSrc: avatar03, status: 'yes' },
      { userId: 4, userIconSrc: avatar04, status: 'unsure' },
    ],
  },
  {
    id: 1,
    user: { name: 'GreenDean', iconSrc: avatar01 },
    question: 'Am I Boris Johnson?',
    answers: [
      { userId: 2, userIconSrc: avatar02, status: 'no' },
      { userId: 3, userIconSrc: avatar03, status: 'no' },
      { userId: 4, userIconSrc: avatar04, status: 'no' },
    ],
    guess: 'guess',
  },
  {
    id: 2,
    user: { name: 'Khalilormous', iconSrc: avatar02 },
    question: "I'm a politians?",
    answers: [
      { userId: 2, userIconSrc: avatar01, status: 'no' },
      { userId: 3, userIconSrc: avatar03, status: 'unsure' },
      { userId: 4, userIconSrc: avatar04, status: 'no' },
    ],
  },
  {
    id: 3,
    user: { name: 'KayPee', iconSrc: avatar03 },
    question: 'Powerful?',
    answers: [
      { userId: 2, userIconSrc: avatar01, status: 'yes' },
      { userId: 3, userIconSrc: avatar02, status: 'no' },
      { userId: 4, userIconSrc: avatar04, status: 'unsure' },
    ],
  },
];
