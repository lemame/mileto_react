import { api } from '../config/api';

export async function login(data?: object) {
  console.log(data);
  try {
    const response = await api.post('/apiv1/login', data);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
