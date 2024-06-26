import axios from "axios";

const fetchApi = async (endpoint) =>{
    const response = await fetch(`http://localhost/rofia/api/${endpoint}`);
    if (!response.ok) throw new Error("Unable to get the user");
    const users = await response.json();
    return users.userData;
}

export default fetchApi;
