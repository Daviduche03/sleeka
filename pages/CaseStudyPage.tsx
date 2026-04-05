import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudyDetail } from '../components/CaseStudyDetail';
import { getCaseStudyById, CaseStudy } from '../data/caseStudies';

export const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (id) {
      const study = getCaseStudyById(id);
      if (study) {
        setCaseStudy(study);
      } else {
        // Redirect to home if case study not found
        navigate('/');
      }
    }
  }, [id, navigate]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#5c0386] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <CaseStudyDetail
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        tags={caseStudy.tags}
        overview={caseStudy.overview}
        problem={caseStudy.problem}
        solution={caseStudy.solution}
        results={caseStudy.results}
        image={caseStudy.image}
        businessImpact={caseStudy.businessImpact}
        additionalSections={caseStudy.additionalSections}
      />
      <Footer />
    </>
  );
};
