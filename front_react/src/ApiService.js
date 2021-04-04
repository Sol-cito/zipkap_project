import axios from "axios";

const LIST_API_BASE_URL = "http://localhost:8080/lists";

class ApiService {
  fetchLists() {
    return axios.get(LIST_API_BASE_URL);
  }

  fetchListByDealDay(dealDay) {
    return axios.get(LIST_API_BASE_URL + "/" + dealDay);
  }

//   deleteUser(userID) {
//     return axios.delete(USER_API_BASE_URL + "/" + userID);
//   }

//   addUser(user) {
//     return axios.post(USER_API_BASE_URL, user);
//   }

//   editUser(user) {
//     return axios.put(USER_API_BASE_URL + "/" + user.id, user);
//   }
}

export default new ApiService();
