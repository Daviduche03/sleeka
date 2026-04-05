import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const CreativeInfrastructure: React.FC = () => {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get('package');
  const [activePackage, setActivePackage] = useState<'growth' | 'authority' | null>(
    packageParam === 'authority' ? 'authority' : 'growth'
  );

  const togglePackage = (pkg: 'growth' | 'authority') => {
    setActivePackage(activePackage === pkg ? null : pkg);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-white">
        {/* Header Section with Light Purple Background */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 pt-32 pb-16">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            {/* Header with Illustration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#5c0386] mb-6 leading-tight">
                  CREATIVE<br/>INFRASTRUCTURE
                </h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Sleeka functions as your dedicated creative department, providing the design, video, and animation systems that help brands stay visible, build authority, and convert attention into revenue.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/assets/creative-infrastructure.png" 
                  alt="Creative Infrastructure Illustration"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content with white background */}
        <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-24">
          {/* The Problem Section */}
          <div className="mt-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Problem Most Growing Businesses Face
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Marketing today requires constant creative output including graphics, videos, campaigns, and storytelling that keep your brand visible and competitive.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              But most companies struggle with how to support this consistently.
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Freelancers</strong> are unreliable, often juggling multiple clients with inconsistent availability and delivery.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Building a full in-house creative team</strong> requires hiring designers, video editors, animators, and creative leads, a major payroll commitment.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Traditional agencies</strong> are often expensive, slow to respond, and structured around project billing rather than ongoing creative support.
              </p>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Sleeka solves this by providing businesses with a structured creative department on a flexible monthly subscription giving your marketing team reliable creative capacity without operational complexity.
            </p>
          </div>

          {/* Package Selection Buttons */}
          <div className="my-16 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => togglePackage('growth')}
              className="px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 text-white"
              style={{ backgroundColor: activePackage === 'growth' ? '#5c0386' : '#5c0386' }}
            >
              Growth Infrastructure
            </button>

            <button
              onClick={() => togglePackage('authority')}
              className="px-12 py-4 rounded-full font-bold text-lg transition-all duration-300"
              style={{ 
                backgroundColor: activePackage === 'authority' ? '#47ff01' : '#47ff01',
                color: '#000'
              }}
            >
              Authority Infrastructure
            </button>
          </div>

          {/* Growth Infrastructure Package */}
          {activePackage === 'growth' && (
            <div className="bg-[#5c0386] text-white rounded-3xl p-8 md:p-12 mb-12 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">1️⃣ Growth Infrastructure</h3>
              <p className="text-2xl font-bold text-white mb-6">₦300,000 / Month</p>

              <p className="text-base mb-6 leading-relaxed">
                For growing businesses that need consistent creative support to maintain visibility and support marketing activities.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">What This Package Delivers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Consistent brand visibility</li>
                    <li>• Professional visual communication</li>
                    <li>• Reliable creative support for ongoing marketing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Creative Support Includes</h4>
                  <p className="text-sm mb-3">
                    Your marketing team receives professionally produced creative assets such as:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Brand graphics and marketing visuals</li>
                    <li>• Short-form video editing</li>
                    <li>• Campaign visuals and promotional creatives</li>
                    <li>• Visual storytelling assets for brand communication</li>
                  </ul>
                  <p className="text-sm mt-3">
                    These assets support marketing across platforms such as Instagram and LinkedIn.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Structured Creative System</h4>
                  <p className="text-sm mb-3">
                    To maintain quality and prevent unstructured work, Sleeka operates through a content planning and task request system.
                  </p>
                  
                  <h5 className="text-lg font-bold mb-2">Monthly Creative Planning</h5>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>• Structured content calendar</li>
                    <li>• Creative direction aligned with marketing goals</li>
                    <li>• Organized campaign planning</li>
                  </ul>

                  <h5 className="text-lg font-bold mb-2">Creative Request Capacity</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• 6 creative requests per month</li>
                    <li>• 1 active task at a time</li>
                    <li>• Additional requests move into a structured queue</li>
                  </ul>
                  <p className="text-sm mt-3">
                    This ensures consistent output while maintaining high quality and predictable delivery.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Typical Delivery Time</h4>
                  <p className="text-sm mb-3">Estimated turnaround depending on task complexity:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Graphic design:</strong> 24 – 48 hours</li>
                    <li><strong>Video editing:</strong> 48 – 72 hours</li>
                    <li><strong>Motion graphics / animation:</strong> 3 – 5 working days</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Coordination & Reporting</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Dedicated Project Manager</li>
                    <li>• Monthly creative performance report</li>
                    <li>• Organized task coordination and workflow management</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm">
                    💡 <strong>Best suited for:</strong> Growing companies that need consistent creative output without building an internal design team.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Authority Infrastructure Package */}
          {activePackage === 'authority' && (
            <div className="bg-[#5c0386] text-white rounded-3xl p-8 md:p-12 mb-12 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">2️⃣ Authority Infrastructure</h3>
              <p className="text-2xl font-bold text-white mb-6">₦500,000 / Month</p>

              <p className="text-base mb-4 leading-relaxed">
                For ambitious companies that want to strengthen brand authority, execute campaigns effectively, and scale their marketing presence.
              </p>
              <p className="text-base mb-6 leading-relaxed">
                This package provides greater creative capacity, faster delivery, and strategic oversight.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">What This Package Delivers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Stronger brand authority</li>
                    <li>• Higher-impact marketing campaigns</li>
                    <li>• Faster creative execution for growth initiatives</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Premium Creative Support</h4>
                  <p className="text-sm mb-3">
                    Expanded access to Sleeka's creative capabilities including:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Advanced brand and marketing design</li>
                    <li>• High-quality short-form video production</li>
                    <li>• Motion graphics and visual storytelling</li>
                    <li>• Light animation for campaigns and brand messaging</li>
                    <li>• Creative support for product launches and promotions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Strategic Creative Direction</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Creative Director oversight</li>
                    <li>• Brand positioning guidance</li>
                    <li>• Campaign creative direction</li>
                    <li>• Messaging and creative strategy support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Enhanced Creative Request Capacity</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 20 creative requests per month</li>
                    <li>• Up to 3 active tasks at the same time</li>
                    <li>• Priority task queue for faster execution</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Priority Delivery Time</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Graphic design:</strong> Less than 12 hours</li>
                    <li><strong>Video editing:</strong> 24 – 48 hours</li>
                    <li><strong>Motion graphics / animation:</strong> 2 – 4 working days</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Strategic Coordination</h4>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• Dedicated Project Manager</li>
                    <li>• Monthly growth and creative performance report</li>
                    <li>• Strategy review sessions</li>
                    <li>• Higher revision flexibility</li>
                  </ul>
                  <p className="text-sm">
                    Your project manager ensures your creative pipeline stays organized, prioritized, and delivered efficiently, enabling your marketing team to move faster.
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm">
                    💡 <strong>Best suited for:</strong> Ambitious companies scaling their marketing presence and building brand authority.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Turn Creative Capacity Into Business Growth
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Get a dedicated creative department that delivers high-quality design, video, and animation on demand boosting visibility, authority, and revenue without building an in-house team.
            </p>
            <a
              href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-bold text-base transition-all hover:scale-105 duration-300"
              style={{ backgroundColor: '#47ff01', color: '#000' }}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
