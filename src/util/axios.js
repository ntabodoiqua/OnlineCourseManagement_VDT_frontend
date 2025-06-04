import axios from './axios.customize';

const createUserApi = (username, password, firstName, lastName, email, phone, gender, dob, bio) => {
    const URL_API = "/users";
    const data = {
        username, email, password, firstName, lastName, phone, gender, dob, bio
    }

    return axios.post(URL_API, data)
}

const loginApi = (username, password) => {
    const URL_API = "/auth/token";
    const data = {
        username, password
    }

    return axios.post(URL_API, data)
}

const getUserApi = () => {
    const URL_API = "/users/myInfo";
    return axios.get(URL_API)
}

const changePasswordApi = (oldPassword, newPassword) => {
    const URL_API = "/users/change-password";
    const data = {
        oldPassword, newPassword
    }
    return axios.put(URL_API, data)
}

// Post avatar file
const updateAvatarApi = (avatar) => {
    const URL_API = "/users/avatar";
    const data = new FormData();
    data.append("file", avatar);
    return axios.post(URL_API, data)
}

// Update avatar from an existing uploaded file
const updateAvatarFromFileApi = (fileName) => {
    const URL_API = "/users/avatar/from-file";
    const data = new URLSearchParams();
    data.append("fileName", fileName);
    return axios.post(URL_API, data);
}

// Update user info
const updateUserInfoApi = (userInfo) => {
    const URL_API = "/users/update-info";
    const data = {
        firstName, lastName, phone, email, dob, bio
    }
    return axios.put(URL_API, data)
}

// User delete account
const deleteAccountApi = () => {
    const URL_API = "/users";
    return axios.delete(URL_API)
}

// User disable account
const disableAccountApi = () => {
    const URL_API = "/users/disable";
    return axios.put(URL_API)
}

// Admin get all users pageable with filter
const getAllUsersApi = (params) => {
    const URL_API = "/admin/manage-users";
    return axios.get(URL_API, { params });
}

// 

export {
    createUserApi, loginApi, getUserApi, changePasswordApi, updateAvatarApi, updateAvatarFromFileApi, updateUserInfoApi, deleteAccountApi, disableAccountApi
}