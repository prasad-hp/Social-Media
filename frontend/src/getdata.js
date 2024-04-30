import axios from "axios";

async function fetchData() {
    try {
        const response = await axios.get("/")
        const data = response.data;
    }
    catch(error){
        console.error("error fetching data")

    }
}

fetchData()

export default data;
