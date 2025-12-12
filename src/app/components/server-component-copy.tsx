import React from 'react';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({ children }: ServerComponentCopyProps) {
  console.log('Rendering ServerComponent COPY on the server side');
 
  return (
    <div>
      <h2>Server Component COPY</h2>
      <div>{children}</div>
    </div>
  );
}
