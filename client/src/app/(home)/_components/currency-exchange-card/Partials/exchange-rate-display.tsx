import { Skeleton } from "@/components/ui/skeleton";

interface ExchangeRateDisplayProps {
  isLoading: boolean;
  exchangeRate: number | null;
}

const ExchangeRateDisplay: React.FC<ExchangeRateDisplayProps> = ({
  isLoading,
  exchangeRate,
}): JSX.Element => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-4">
        <Skeleton className="w-3/4 h-10 rounded-lg" />
      </div>
    );
  }

  if (!exchangeRate) {
    return (
      <p className="text-center text-red-500 pt-4">
        Failed to load exchange rate
      </p>
    );
  }

  return (
    <div className="text-center pt-4">
      <p className="text-3xl font-bold text-gray-300">
        1 EUR = {exchangeRate.toFixed(3)} PLN
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
