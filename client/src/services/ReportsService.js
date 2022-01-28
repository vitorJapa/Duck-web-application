import axios from 'axios'

export default {
  index () {
    const response = axios.get('http://localhost:5000/api/ducks_report')
    return response.data.data
  }
}
