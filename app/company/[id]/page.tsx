import CompanyTabs from '@/components/CompanyTabs';

// Mock data for companies
const companies = [
  {
    id: "priority-mobile",
    name: "Priority Mobile Limited",
    number: "CPR/2014/137614",
    industry: "Mobile/Telecommunications Services (Inferred)",
    financials: [
      { year: 2022, revenue: 1500000, profit: 300000 },
      { year: 2021, revenue: 1200000, profit: 240000 },
      { year: 2020, revenue: 1000000, profit: 180000 },
    ],
    changes: [
      { date: '2022-06-15', change: 'Increased share capital from KES 100,000 to KES 500,000' },
      { date: '2021-03-01', change: 'Added new director: Jane Doe' },
      { date: '2020-11-20', change: 'Changed registered office address' },
    ]
  },
  {
    id: "priority-health",
    name: "Priority Health Limited",
    number: "CPR/2014/150426",
    industry: "Healthcare Services (Inferred)",
    financials: [],
    changes: [],
  },
];

// This function is required to generate the static paths during build
export async function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export default function CompanyDetailsPage({ params }: { params: { id: string } }) {
  const company = companies.find((c) => c.id === params.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
            <p className="text-gray-600 mb-4">Company Number: {company.number}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{company.industry}</span>
            </div>
          </div>

          <CompanyTabs company={company} />
        </div>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-600">&copy; 2023 Kampuni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}