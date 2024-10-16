import { useState } from "react";
import request from "../lib/request";
import { ITransaction } from "../interfaces";
export const useSimulateTransaction = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSimulateTransaction = async (
    amountEUR: number
  ): Promise<ITransaction> => {
    try {
      const response = await request.post(
        "/api/currency/simulate-transaction",
        { amountEUR }
      );

      return response.data;
    } catch (error) {
      console.error("Error simulating transaction:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSimulateTransaction, isLoading };
};

export default useSimulateTransaction;
