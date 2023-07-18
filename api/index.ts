import {create} from 'apisauce';

// формируем базовый url для api
export const api = create({
  baseURL: 'https://lzone.secret-agents.ru/api/v2',
  headers: {
    uid: '',
    client: '',
    'access-token': '',
  },
});
