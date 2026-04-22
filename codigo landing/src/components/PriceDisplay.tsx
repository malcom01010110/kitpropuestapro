import React from 'react';

interface PriceDisplayProps {
  amountArs: number;
  currency?: 'ARS' | 'USD';
  crossedOut?: boolean;
  className?: string;
}

export function PriceDisplay({
  amountArs,
  currency = 'ARS',
  crossedOut = false,
  className = ''
}: PriceDisplayProps) {
  const localeMap = {
    ARS: 'es-AR',
    USD: 'en-US'
  };

  const formattedAmount = new Intl.NumberFormat(localeMap[currency], {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'ARS' ? 0 : 2
  }).format(amountArs);

  return (
    <span
      className={`${className} ${crossedOut ? 'line-through opacity-70' : ''}`}>
      
      {formattedAmount}
    </span>);

}