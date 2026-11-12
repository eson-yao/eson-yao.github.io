import { navItems, profile } from "@/lib/content";

export function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-bar__brand">
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </div>
      <nav className="top-bar__links" aria-label="页面导航">
        {navItems.map((item) => (
          <a key={item.id} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
