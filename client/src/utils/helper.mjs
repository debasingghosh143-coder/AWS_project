// @ts-nocheck
import axios from "axios";
import { toast } from "react-toastify";

export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const ADMINS = import.meta.env.VITE_ADMINS;
export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const fetchNotices = async () => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/get-all`);

    if (!data.success) {
      toast("Error getting data");
      return [];
    } else {
      return data.data;
    }
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    return [];
  }
};
