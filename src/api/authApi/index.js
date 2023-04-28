import { LoginApiInstance, DefaultApiInstance} from "@/api/authApi/config";
import {UserRole} from "@/utils/UserRoles";

export const AuthApi = {
    /**
     *
     * @param {string} login
     * @param {string} password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(login, password){
        const url = '/auth';
        const data = { login, password };
        return LoginApiInstance.post(url, data);
    },

    /**
     *
     * @return {Promise<AxiosResponse<any>>}
     */
    logout(){
        const url = '/logout';
        return DefaultApiInstance.post(url);
    }
}

DefaultApiInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 401) {
            localStorage.removeItem('token');
            localStorage.setItem('userRole', UserRole.Guest);
            location.reload();
        }
        return Promise.reject(error);
    }
)