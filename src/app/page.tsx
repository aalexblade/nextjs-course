import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <AddCompanyButton />
      <AddCompanyButton />
      <AddCompanyButton />
    </main>
  );
}
