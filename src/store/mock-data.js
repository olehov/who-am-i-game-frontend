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
    user: { name: 'GreenDean', iconSrc: avatar01 },
    question: 'Am I from England?',
    answers: [
      { userIconSrc: avatar02, status: 'yes' },
      { userIconSrc: avatar03, status: 'yes' },
      { userIconSrc: avatar04, status: "don't know" },
    ],
  },
  {
    user: { name: 'GreenDean', iconSrc: avatar01 },
    question: 'Am I Boris Johnson?',
    answers: [
      { userIconSrc: avatar02, status: 'no' },
      { userIconSrc: avatar03, status: 'no' },
      { userIconSrc: avatar04, status: 'no' },
    ],
    guess: true,
  },
  {
    user: { name: 'Khalilormous', iconSrc: avatar02 },
    question: "I'm a politians?",
    answers: [
      { userIconSrc: avatar01, status: 'no' },
      { userIconSrc: avatar03, status: "don't know" },
      { userIconSrc: avatar04, status: 'no' },
    ],
  },
  {
    user: { name: 'KayPee', iconSrc: avatar03 },
    question: 'Powerful?',
    answers: [
      { userIconSrc: avatar01, status: 'yes' },
      { userIconSrc: avatar02, status: 'no' },
      { userIconSrc: avatar04, status: "don't know" },
    ],
  },
];
