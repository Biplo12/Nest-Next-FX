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
import useGetExchangeRate from "@/hooks/useGetExchangeRate";

const CurrencyExchangeCard: React.FC = (): JSX.Element => {
  const [plnAmount, setPlnAmount] = useState<string | null>(null);

  const { handleGetExchangeRate, exchangeRate, isLoading } =
    useGetExchangeRate();

  useEffect(() => {
    handleGetExchangeRate();
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
