import axios from 'axios'

const BASEURL = "https://jsonplaceholder.typicode.com/users";

class UserService{


    getUsers(){
        console.log('service')
      return    axios.get(BASEURL);
    }



}
const USERSERVICE = new UserService();
export default USERSERVICE;