import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Vision', href: '#vision' },
    { name: 'Founder', href: '#founder' }, 
    { name: 'Thoughts', href: '#thoughts' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#awards' },
    { name: 'Credentials', href: '#credentials'},
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-black/95 via-[#0a0a0a]/90 to-black/95 backdrop-blur-xl shadow-2xl border-b border-amber-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"
          >
            Dr. Polisetty
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml- +2 space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-[15px] tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <a
            href="#contact"
            className="hidden md:block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-amber-500/10">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold text-center shadow-md shadow-amber-500/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}