import { navItems, profile } from "@/lib/content";

export function SideNav() {
  return (
    <aside className="side-nav" aria-label="侧边导航">
      <div className="side-nav__brand">Level Design</div>
      <ul className="side-nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>
              <span>{item.index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="side-nav__brand">{profile.name}</div>
    </aside>
  );
}
