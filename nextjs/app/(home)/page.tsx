import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500">Velora</div>
          <div className="hidden md:flex gap-8 items-center text-gray-300 text-sm">
            <a href="#protocol" className="hover:text-white transition">The Protocol</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#partners" className="hover:text-white transition">Partners</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">
            Start Trading
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-400 text-sm font-medium">
            Introducing Velora
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crosschain Swaps with One-Click Trading
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold mb-6">
            Built for High-Performance Crypto Trading
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Velora is the most advanced intent-based trading protocol in DeFi. Unlock powerful features like crosschain swaps, limit orders, and real-time execution through decentralized, agent-based architecture.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">
              Start Trading Now
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-gray-400 transition">
              Explore The Protocol
            </button>
          </div>
        </div>
      </section>

      {/* About Protocol Section */}
      <section id="protocol" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">About The Protocol</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our mission is to drive DeFi participation to new heights by offering secure, intelligent and optimized trading solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Robust API for Wallets & dApps',
                desc: 'We have a public library available for smooth integration into dApp and Wallet. Our corporate customers have access to a dedicated API key for superior reliability.'
              },
              {
                title: 'Advanced Cryptocurrency Charts',
                desc: 'We integrate 160+ protocols across multiple chains on L1 and L2. Additionally, we complement open liquidity with exclusive pricing from the best market makers.'
              },
              {
                title: 'Crosschain Swaps & Crypto Bridges',
                desc: 'Our protocol is available on multiple blockchains, with crosschain trading superpowers. We currently support Ethereum, Binance Smart Chain, Avalanche, Polygon, and more.'
              },
              {
                title: 'On-Chain RFQ for Decentralized Exchanges',
                desc: 'Velora RFQ is an on-chain Request for Quotes. We aggregate real-time quotes from KYC validated and trusted market makers.'
              },
              {
                title: 'Yield Optimizer for Ethereum, Base and More',
                desc: 'We have built a solution to optimize the lending rates on lending protocols.'
              },
              {
                title: 'Secured, Audited, and Decentralized',
                desc: 'External and independent smart contract audits are an essential step to ensure our users\' security.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition">
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Statistics</h3>
          <p className="text-gray-400 mb-12">We believe that everyone should have access to open and powerful financial tools.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '30M+', label: 'Trades' },
              { value: '12', label: 'Active Blockchains' },
              { value: '170+', label: 'Integrations' },
              { value: '120B+', label: 'Total Volume' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Delta Protocol: Best Rates & Seamless Execution</h3>
          <p className="text-gray-400 mb-12">Revolutionizing token swaps with MEV protection and gasless trades</p>
          <div className="mb-12 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl border border-gray-800">
            <div className="text-gray-300 text-sm mb-4">[Trading Flow Diagram]</div>
          </div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">Elevate Your Trading with Delta</h4>
            <p className="text-gray-400 mb-4">Delta introduces a new way of trading on Velora, with improved execution, minimized MEV risks and gas costs abstraction.</p>
            <p className="text-gray-400 mb-4">By leveraging advanced infrastructure, Delta delegates your swap execution to a network of settlement agents which compete to deliver the best possible execution.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'MEV Risk Minimization', desc: 'Maximize MEV protection and enjoy greater price improvements when trading.' },
              { title: 'Gas Abstraction', desc: 'Submit trades without paying gas, thanks to agent-based execution.' },
              { title: 'Superb Price Execution', desc: 'Experience competitive prices as agents leverage advanced infrastructure.' }
            ].map((feature, i) => (
              <div key={i} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                <h5 className="font-semibold text-white mb-2">{feature.title}</h5>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          <button className="px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500/10 transition font-medium">
            Learn More
          </button>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="partners" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Ecosystem Integrations</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover some of the top DeFi apps, protocols, and tools using Velora Protocol.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Morpho', desc: 'Decentralized infrastructure for lending products.' },
              { name: 'Pendle', desc: 'Yield tokenization protocol for fixed yields.' },
              { name: 'Usual', desc: 'Decentralized stablecoin protocol USD0.' },
              { name: 'Ledger', desc: 'Hardware wallet for secure asset storage.' },
              { name: 'Aave', desc: 'Open source protocol for earning interest.' },
              { name: 'Ready', desc: 'DeFi wallet with low fees and security.' }
            ].map((app, i) => (
              <a key={i} href="#" className="p-6 bg-gray-900 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-white rounded-lg mb-4 flex items-center justify-center text-gray-900 font-bold">{app.name[0]}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition">{app.name}</h4>
                <p className="text-gray-400 text-sm">{app.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partners Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Institutional Partners</h3>
            <p className="text-gray-400">
              We built Velora with developers and financial institutions in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Asset Managers', desc: 'Add Exchange services as part of your Wealth offering.' },
              { title: 'Lenders', desc: 'Keep your users more engaged by adding Exchange functions.' },
              { title: 'Banks', desc: 'We can customize our offering to meet all your KYC needs.' },
              { title: 'Brokers / Bots', desc: 'Optimize execution costs and minimize slippage.' },
              { title: 'Market Makers', desc: 'Participate in our exclusive Velora Pools.' },
              { title: 'Custodians', desc: 'Offer easily integrated swapping token functions.' }
            ].map((partner, i) => (
              <div key={i} className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-2">{partner.title}</h4>
                <p className="text-gray-400 text-sm">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">FAQ</h3>
            <p className="text-gray-400">
              Find quick answers to the most common questions about Velora.
            </p>
          </div>
          <div className="space-y-4">
            {[
              'What is Velora?',
              'Is Velora the same as ParaSwap?',
              'Does Velora have a native token?',
              'How does Velora get the best rates?',
              'Which blockchains does Velora support?',
              'What is a crosschain swap?',
              'Can I use Velora with my existing crypto wallet?',
              'How does Velora minimize MEV risk?'
            ].map((question, i) => (
              <div key={i} className="p-4 border-b border-blue-600/50 hover:border-blue-500 transition">
                <div className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-white font-medium">{question}</h4>
                  <span className="text-blue-500">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Let's Build Together</h3>
          <p className="text-gray-400 mb-8">
            Leave us a message, and we'll reach you to explore how we can partner with your business.
          </p>
          <button className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-orange-500 font-bold mb-4">Velora</div>
              <p className="text-gray-400 text-sm">The most comprehensive protocol for Decentralized Finance using decentralized intents.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">About</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Brand Kit</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Solutions</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Trade</a></li>
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">Forum</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">X / Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm text-center">2025 Velora® All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
