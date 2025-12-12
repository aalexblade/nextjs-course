'use client';

import React from 'react';
import ServerComponentCopy from './server-component-copy';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Rendering ClientComponent on the client side');
  return (
    <div>
      <h2>Client Component</h2>
      <div>{children}</div>
    </div>
  );
}
