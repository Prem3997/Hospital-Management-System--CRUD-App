import axios from 'axios';
const USER_API_URL="http://localhost:8080/InterMountainApplication/doctor"
class UserDataService{
    addDoctor(){
        console.log('Communicating Backend Doctor Controller...')
        return axios.post(`${USER_API_URL}`)
    }
    deleteDoctor(){
        console.log('Communicating Backend Doctor Controller...')
        return axios.delete(`${USER_API_URL}`)
    }
    updateDoctor(){
        console.log('Communicating Backend Doctor Controller...')
        return axios.put(`${USER_API_URL}`)
    }
}
export default new UserDataService()