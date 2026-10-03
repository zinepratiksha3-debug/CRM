import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  department?: string;
  status?: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:8090/api/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Users
        </h1>

        <p className="text-sm text-gray-500">
          Manage registered users
        </p>
      </div>

      {/* Search */}
      <div className="mb-5 rounded-xl bg-white p-4 shadow-sm">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">

        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading users...
          </div>
        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="border-b bg-gray-50">

                <tr>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    User
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y">

                {filteredUsers.map((user) => (

                  <tr
                    key={user._id}
                    className="hover:bg-gray-50"
                  >

                    {/* Name */}
                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>

                        <span className="font-medium text-gray-800">
                          {user.name}
                        </span>

                      </div>

                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.phone || "-"}
                    </td>

                    {/* Role */}
                    <td className="px-6 py-4">

                      <span className="rounded-md bg-gray-100 px-3 py-1 text-xs">
                        {user.role || "User"}
                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          user.status === "Inactive"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {user.status || "Active"}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredUsers.length === 0 && (
              <div className="p-10 text-center text-gray-500">
                No users found
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default Users;