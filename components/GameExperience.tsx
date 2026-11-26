import { playCategories } from "@/lib/content";

const maxHours = Math.max(
  ...playCategories.flatMap((group) => group.entries.map((entry) => entry.hours ?? 0)),
);

/** 开方缩放：让 40h 的短条和 4500h 的长条都能看清 */
function barWidth(hours: number): string {
  const ratio = Math.sqrt(hours / maxHours);
  return `${Math.max(5, Math.round(ratio * 100))}%`;
}

export function GameExperience() {
  return (
    <section className="section" id="play">
      <div className="section__head">
        <div>
          <p className="section__index">05 / PLAY</p>
          <h2>游戏经历</h2>
        </div>
        <p className="section__lead">
          全品类累计 15,000+ 小时。下图按品类记录主要作品的投入时长——它们是我拆解机制、判断节奏和做关卡取舍的直接来源。
        </p>
      </div>

      <div className="play-chart">
        {playCategories.map((group) => (
          <section className="play-group" key={group.title} aria-label={group.title}>
            <h3 className="play-group__title">{group.title}</h3>
            <ul className="play-rows">
              {group.entries.map((entry) => (
                <li
                  className={entry.hours ? "play-row" : "play-row play-row--flat"}
                  key={entry.name}
                >
                  <span className="play-row__name">{entry.name}</span>
                  <span className="play-row__note">{entry.note ?? ""}</span>
                  <span className="play-row__track" aria-hidden="true">
                    {entry.hours ? (
                      <span className="play-row__bar" style={{ width: barWidth(entry.hours) }} />
                    ) : null}
                  </span>
                  <span className="play-row__value">{entry.label}</span>
                </li>
              ))}
            </ul>
            {group.more ? <p className="play-row__more">{group.more}</p> : null}
          </section>
        ))}
      </div>

      <p className="play-chart__note">柱长按游玩时长开方缩放，兼顾长线与短线；右侧数字为实际时长。</p>
    </section>
  );
}
