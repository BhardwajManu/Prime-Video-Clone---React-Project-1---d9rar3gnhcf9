import React, { useContext, useEffect, useState } from "react";
import api from "../Api";
import { useAuthContext } from "../Context/AuthContext";

const useFetch = (initialData) => {
  const [data, setData] = useState(initialData);
  const [moreData, setMoreData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuthContext();

  async function get(url) {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
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
      const data = await api.patch(url, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const data = await api.post(url, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, patch, get, post, moreData };
};
export default useFetch;
