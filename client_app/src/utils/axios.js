import Axios from 'axios'

const axios = Axios.create({
    baseURL:'http://localhost:8001/api/v1'
})



export default axios