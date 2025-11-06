import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import BlogFAQContact from './components/BlogFAQContact';

export default function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <BlogFAQContact />
      </main>
      <footer className="border-t border-gray-100 py-10 mt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PharmaHealth. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-green-700">Privacy Policy</a>
            <a href="#" className="hover:text-green-700">Terms of Service</a>
            <a href="#contact" className="hover:text-green-700">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
