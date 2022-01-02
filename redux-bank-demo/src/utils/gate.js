import Axios from 'axios';

export default class Gate{
    constructor(){
        this.BaseUrl = 'http://localhost:8080/';
    }

    get(destenation, data){
        return Axios.get(`${this.BaseUrl + destenation}?data=${JSON.stringify(data)}`);
    }
}