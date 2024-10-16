import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";
import { useSimulateTransaction } from "@/hooks/useSimulateTransaction";
import Spinner from "@/components/common/spinner";
import { toast } from "sonner";
interface CurrencyConverterProps {
  isLoading: boolean;
  setPlnAmount: (amount: string) => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  isLoading,
  setPlnAmount,
}): JSX.Element => {
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [eurAmount, setEurAmount] = useState<string>("");

  const { handleSimulateTransaction } = useSimulateTransaction();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (eurAmount) {
        setIsSimulating(true);
        const transaction = await handleSimulateTransaction(
          parseFloat(eurAmount)
        );

        setPlnAmount(transaction.amountPLN.toString());
        toast.success("Transaction simulated successfully");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="eurAmount"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Amount in EUR
        </label>
        <Input
          id="eurAmount"
          type="number"
          placeholder="Enter amount in EUR"
          value={eurAmount}
          onChange={(e) => setEurAmount(e.target.value)}
          disabled={isSimulating || isLoading}
          required
          min="0"
          step="0.01"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isSimulating || isLoading}
      >
        {isSimulating ? (
          <Spinner />
        ) : (
          <>
            <ArrowRightLeft className="h-4 w-4 mr-2" />
            <span>Convert to PLN</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default CurrencyConverter;
