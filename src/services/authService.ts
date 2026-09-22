import API from "./api";
import type {
  LoginData,
  SignupData,
  ForgotPasswordData,
  ResetPasswordData,
  ChangePasswordData,
} from "../types/auth";

const authService = {
  login: async (data: LoginData) => {
    const response = await API.post("/auth/login", data);
    return response.data;
  },

  signup: async (data: SignupData) => {
    const response = await API.post("/auth/signup", data);
    return response.data;
  },

  forgotPassword: async (data: ForgotPasswordData) => {
    const response = await API.post("/auth/forgot-password", data);
    return response.data;
  },

  resetPassword: async (data: ResetPasswordData) => {
    const response = await API.post("/auth/reset-password", data);
    return response.data;
  },

  changePassword: async (data: ChangePasswordData) => {
    const response = await API.put("/auth/change-password", data);
    return response.data;
  },
};

export default authService;