"use client";

import CurrencyExchangeCard from "./_components/currency-exchange-card";
import React from "react";

export default function CurrencyExchangePage() {
  return (
    <div className="h-screen w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <CurrencyExchangeCard />
    </div>
  );
}
