import { AboutContact } from "@/components/AboutContact";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { SideNav } from "@/components/SideNav";
import { SpaceProjects } from "@/components/SpaceProjects";
import { TopBar } from "@/components/TopBar";
import { profile, xinlv, xueyin } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="shell">
      <SideNav />
      <TopBar />
      <main className="main">
        <Hero />
        <FeaturedWork project={xueyin} />
        <FeaturedWork project={xinlv} />
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
