import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft, Loader2 } from "lucide-react";

interface CurrencyConverterProps {
  exchangeRate: number | null;
  isLoading: boolean;
  onConvert: (amount: string) => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  exchangeRate,
  isLoading,
  onConvert,
}): JSX.Element => {
  const [eurAmount, setEurAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (exchangeRate && eurAmount) {
      const pln = (parseFloat(eurAmount) * exchangeRate).toFixed(2);
      onConvert(pln);
    }
    setIsSubmitting(false);
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
          required
          min="0"
          step="0.01"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting || isLoading}
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
        ) : (
          <ArrowRightLeft className="h-4 w-4 mr-2" />
        )}
        Convert to PLN
      </Button>
    </form>
  );
};

export default CurrencyConverter;
