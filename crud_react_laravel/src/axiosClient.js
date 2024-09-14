import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const response = error.response; // Mendapatkan response dari error
        if (response) {
            // Jika response ada, cek status
            if (response.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
        } else {
            console.error("Error object does not have response: ", error);
        }
        throw error; // Tetap lempar error agar bisa ditangani lebih lanjut
    }
);

export default axiosClient;
