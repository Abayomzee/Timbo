import http from "./httpService";

// Constant
const usersApi = "/auth/sign-up";
const recoverPasswordApi = "/auth/recover-password";
const resetPasswordApi = "/auth/reset-password";
const checkEmailApi = "/auth/check-email";
const usersPatchApi = "/users";

export const newUserEmailKey = "newUserEmail";

export function checkEmail(email: any) {
  return http.post(checkEmailApi, { email });
}
export function saveNewUserEmail(email: any) {
  localStorage.setItem(newUserEmailKey, email);
}
export function register(userData: any) {
  return http.post(usersApi, userData);
}
export function update(userData: any) {
  return http.patch(usersPatchApi, userData);
}
export function recoverPassword(email: any) {
  return http.post(recoverPasswordApi, email);
}
export function resetPassword(data: any, token: any) {
  return http.post(`${resetPasswordApi}/${token}`, data);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  checkEmail,
  saveNewUserEmail,
  register,
  update,
  recoverPassword,
  resetPassword,
};
