import React from "react";
import { Search, UserCircle } from "lucide-react";

// Navigation Component
function Navigation() {
  return (
    <header className="border-b border-gray-800/30 bg-black/20 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-12">
          <a className="text-xl font-bold" href="#">
            EQUITYELITE
          </a>
          <div className="flex items-center gap-8">
            {["Home", "Stocks", "Learn", "News"].map((item, index) => (
              <a
                key={index}
                className={
                  item === "Stocks"
                    ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                    : "text-gray-400 hover:text-white transition-colors"
                }
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <UserCircle className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

// Section Component for Stock Data and Recent News
function Section({ title, itemCount }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="space-y-4">
        {[...Array(itemCount)].map((_, i) => (
          <div
            key={i}
            className={`h-24 bg-gradient-to-br ${
              title === "Stock Data"
                ? "from-pink-600/20 to-purple-600/20"
                : "from-blue-600/20 to-purple-600/20"
            } rounded-2xl border ${
              title === "Stock Data" ? "border-pink-500/10" : "border-blue-500/10"
            } backdrop-blur-sm shadow-lg`}
          />
        ))}
      </div>
    </section>
  );
}

// Main Component
export default function Component() {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black text-white font-sans">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
        {/* Stock Data Section */}
        <div className="col-span-3">
          <Section title="Stock Data" itemCount={3} />
        </div>

        {/* Central Content Area */}
        <section className="col-span-6 relative">
          <div className="h-[600px] bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl border border-purple-500/10 backdrop-blur-sm shadow-lg overflow-hidden">
            <div className="absolute bottom-6 right-6">
              <button className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center text-2xl font-bold shadow-lg">
                +
              </button>
            </div>
          </div>
        </section>

        {/* Recent News Section */}
        <div className="col-span-3">
          <Section title="Recent News" itemCount={4} />
        </div>
      </main>
    </div>
  );
}
