import {notFound} from "next/navigation";
import {readProject} from "@/lib/projects";
import {Breadcrumbs} from "@/ui/breadcrumbs";

export const dynamic = "force-dynamic";

type Props = {params: Promise<{slug: string}>};

export default async function ProjectPage({params}: Props) {
	const {slug} = await params;

	let project;
	try {
		project = await readProject(slug);
	} catch (e) {
		if (e instanceof Error && e.message === "404") notFound();
		throw e;
	}

	if (!project) notFound();

	return (
		<main className="px-16 py-8">
			<Breadcrumbs
				items={[
					{label: "Home", href: "/"},
					{label: "Projects", href: "/projects"},
					{label: project.title},
				]}
			/>

			<h1 className="text-4xl font-bold">{project.title}</h1>
			<p className="mt-2 text-neutral-500">{project.year}</p>
			<p className="mt-6 text-xl">{project.summary}</p>
		</main>
	);
}
