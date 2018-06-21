import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: "https://reactprojectshahi.firebaseio.com/"
})

export default axiosInstance;