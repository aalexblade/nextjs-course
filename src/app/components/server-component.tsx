import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Rendering ServerComponent on the server side');
  return (
    <div>
      <h2>Server Component</h2>
      <div>{children}</div>
    </div>
  );
}
