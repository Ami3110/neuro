import axios from "axios";

export const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export const inr = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
