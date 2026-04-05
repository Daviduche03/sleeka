import React from 'react';
import { Link } from 'react-router-dom';

export const HowWeWork: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-geko-dark">
            HOW WE WORK
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            We help growing businesses build creative capacity through flexible, outcome driven solutions that power visibility, authority, and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1: Creative Infrastructure */}
          <Link to="/creative-infrastructure?package=growth" className="group block">
            <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
              {/* Image Section */}
              <div className="w-full">
                <img 
                  src="/assets/creative-infrastructure.png" 
                  alt="Creative Infrastructure"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Purple Content Section */}
              <div className="bg-[#5c0386] p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase">
                  CREATIVE<br/>INFRASTRUCTURE
                </h3>

                <p className="text-white/90 text-base leading-relaxed mb-6">
                  Your full creative department on a flexible monthly subscription, delivering design, video, and animation systems that fuel marketing campaigns and brand growth.
                </p>

                <p className="text-white/90 text-base leading-relaxed mb-8">
                  Perfect for startups and growing businesses that need consistent, high quality creative output without the cost or complexity of building an in house team.
                </p>

                <button className="px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105 duration-300 w-full md:w-auto" style={{ backgroundColor: '#47ff01', color: '#000' }}>
                  Learn More!
                </button>
              </div>
            </div>
          </Link>

          {/* Card 2: Creative Talent Outsourcing */}
          <div className="opacity-75">
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              {/* Image Section */}
              <div className="w-full">
                <img 
                  src="/assets/creative-talent-outsourcing.png" 
                  alt="Creative Talent Outsourcing"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Purple Content Section */}
              <div className="bg-[#5c0386] p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase">
                  CREATIVE TALENT<br/>OUTSOURCING
                </h3>

                <p className="text-white/90 text-base leading-relaxed mb-6">
                  Scale faster with vetted, multi skilled creative professionals trained in graphics design, animation, and video production, all in one.
                </p>

                <p className="text-white/90 text-base leading-relaxed mb-8">
                  Our talents combine technical expertise, AI enabled workflows, and soft skills, integrating seamlessly with your team to execute work efficiently and effectively.
                </p>

                <button disabled className="px-8 py-3 rounded-full font-bold text-base transition-all duration-300 w-full md:w-auto cursor-not-allowed opacity-60" style={{ backgroundColor: '#47ff01', color: '#000' }}>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};