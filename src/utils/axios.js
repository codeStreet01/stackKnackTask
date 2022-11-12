import axios from "axios";

const instance = axios.create({
   //baseURL:'https://infinite-plains-80877.herokuapp.com/'
   baseURL:'https://dummyjson.com/'
    //  baseURL:'https://calm-oasis-79532.herokuapp.com/'
        //  baseURL:'https://infinite-plains-80877.herokuapp.com/'

})

export default instance