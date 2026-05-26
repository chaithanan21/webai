const roles = [
  {
    title: "Meeting Explorer",
    description: "Kick off daily work, inspect the repository, and summarize the current state before coding starts.",
  },
  {
    title: "Business Analyst",
    description: "Turn requests into scope, user stories, acceptance criteria, and clear delivery slices.",
  },
  {
    title: "Solution Architect",
    description: "Design the implementation path, component boundaries, data flow, and technical risks.",
  },
  {
    title: "Developer Team",
    description: "Split delivery across backend, API, and frontend responsibilities with small reviewable changes.",
  },
  {
    title: "QA Engineer",
    description: "Map tests to acceptance criteria, call out risks, and assess merge readiness.",
  },
  {
    title: "GitHub DevOps",
    description: "Manage branch strategy, CI, pull requests, and deployment checklists for server delivery.",
  },
];

const workflow = [
  "Explore the repo and clarify the request.",
  "Convert the request into acceptance criteria.",
  "Plan the architecture and implementation slices.",
  "Build the backend, API, and frontend changes.",
  "Run QA checks before merge.",
  "Ship through GitHub with CI and Docker validation.",
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">WebAI Delivery Workspace</p>
        <h1>Daily AI team workflow for software projects</h1>
        <p className="lead">
          This starter app gives your repository a real Next.js project while keeping the AI planning,
          QA, and GitHub delivery process visible in one place.
        </p>
        <div className="actions">
          <a className="primaryAction" href="/api/health">
            Open health endpoint
          </a>
          <a className="secondaryAction" href="https://github.com/chaithanan21/webai">
            View repository
          </a>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Roles</p>
          <h2>AI team responsibilities</h2>
        </div>
        <div className="cardGrid">
          {roles.map((role) => (
            <article className="card" key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionAccent">
        <div className="sectionHeader">
          <p className="eyebrow">Workflow</p>
          <h2>From request to release</h2>
        </div>
        <ol className="timeline">
          {workflow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
