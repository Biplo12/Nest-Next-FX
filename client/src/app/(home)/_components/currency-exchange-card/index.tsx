import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ExchangeRateDisplay from "./Partials/exchange-rate-display";
import CurrencyConverter from "./Partials/currency-converter";
import ConversionResult from "./Partials/conversion-result";

const CurrencyExchangeCard: React.FC = (): JSX.Element => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [plnAmount, setPlnAmount] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setExchangeRate(4.31);
      setIsLoading(false);
    };

    fetchExchangeRate();
  }, []);

  return (
    <Card className="w-full max-w-md bg-black border border-white/10">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-center">
          Currency Exchange
        </CardTitle>
        <CardDescription className="text-center">
          EUR to PLN Converter
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ExchangeRateDisplay
          isLoading={isLoading}
          exchangeRate={exchangeRate}
        />
        <CurrencyConverter
          exchangeRate={exchangeRate}
          isLoading={isLoading}
          onConvert={setPlnAmount}
        />
      </CardContent>
      {plnAmount && <ConversionResult plnAmount={plnAmount} />}
    </Card>
  );
};
export default CurrencyExchangeCard;
