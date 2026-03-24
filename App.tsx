import React, { useState } from 'react';
import { Hero } from './components/Hero';

const AgeGate: React.FC<{ onVerify: (isOver21: boolean) => void }> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="bg-[#1a1c26] p-8 rounded-2xl border border-white/5 max-w-md w-full shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Altersverifikation</h2>
        <p className="text-slate-300 mb-8 text-lg">Bist du älter als 21 Jahre?</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onVerify(true)}
            className="w-full bg-brand text-black font-bold py-3 rounded-xl hover:bg-brand-hover transition-colors text-lg shadow-glow active:scale-95 transform duration-100"
          >
            Ja, ich bin älter als 21
          </button>
          <button
            onClick={() => onVerify(false)}
            className="w-full bg-white/5 text-slate-400 font-bold py-3 rounded-xl hover:bg-white/10 transition-colors active:scale-95 transform duration-100"
          >
            Nein, ich bin jünger als 21
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (isOver21: boolean) => {
    // Always show the landing page regardless of answer
    setIsVerified(true);
    window.scrollTo(0, 0);
  };

  if (!isVerified) {
    return <AgeGate onVerify={handleVerification} />;
  }

  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] font-sans antialiased selection:bg-brand selection:text-white overflow-x-hidden">
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
