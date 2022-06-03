import avatar01 from '../assets/avatars/avatar01.png';
import avatar02 from '../assets/avatars/avatar02.png';
import avatar03 from '../assets/avatars/avatar03.png';
import avatar04 from '../assets/avatars/avatar04.png';

export const currentUser = {
  id: 1,
  name: 'GreenDean',
  icon: avatar01,
  character: 'Shrack',
};

export const users = [
  { id: 2, name: 'Khalilormous', icon: avatar02, character: 'Orlando Bloom' },
  { id: 3, name: 'KayPee', icon: avatar03, character: 'Geoffrey Rush' },
  { id: 4, name: 'Ted_Read', icon: avatar04, character: 'Dwayne Johnson' },
];

export const history = [
  {
    user: { name: 'GreenDean', icon: avatar01 },
    question: 'Am I from England?',
    answers: [
      { userIcon: avatar02, status: 'yes' },
      { userIcon: avatar03, status: 'yes' },
      { userIcon: avatar04, status: "don't know" },
    ],
  },
  {
    user: { name: 'GreenDean', icon: avatar01 },
    question: 'Am I Boris Johnson?',
    answers: [
      { userIcon: avatar02, status: 'no' },
      { userIcon: avatar03, status: 'no' },
      { userIcon: avatar04, status: 'no' },
    ],
    guess: true,
  },
  {
    user: { name: 'Khalilormous', icon: avatar02 },
    question: "I'm a politians?",
    answers: [
      { userIcon: avatar01, status: 'no' },
      { userIcon: avatar03, status: "don't know" },
      { userIcon: avatar04, status: 'no' },
    ],
  },
  {
    user: { name: 'KayPee', icon: avatar03 },
    question: 'Powerful?',
    answers: [
      { userIcon: avatar01, status: 'yes' },
      { userIcon: avatar02, status: 'no' },
      { userIcon: avatar04, status: "don't know" },
    ],
  },
];
