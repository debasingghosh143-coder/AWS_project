import axios from "axios";
import { toast } from "react-toastify";

// @ts-ignore
export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchNotices = async () => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/get-all`);

    // @ts-ignore
    if (!data.success) {
      toast("Error getting data");
      return [];
    } else {
      return data.data;
    }
  } catch (error) {
    // @ts-ignore
    console.log(`ERROR: ${error.message}`);
    return [];
  }
};
