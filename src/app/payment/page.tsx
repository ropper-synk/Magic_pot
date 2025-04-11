import Link from 'next/link';
import Image from 'next/image';

const trustedClients = [
  { name: 'Zomato', logo: '/client-logos/zomato.png' },
  { name: 'Swiggy', logo: '/client-logos/swiggy.png' },
  { name: 'Amazon', logo: '/client-logos/amazon.png' },
  { name: 'Flipkart', logo: '/client-logos/flipkart.png' },
];

const features = [
  {
    title: 'Easy Integration',
    description: 'Simple API integration with comprehensive documentation and support.',
    icon: '🔌'
  },
  {
    title: 'Secure Transactions',
    description: 'Bank-grade security with end-to-end encryption and fraud protection.',
    icon: '🔒'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track transactions, revenue, and customer behavior in real-time.',
    icon: '📊'
  }
];

export default function PaymentGateway() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">PayMagic</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link href="#solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
                <Link href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                <Link href="#developers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Developers</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Fast & Secure</span>
              <span className="block text-blue-600">Payment Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your business with our powerful payment gateway. Accept payments globally with advanced security and real-time analytics.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="#get-started" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase">Trusted by</h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustedClients.map((client) => (
                <div key={client.name} className="flex items-center justify-center">
                  <div className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to accept payments and grow your business
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Developer Friendly
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Build with our powerful APIs and SDKs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">API Documentation</h3>
              <p className="mt-4 text-gray-500">
                Comprehensive API documentation with examples and best practices.
              </p>
              <Link href="#api-docs" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-500">
                View Documentation
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">SDK Downloads</h3>
              <p className="mt-4 text-gray-500">
                Get started quickly with our SDKs for popular programming languages.
              </p>
              <Link href="#sdk-docs" className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-500">
                Download SDKs
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-sm font-semibold">Products</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Payment Gateway
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Virtual Terminal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white text-base">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-base text-center">
              © 2024 PayMagic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 