import api from "../Api"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJpYW5qcyIsInJvbGUiOiJVc2VyIiwibmJmIjoxNjczMzY5MzM1LCJleHAiOjE2NzMzNzI5MzUsImlhdCI6MTY3MzM2OTMzNX0.Nh1zgClEAd_YSeDKZvqwO0jx29Mploo_OWu7qJ9W18c"
export const ProductRepository = {
    getAll: async () => {
        let loginUserAdmin = await api.get('/Product/get-all', {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        
        return loginUserAdmin;
    } 
}