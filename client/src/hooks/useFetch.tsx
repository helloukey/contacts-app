import { useState, useCallback } from "react";

type Props = {};
type Url = string;

export type Details = {
  id: number | string;
  firstName: string;
  lastName: string;
  phone: string;
  userId?: number;
  message?: string;
  date?: string;
  OTP?: number
}

const useFetch = (props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [singleData, setSingleData] = useState<Details>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (url: Url, options?: object) => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(url, options);
      const json = await res.json();
      if(typeof json === "object") {
        setSingleData(json);
      }
      setError("");
      setData(json);
      setLoading(false);

    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }

  }, []);

  return { data, singleData, error, loading, fetchData };
};

export default useFetch;
