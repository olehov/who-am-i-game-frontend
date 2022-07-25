import axios from 'axios';

async function findGameById(player, id) {
  return axios({
    method: 'get',
    url: `/api/v1/games/${id}`,
    headers: { 'X-Player': player },
  });
}

async function savePlayersOnline(player) {
  return axios({
    method: 'get',
    url: `/api/v1/`,
    headers: { 'X-Player': player },
  });
}

async function findAvailableGames(player) {
  return axios({
    method: 'get',
    url: '/api/v1/games',
    headers: { 'X-Player': player },
  });
}

async function getAllPlayersCount(player) {
  return axios({
    method: 'get',
    url: '/api/v1/games/all-players-count',
    headers: { 'X-Player': player },
  });
}

function createGame(player, playersNum) {
  return axios({
    method: 'post',
    url: '/api/v1/games/',
    headers: { 'X-Player': player },
    data: {
      maxPlayers: playersNum,
    },
  });
}

function createQuickGame(player) {
  const response = axios({
    method: 'post',
    url: '/api/v1/games/quick',
    headers: { 'X-Player': player },
  });

  return response;
}

function suggestCharacter(player, id, name, character) {
  return axios({
    method: 'post',
    url: `/api/v1/games/${id}/characters`,
    headers: { 'X-Player': player },
    data: {
      name: name,
      character: character,
    },
  });
}

async function findTurnInfo(player, id) {
  return axios({
    method: 'get',
    url: `/api/v1/games/${id}/turn`,
    headers: { 'X-Player': player },
  });
}

function askQuestion(player, id, message) {
  return axios({
    method: 'post',
    url: `/api/v1/games/${id}/questions`,
    headers: { 'X-Player': player },
    data: {
      message: message,
    },
  });
}

function submitGuess(player, id, guess) {
  return axios({
    method: 'post',
    url: `/api/v1/games/${id}/guess`,
    headers: { 'X-Player': player },
    data: {
      message: guess,
    },
  });
}

function answerQuestion(player, id, question) {
  return axios({
    method: 'post',
    url: `/api/v1/games/${id}/answer`,
    headers: { 'X-Player': player },
    data: {
      message: question,
    },
  });
}

function leaveGame(player, id) {
  return axios({
    method: 'delete',
    url: `/api/v1/games/${id}/leave`,
    headers: { 'X-Player': player },
  });
}

function getPlayersInGame(player, id) {
  return axios({
    method: 'get',
    url: `/api/v1/games/${id}/players-in-game`,
    headers: { 'X-Player': player },
  });
}

function checkPlayerStatus(player) {
  return axios({
    method: 'get',
    url: `/api/v1/check`,
    headers: { 'X-Player': player },
  });
}

export {
  findGameById,
  findAvailableGames,
  createGame,
  checkPlayerStatus,
  createQuickGame,
  suggestCharacter,
  findTurnInfo,
  askQuestion,
  submitGuess,
  savePlayersOnline,
  answerQuestion,
  getAllPlayersCount,
  leaveGame,
  getPlayersInGame,
};
