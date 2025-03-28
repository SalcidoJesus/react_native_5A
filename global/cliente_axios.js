import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const cliente_axios = axios.create({
	baseURL
});
