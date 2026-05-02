export default function Home() {
  const faqs = [
    {
      q: "Which APIs does it monitor?",
      a: "Any API that supports webhooks or usage endpoints — OpenAI, Stripe, Twilio, AWS, and more. Set up takes under 5 minutes."
    },
    {
      q: "How does cost prediction work?",
      a: "We analyze your historical usage patterns and project them forward, factoring in growth trends to give you an accurate monthly forecast."
    },
    {
      q: "What happens when I hit a threshold?",
      a: "You get an instant alert via email or Slack so you can investigate and act before the bill arrives."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Prevent surprise API bills<br />
          <span className="text-[#58a6ff]">before they happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time usage monitoring, predictive cost forecasting, and instant alerts — so you never open a shocking invoice again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-semibold text-white mb-1">Live Usage Tracking</h3>
            <p className="text-sm text-[#8b949e]">Webhook-powered ingestion gives you up-to-the-minute API call counts and spend.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Cost Forecasting</h3>
            <p className="text-sm text-[#8b949e]">Predictive algorithms project your end-of-month bill based on current trends.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Smart Alerts</h3>
            <p className="text-sm text-[#8b949e]">Set custom thresholds and get notified via email or Slack before costs spiral.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited API integrations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time usage dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Monthly cost predictions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; Slack alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day usage history</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} API Cost Shock Preventer. All rights reserved.
      </footer>
    </main>
  );
}
