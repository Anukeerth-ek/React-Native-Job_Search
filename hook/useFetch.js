import { useState, useEffect } from "react";
import axios from "axios";




const useFetch = (endpoint, query) => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);

     const axios = require("axios");

     const options = {
          method: "GET",
          url: `https://jsearch.p.rapidapi.com/${endpoint}`,
          params: {...rapidApiKey},
          headers: {
               "X-RapidAPI-Key": 'f19b8ca4e4msh21731cb0b4b6ba1p18a59djsnf28748692450',
               "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },}

          const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.request(options);
                setData(response.data.data)
            }catch(error) {
                setError(error);
                alert("There is an error")
            }finally {
                setIsLoading(false)
            }
          }
     

     useEffect(()=> {
        fetchData()
     }, [])

     const refetch = ()=> {
        setIsLoading(true)
        fetchData();
     }

     return {data, isLoading, error, refetch}
};

export default useFetch;
