import { create } from "zustand";
import { persist } from "zustand/middleware";
// import UserStore from "../store/authStore";
export type CRMUser = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: "admin" | "customer";
  status: "active" | "inactive";
  joinedDate: string;
};

type UserState = {
  users: CRMUser[];

  addUser: (
    user: Omit<CRMUser, "id" | "joinedDate">
  ) => void;

  deleteUser: (id: number) => void;

  updateUserStatus: (
    id: number,
    status: "active" | "inactive"
  ) => void;
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      users: [
        {
          id: 1,
          name: "Rahul Sharma",
          email: "rahul@gmail.com",
          mobile: "9876543210",
          role: "customer",
          status: "active",
          joinedDate: "20 Sep 2026",
        },
        {
          id: 2,
          name: "Sneha Patil",
          email: "sneha@gmail.com",
          mobile: "9876543211",
          role: "customer",
          status: "active",
          joinedDate: "19 Sep 2026",
        },
        {
          id: 3,
          name: "Amit Joshi",
          email: "amit@gmail.com",
          mobile: "9876543212",
          role: "customer",
          status: "inactive",
          joinedDate: "18 Sep 2026",
        },
        {
          id: 4,
          name: "Admin User",
          email: "admin@crm.com",
          mobile: "9876543213",
          role: "admin",
          status: "active",
          joinedDate: "15 Sep 2026",
        },
      ],

      addUser: (user) =>
        set((state) => ({
          users: [
            ...state.users,
            {
              ...user,
              id: Date.now(),
              joinedDate: new Date().toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              ),
            },
          ],
        })),

      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter(
            (user) => user.id !== id
          ),
        })),

      updateUserStatus: (id, status) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id
              ? { ...user, status }
              : user
          ),
        })),
    }),
    {
      name: "crm-users",
    }
  )
);

export default useUserStore;