import axios from 'axios'


const fetchData = async ()=>{
    const config = {
        method: 'GET',
        url: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    }

    const result = await axios(config)
    
    return result;
}

export default fetchData;