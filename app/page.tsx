import { AboutContact } from "@/components/AboutContact";
import { FeaturedWork } from "@/components/FeaturedWork";
import { GameExperience } from "@/components/GameExperience";
import { Hero } from "@/components/Hero";
import { SideNav } from "@/components/SideNav";
import { SpaceProjects } from "@/components/SpaceProjects";
import { TopBar } from "@/components/TopBar";
import { bangbang, profile, xinlv, xueyin } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="shell">
      <SideNav />
      <TopBar />
      <main className="main">
        <Hero />
        <FeaturedWork project={bangbang} />
        <FeaturedWork project={xueyin} />
        <FeaturedWork project={xinlv} />
        <GameExperience />
        <SpaceProjects />
        <AboutContact />
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.role}
          </p>
        </footer>
      </main>
    </div>
  );
}
