import { ShoppingCart, Shield, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">PH</div>
            <span className="font-semibold text-gray-900 text-lg tracking-tight">PharmaHealth</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-gray-700 hover:text-green-700 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-700 transition-colors">Products</a>
            <a href="#blog" className="text-gray-700 hover:text-green-700 transition-colors">Blog</a>
            <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQs</a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700"
            >
              <Phone className="h-4 w-4" /> Support
            </a>
            <button className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <ShoppingCart className="h-4 w-4" /> Order Now
            </button>
            <span className="hidden md:inline-flex items-center gap-1 text-xs text-gray-500">
              <Shield className="h-3.5 w-3.5 text-green-600" /> Secure
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
