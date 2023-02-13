import axios from "axios";
const TOKEN = "cfk99thr01qvg1mctmr0cfk99thr01qvg1mctmrg"


export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})

