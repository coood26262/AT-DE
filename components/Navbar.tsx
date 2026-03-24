import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Playful Rewards"
              className="h-7 w-auto"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.includes('logo.png')) {
                  img.src = '/logo.svg';
                } else {
                  img.style.display = 'none';
                  const parent = img.parentElement;
                  if (parent) {
                    parent.innerHTML = '<h1 class="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">PLAYFUL REWARDS</h1>';
                  }
                }
              }}
            />
          </div>

          {/* Navigationslinks */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              Überblick
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              So funktioniert's
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              FAQ
            </a>
          </div>

          {/* Herunterladen-Button */}
          <div>
            <a
              href="https://affiliatelink.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 transform duration-100"
            >
              Herunterladen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
