export default function Skills() {
  const groups = [
    {
      title: "Frontend",
      items: ["React", "Vite", "JavaScript", "HTML", "CSS", "Responsive Design", "UI/UX"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "Authentication", "Server Logic"],
    },
    {
      title: "DB & Tools",
      items: ["SQLite", "Supabase", "PostgreSQL", "Git", "GitHub", "n8n"],
    },
    {
      title: "Automation",
      items: ["n8n", "Workflow Automation", "AI APIs", "Process Automation"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          Tecnologías que uso para construir productos rápidos y mantenibles.
        </p>
      </div>

      <div className="skills__grid">
        {groups.map((group) => (
          <article className="skills__card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skills__chips">
              {group.items.map((item) => (
                <span className="skills__chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}