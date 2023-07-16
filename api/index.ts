import {create} from 'apisauce';

// формируем базовый url для api
export const api = create({
  baseURL: 'https://lzone.secret-agents.ru/api/v2',
  headers: {
    uid: 'bullet2271293@gmail.com',
    client: 'MmIK3htGD68zYVpBTSf8rA',
    'access-token': 'GXCEDK9MzKRn8SxBo4j46w',
  },
});
