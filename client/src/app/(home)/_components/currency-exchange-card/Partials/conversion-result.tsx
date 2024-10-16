import { CardFooter } from "@/components/ui/card";

interface ConversionResultProps {
  plnAmount: string;
}

const ConversionResult: React.FC<ConversionResultProps> = ({
  plnAmount,
}): JSX.Element => {
  return (
    <CardFooter>
      <div className="w-full text-center">
        <p className="text-lg font-semibold">Equivalent Amount</p>
        <p className="text-3xl font-bold text-green-600">
          {parseFloat(plnAmount)?.toFixed(2) ?? 0} PLN
        </p>
      </div>
    </CardFooter>
  );
};

export default ConversionResult;
