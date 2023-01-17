
import React from 'react'


export default function Services1() {
  return (
    <section>
      <div style={{ minHeight: "100vh" }}>
        <div className="top-0 w-full h-full bg-center bg-cover" 
        style={{ backgroundImage: "url('/bg-parallax1-1.webp')" }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          <div className="relative w-full flex flex-col lg:flex-row justify-center items-center">
            <dl className="flex-grow-0  grid grid-cols-6 gap-12 text-white">
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
                </span>
                <dt className="lg:text-lg  font-bold uppercase tracking-widest">Family Law</dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Adoption & Surrogacy . Child Care Proceedings . Civil Partnerships . Divorce . Financial Settlements . Domestic Abuse . Prenuptial & Postnuptial Agreements . Separation Agreements
                </dd>
              </div>
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
                </span>
                <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
                  Employment Law
                </dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Bullying . Civil Discrimination . Constructive Dismissal . Discrimination . Equal Pay . Harassment . Redundancy Advice . Settlement Agreement . Unfair Dismissal . Wage Disputes
                </dd>
              </div>
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
                </span>
                <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
                  Criminal Law
                </dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Assault . Blackmail . Burglary . Drug Offences . False Imprisonment . Fraud . Kidnapping . Murder . Manslaughter . Robbery . Sexual Offences . Theft . Traffic Offences
                </dd>
              </div>
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                </span>
                <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
                  Commercial
                </dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Asset Management . Charity Law . Corporate Structures . Corporate Governance . Due Diligence . Private Equity . Management Buyouts & Buyins . Mergers . Acquisitions . Disposals
                </dd>
              </div>
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                </span>
                <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
                  Housing, Landlord and Tenant
                </dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Anti-Social Behaviour Injunctions . Debts . Disrepairs . Unlawful Evictions . Homelessness . Succession for Tenants . Neighbourhood Disputes . Possession Proceedings . Suspending Warrants
                </dd>
              </div>
              <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                </span>
                <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">
                  Immigration Law
                </dt>
                <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">
                  Asylum . Bail . Brexit . British Citizenship . Deportation . DLR . Entry Clearance . EUSS . Humanitarian Protection . ILR . Long Residence . Right of Abode . Visa Applications . Tier Applications
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

