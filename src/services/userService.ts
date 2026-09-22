import API from "./api";

type UserData = {
  name: string;
  email: string;
  mobile: string;
  role?: "admin" | "customer";
};

const userService = {
  getUsers: async () => {
    const response = await API.get("/users");

    return response.data;
  },

  getUserById: async (id: string) => {
    const response = await API.get(`/users/${id}`);

    return response.data;
  },

  createUser: async (data: UserData) => {
    const response = await API.post("/users", data);

    return response.data;
  },

  updateUser: async (
    id: string,
    data: Partial<UserData>
  ) => {
    const response = await API.put(`/users/${id}`, data);

    return response.data;
  },

  deleteUser: async (id: string) => {
    const response = await API.delete(`/users/${id}`);

    return response.data;
  },
};

export default userService;