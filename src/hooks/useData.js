import { useEffect, useState } from "react"



export function useData(url) {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   async function fetchData() {
      try {
         const response = await fetch(url)
         const data = await response.json()
         setData(data)
      } catch(error) {
         setError(true)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchData(url)
   }, [url])

   return {data, loading, error}

}