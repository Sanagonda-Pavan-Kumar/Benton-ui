import React from 'react';

export const MoneyCell = (cellData: any) => {
  const amount = cellData.value;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};