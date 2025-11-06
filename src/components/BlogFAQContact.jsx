import { Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to Build a Smart Supplement Stack',
    excerpt: 'Learn how to combine vitamins and minerals safely for maximum benefit.',
  },
  {
    id: 2,
    title: 'Allergy Season Survival Guide',
    excerpt: 'Top tips to stay symptom-free during peak pollen months.',
  },
  {
    id: 3,
    title: 'Telepharmacy: What to Expect',
    excerpt: 'Your questions answered about consulting a pharmacist online.',
  },
];

const faqs = [
  { q: 'Do you accept returns?', a: 'Unopened items can be returned within 30 days. Please contact support for an RMA.' },
  { q: 'How fast is delivery?', a: 'Standard delivery takes 2-4 days. Express options are available at checkout.' },
  { q: 'Is my payment secure?', a: 'Yes. We use SSL and trusted processors to protect your data.' },
];

export default function BlogFAQContact() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">From the Blog</h2>
            <p className="text-gray-600 mt-1">Insights, tips, and updates from our pharmacy team.</p>
          </div>
          <a href="#" className="text-green-700 hover:text-green-800 font-medium">Read more</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-green-700 mt-4 text-sm font-medium">Learn more</a>
            </article>
          ))}
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900">{f.q}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security and Compliance badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-700">SSL protected checkout</p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-700">Live chat support</p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
            <MapPin className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-700">Find nearby branches</p>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
            <form className="mt-4 grid grid-cols-1 gap-4">
              <input type="text" placeholder="Full name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="email" placeholder="Email address" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <textarea placeholder="How can we help?" rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white font-semibold hover:bg-green-700">
                <Mail className="h-4 w-4" /> Send message
              </button>
            </form>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Our locations</h3>
            <p className="text-sm text-gray-600 mt-2">Visit one of our branches or order online for fast delivery.</p>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p><span className="font-medium">Downtown:</span> 123 Health Ave, Springfield</p>
              <p><span className="font-medium">Uptown:</span> 456 Wellness St, Springfield</p>
              <p><span className="font-medium">Eastside:</span> 789 Care Blvd, Springfield</p>
            </div>
            <div className="mt-4 aspect-video rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097056!2d144.95373531531596!3d-37.81627974202132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1611818497998!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
