import { profile, skills } from "@/lib/content";

export function AboutContact() {
  return (
    <>
      <section className="section" id="about">
        <div className="section__head">
          <div>
            <p className="section__index">05 / ABOUT</p>
            <h2>关于我</h2>
          </div>
        </div>
        <div className="about-panel">
          <div className="about">
            <p>
              北京林业大学风景园林硕士（2023–2026），沈阳建筑大学风景园林学士（2017–2021）。硕士阶段学习空间规划、古典园林和项目管理，2023
              年获学业一等奖学金。
            </p>
            <p>
              曾在上海市政工程设计研究总院、北京博雅方略、清华同衡规划设计研究院做景观设计，负责场地分析、动线、模型和多方协调。长期游玩动作、开放世界和射击游戏，习惯从动线、战斗空间和节奏拆关卡。
            </p>
          </div>
          <div>
            <p className="section__index">TOOLS</p>
            <ul className="skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__head">
          <div>
            <p className="section__index">06 / CONTACT</p>
            <h2>联系与简历</h2>
          </div>
          <p className="section__lead">欢迎沟通关卡策划相关机会。</p>
        </div>
        <div className="contact">
          <div className="contact__row">
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href="/files/resume.pdf" target="_blank" rel="noopener">
              下载简历 PDF
            </a>
            <a
              className="btn"
              href="/files/xueyin-level-design.pdf"
              target="_blank"
              rel="noopener"
            >
              《雪隐》关卡介绍
            </a>
            <a
              className="btn"
              href="/files/xinlv-level-design.pdf"
              target="_blank"
              rel="noopener"
            >
              《“新律”》关卡介绍
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
