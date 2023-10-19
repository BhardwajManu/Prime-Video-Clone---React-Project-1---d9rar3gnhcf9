import React, { useEffect, useState } from 'react'
import api from '../Api';
const useFetch = (initialData) => {
    const [data, setData] = useState(initialData);
    const [tempData, setTempData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log('here', data);
        setTempData(data)
    }, [data])
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
    return { data, tempData, error, loading, patch, get, post }
}
export default useFetch