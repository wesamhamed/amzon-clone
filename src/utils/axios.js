import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/amzon-clone-46b1a/us-central1/api" //The API (cloud function) URL
});

export default instance;