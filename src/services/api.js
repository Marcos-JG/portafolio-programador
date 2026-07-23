const BASE_URL = import.meta.env.VITE_API_URL || ''

export async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return response.json()
}
