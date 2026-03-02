import axios from 'axios'


const api = axios.create({
    baseURL: "https://instaclone-gmpf.onrender.com/api/auth",
    withCredentials: true,
})


export async function login(username,password){
    const response = await api.post('/login',{
        username,password
    })

    return response.data
}

export async function register(username,email,bio,password) {
    const response = await api.post('/register',{
        username, email, bio, password
    })
    return response.data
}

export async function getMe() {
    const response = await api.get('/get-me')
    return response.data
}