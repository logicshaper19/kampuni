'use client';

import { useState } from 'react';
import { FileText, Calendar, History, Users, Building2, LinkIcon } from 'lucide-react';

export default function CompanyTabs({ company }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      <div className="mb-8">
        <nav className="flex space-x-4 border-b border-gray-200">
          {['Overview', 'Financials', 'Changes', 'Related Entities', 'Observations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === tab.toLowerCase()
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Nominal Share Capital</p>
                  <p className="text-gray-600">KES 100,000.00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Shares Issued</p>
                  <p className="text-gray-600">100 Ordinary Shares (KES 1,000.00 each)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Date of Registration</p>
                  <p className="text-gray-600">31st March 2014</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Registered Office</p>
                  <p className="text-gray-600">Shirika Co-op House, Kipande Road, Nairobi</p>
                </div>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Postal Address</p>
                  <p className="text-gray-600">P.O. Box 2004 City Square, Nairobi</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'financials' && company.financials.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Financial Results (Last 3 Years)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue (KES)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit (KES)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {company.financials.map((data) => (
                  <tr key={data.year}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.profit.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'changes' && company.changes.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Company Changes</h2>
          <ul className="space-y-4">
            {company.changes.map((change, index) => (
              <li key={index} className="flex items-start">
                <History className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">{new Date(change.date).toLocaleDateString()}</p>
                  <p className="text-gray-600">{change.change}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'related entities' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Related Entities</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-gray-500 mr-2" />
                <span className="font-medium">Priority Mobile Limited</span>
              </div>
              <LinkIcon className="h-6 w-6 text-gray-500" />
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-gray-500 mr-2" />
                <span className="font-medium">Priority Health Limited</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              Common Link: <strong>Elisha Liyai Sore</strong> is a director and shareholder in both companies.
            </p>
            <p className="text-gray-600">
              Primary Differences:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Different business location and registered address</li>
              <li>Larger shareholding stake by Elisha Sore in Priority Health</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'observations' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Key Observations</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Users className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Small Shareholding Structure</p>
                <p className="text-gray-600">Priority Mobile has a simplified structure with only two directors/shareholders and limited share distribution.</p>
              </div>
            </li>
            <li className="flex items-start">
              <Building2 className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Corporate Responsibility</p>
                <p className="text-gray-600">The company has a nominal share capital but lacks detailed contact information and local specifics, possibly indicating it may have a narrower operational footprint or limited physical presence.</p>
              </div>
            </li>
            <li className="flex items-start">
              <LinkIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Shared Stakeholder</p>
                <p className="text-gray-600">Elisha Liyai Sore is a central figure who connects Priority Mobile to Priority Health, suggesting a network of companies under similar ownership or interests.</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}