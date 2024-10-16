import { Loader } from "lucide-react";
import React from "react";

const Spinner: React.FC = (): JSX.Element => {
  return <Loader className="animate-spin" />;
};
export default Spinner;
