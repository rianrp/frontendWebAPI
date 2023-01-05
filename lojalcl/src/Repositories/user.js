import api from "../Api"

export const repositoryUser = {

    post: async (response) => {
        console.log("RESPONSE ---- ", response)
        let loginUserAdmin = await api.post('/Auth/login', response)
        
        return loginUserAdmin;
    } 
}