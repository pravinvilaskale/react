import axios from "axios";

const UserURL = "http://127.0.0.1:8089/users";

class UserService {

    getUser()
    {
        return axios.get(UserURL);
    }

}

export default new UserService