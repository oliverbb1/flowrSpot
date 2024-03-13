import { API } from "../shared/api";

export const flowerService = {
  getFlowers: async () => {
    try {
      const data = await API.get("flowers");
      // console.log("API Response:", data.data.flowers);
      return data.data.flowers;
    } catch (error) {
      console.log("API Error:", error);
      // throw error; // Prosledi error dalje
    }
  },
};
