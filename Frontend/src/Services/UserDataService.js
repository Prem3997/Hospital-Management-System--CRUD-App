import axios from 'axios';
const USER_API_URL="http://localhost:8080/InterMountainApplication/user"
class UserDataService{
    isValidUser(userName,password){
        console.log('Communicating Backend User Controller...')
        return axios.get(`${USER_API_URL}/${userName}/${password}/`)
    }
}
export default new UserDataService()