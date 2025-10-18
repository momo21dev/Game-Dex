import { useState } from "react";

export function useApi() {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const API_KEY = import.meta.env.VITE_API_KEY
    return {BASE_URL, API_KEY}
}