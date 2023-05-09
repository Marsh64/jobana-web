import {LoginApiInstance, DefaultApiInstance} from "@/api/config";
import {UserRole} from "@/utils/UserRoles";

export const AuthApi = {
    /**
     *
     * @param {string} email
     * @param {string} password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(email, password){
        const url = '/auth/login';
        const data = {};
        data['email'] = email;
        data['password'] = password;
        return LoginApiInstance.post(url, data);
    },

    registration(email, password, firstName, lastName, birthDate, gender){
        const url = '/auth/signup'
        const data = {};
        data['email'] = email;
        data['password'] = password;
        data['firstName'] = firstName;
        data['lastName'] = lastName;
        data['birthDate'] = birthDate;
        data['gender'] = gender;
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

export const host = "http://localhost:8080/"