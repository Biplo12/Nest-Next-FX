import { useState } from "react";
import request from "@/lib/request";

const useGetExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetExchangeRate = async () => {
    try {
      setIsLoading(true);
      const res = await request.get("/api/currency/exchange-rate");
      setExchangeRate(res.data?.rate || 0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleGetExchangeRate, exchangeRate, isLoading };
};

export default useGetExchangeRate;
