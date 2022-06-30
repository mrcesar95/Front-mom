import axios from 'axios'
import { baseUrl } from './constants'


const url = `${baseUrl}/users`;

const getUser = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

export const login = ({ password, user }) => {
  const request = axios.get(url)
  return request.then(response => response.data)
    .then(users => users.filter(({ password: passwordBack, name }) => passwordBack === password && name === user))
    .then(users => users?.length > 0)
}

const create = newObject => {
  const request = axios.post(url, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${url}/${id}`, newObject)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUser, create, update };

