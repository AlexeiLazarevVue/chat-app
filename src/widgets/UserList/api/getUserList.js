import axios from "axios"
import { ref } from "vue"

export const getUserList = () => {
  const users = ref([])
  
  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    users.value = response.data
  }

  getUsers()
  
  return {
    users
  }
}