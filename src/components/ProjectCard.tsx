import type { Project } from "@/data/projects";

export function ProjectCard({ project, minimal = false }: { project: Project; minimal?: boolean }) {
  return (
    <a
      href={`/projects?active_project=${project.id}`}
      data-project-id={project.id}
      className="group block overflow-hidden rounded-3xl bg-white/60 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="aspect-[4/2.4] w-full overflow-hidden rounded-2xl bg-black/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-secondary/25 text-xs">
            {project.title}
          </div>
        )}
      </div>

      {!minimal && (
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-secondary text-lg font-semibold leading-tight">{project.title}</h3>
            <span className="text-secondary/30 shrink-0 text-sm">{project.year}</span>
          </div>
          <p className="text-secondary/55 mb-4 line-clamp-2 text-sm leading-relaxed">
            {project.overview}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech_stack.slice(0, 4).map((tech) => (
              <span key={tech.name} className="text-secondary/50 rounded-full bg-black/5 px-2.5 py-1 text-xs">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {minimal && (
        <div className="px-4 py-3">
          <span className="text-secondary text-sm font-medium">{project.title}</span>
        </div>
      )}
    </a>
  );
}
