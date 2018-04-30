import axios from 'axios'

export function fetchUrls(){
    return axios.get('http://localhost/Shortly-API/public/allurls') 
  }