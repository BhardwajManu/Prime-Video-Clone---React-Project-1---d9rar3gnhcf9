import React, { useState } from 'react'
import api from '../Api';


const useFetch = (initialData) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    async function get(url) {
        try {
            setLoading(true)
            setError(null)

            const data = await api.get(url)
            // console.log(data);
            setData(data.data);
        } catch (error) {
            setError(error)
            console.log("Error fetching data:", error);
        }
        finally {
            setLoading(false)
        }
    }




    async function patch(url, requestData) {
        try {
            setLoading(true)
            setError(null)
            const data = await api.patch(url, requestData)

            console.log(data);
            setData(data.data);
        } catch (error) {
            setError(error)
            console.log("Error fetching data:", error);
        }
        finally {
            setLoading(false)
        }
    }



    async function post(url, requestData) {
        try {
            setLoading(true)
            setError(null)
            const data = await api.post(url, requestData)
            console.log(data);
            setData(data);
        } catch (error) {
            setError(error)
            console.log("Error fetching data:", error);

        }
        finally {
            setLoading(false)
        }
    }


    return { data, error, loading, patch, get, post }

}

export default useFetch