import axios from "axios";
import React from "react";

const AxiosClient = axios.create({
    baseURL: "http://localhost:8000/api/v1"
});

export default AxiosClient;