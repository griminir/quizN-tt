import axios from "axios"

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/questions")
        return response.data;
    } catch (err) {
        console.log(err)
    }
}
export default fetchData;