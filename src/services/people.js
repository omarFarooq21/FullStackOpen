import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseUrl).then(response =>
    {
      console.log("Response: ", response.data)
      return response.data
    })
   console.log(request)
   return request
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }

export default {
  getAll: getAll,
  create: create, 
  // update: update
}