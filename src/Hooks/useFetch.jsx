import React, { useEffect, useState } from "react";
import api from "../Api";

const useFetch = (initialData) => {
  const [data, setData] = useState(initialData);
  const [moreData, setMoreData] = useState([]);
  const [tempData, setTempData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTempData(data);
  }, [data]);

  async function get(url) {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get(url);
      setData(data.data);
      if (data?.data?.data && Array.isArray(data?.data?.data)) {
        setMoreData((prev) => [...prev, ...data.data.data]);
      }
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  async function patch(url, requestData) {
    try {
      setLoading(true);
      setError(null);
      const data = await api.patch(url, requestData);
      setData(data.data);
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  async function post(url, requestData) {
    try {
      setLoading(true);
      setError(null);
      const data = await api.post(url, requestData);
      setData(data);
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  return { data, tempData, error, loading, patch, get, post, moreData };
};
export default useFetch;
