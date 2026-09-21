import {fetchProjects} from "@/lib/api";
import {ProjectSearch} from "./project-search";

export async function ProjectRows() {
	const projects = await fetchProjects();
	return <ProjectSearch projects={projects} />;
}
