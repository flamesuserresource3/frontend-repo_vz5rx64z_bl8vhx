import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[520px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
        <div className="bg-white/70 backdrop-blur rounded-xl p-6 shadow-lg w-full md:w-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Trusted Care, Delivered
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Your one-stop online pharmacy for wellness essentials, expert advice, and secure delivery. Explore our curated catalog and consult with licensed pharmacists.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 text-white font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Shop Products
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-green-600 px-5 py-3 text-green-700 font-semibold bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500">
              Consult a Pharmacist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
