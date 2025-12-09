'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';

const CompanyFormModal = dynamic(
  () => import('./company-form-modal').then((mod) => mod.default),
  { ssr: false },
);

export default function AddCompanyButton() {
  const [show, setShotw] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShotw(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShotw(false)}
      />
    </>
  );
}
