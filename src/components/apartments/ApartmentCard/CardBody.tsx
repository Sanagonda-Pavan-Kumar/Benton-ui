import React from 'react';
import type { ReactNode } from 'react';

interface CardBodyProps {
  children: ReactNode;
}

export default function CardBody({ children }: CardBodyProps) {
  return (
    <div className="mt-4">
      {children}
    </div>
  );
}