import axios from 'axios';


let api = axios.create({
    baseURL:'http://swapi.dev/api/planets/',
  
    
});


export default api;