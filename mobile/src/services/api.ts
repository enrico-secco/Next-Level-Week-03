import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.0.31:3333',
    /*Se esta rodando no celular físico, colocar o seu IP (está ali na lan do expo).
    Que também pode mudar quando reinicia o expo. */
});

export default api;