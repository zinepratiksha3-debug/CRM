import API from "./api";

type EnquiryData = {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
  status?: string;
};

const enquiryService = {
  getEnquiries: async () => {
    const response = await API.get("/enquiries");

    return response.data;
  },

  getEnquiryById: async (id: string) => {
    const response = await API.get(`/enquiries/${id}`);

    return response.data;
  },

  createEnquiry: async (data: EnquiryData) => {
    const response = await API.post("/enquiries", data);

    return response.data;
  },

  updateEnquiry: async (
    id: string,
    data: Partial<EnquiryData>
  ) => {
    const response = await API.put(
      `/enquiries/${id}`,
      data
    );

    return response.data;
  },

  deleteEnquiry: async (id: string) => {
    const response = await API.delete(`/enquiries/${id}`);

    return response.data;
  },
};

export default enquiryService;