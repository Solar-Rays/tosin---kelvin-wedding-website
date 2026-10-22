import React, { useState } from 'react';
import { Gift, Heart, Copy, Check, Building2, CreditCard } from 'lucide-react';
import { NIGERIAN_BANK_ACCOUNTS } from '../data/mockData';

export const RegistrySection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAccount = (id: string, accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 3000);
  };

  return (
    <section id="registry" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">
          Gift Hub & Contributions
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
          Registry
        </h2>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
          <Gift className="w-4 h-4 text-[#58111a]" />
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
        </div>

        <p className="text-sm text-[#2a241f] font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a cash gift or contribution toward our new home, you can transfer directly to our Nigerian bank account below:
        </p>

        {/* Nigerian Bank Account Card */}
        <div className="max-w-lg mx-auto mb-12">
          {NIGERIAN_BANK_ACCOUNTS.map((account) => {
            const isCopied = copiedId === account.id;
            return (
              <div
                key={account.id}
                className="backdrop-blur-2xl bg-white/90 border border-white/90 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between text-left shadow-md hover:border-[#58111a]/60 transition-all hover:shadow-lg relative overflow-hidden"
              >
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2e0710] via-[#58111a] to-[#8c1c2e]" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#58111a] bg-[#f9ecef] px-3 py-1 rounded-full uppercase border border-[#f2d6dc]">
                      OFFICIAL WEDDING ACCOUNT
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1a1816] font-bold italic mb-1">
                    {account.bankName}
                  </h3>
                  <p className="text-xs text-[#58111a] font-semibold mb-4">
                    {account.description}
                  </p>

                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#e8dcd0] space-y-2 mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        Account Name
                      </span>
                      <p className="text-sm font-bold text-[#1a1816]">
                        {account.accountName}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#e8dcd0]">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        Account Number
                      </span>
                      <p className="font-mono text-2xl sm:text-3xl font-extrabold text-[#58111a] tracking-wider">
                        {account.accountNumber}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyAccount(account.id, account.accountNumber)}
                  className={`w-full py-3.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-xs ${
                    isCopied
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#58111a] hover:bg-[#3b0a10] text-white'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>ACCOUNT NUMBER COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY ACCOUNT NUMBER</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
