import axios from 'axios';

const userName = 'GreenDean';

export async function getGames(userName) {
  try {
    const response = await axios({
      url: '/games',
      method: 'get',
      headers: { 'X-Player': userName },
    });
    console.log(response.data);
  } catch (error) {
    console.log('ERROR', error);
  }
}

export async function askQuestion(id, question, userName) {
  try {
    // const response = await axios({
    //   url: '/api/v1/games',
    //   method: 'get',
    //   headers: { 'X-Player': userName },
    // });
    // console.log(response.data);
    const response = await axios({
      url: `/games/${id}/questions/${question}`,
      method: 'post',
      headers: { 'X-Player': userName },
    });
    console.log(response.status);
  } catch (error) {
    console.log('ERROR', error);
  }
}

export async function getCurrentTurnInfo(id, userName) {
  try {
    const response = await axios({
      url: `https://who-i-am-vsierhieiev2.herokuapp.com/games/${id}/turn`,
      method: 'get',
      headers: { 'X-Player': userName },
    });
    console.log(response.data);
  } catch (error) {
    console.log('ERROR', error);
  }
}
