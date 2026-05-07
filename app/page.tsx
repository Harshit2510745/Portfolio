import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { AchievementsSection } from "@/components/sections/extras-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SectionDots } from "@/components/interactive/section-dots";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harshit Aggarwal",
    jobTitle: "Frontend Engineer • Full Stack Developer",
    url: "https://portfolio-six-lac-72.vercel.app",
    sameAs: [
      "https://github.com/Harshit2510745",
      "https://linkedin.com/in/harshit-aggarwal-2a9044382"
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Interactive UI",
      "Motion Design",
      "Frontend Engineering"
    ]
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <SectionDots />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </PageShell>
  );
}
