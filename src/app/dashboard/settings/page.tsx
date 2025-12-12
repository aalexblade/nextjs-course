'uese client';
import React from 'react';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  return (
    <main>
      <h1 className="text-xl">Settings Page</h1>
    </main>
  );
}
