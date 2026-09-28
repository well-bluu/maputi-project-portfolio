import {Breadcrumbs} from "@/app/ui/breadcrumbs";
import {Suspense} from "react";
import {RowsSkeleton, StatsSkeleton} from "./skeletons";
import {ProjectStats} from "./project-stats";
import {ProjectRows} from "./project-rows";

export default async function ProjectsPage() {
	return (
		<main className="px-16 py-8">
			<Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Projects"}]} />
			<h1 className="text-4xl font-bold">Projects</h1>

			<Suspense fallback={<StatsSkeleton />}>
				<ProjectStats />
			</Suspense>

			<Suspense fallback={<RowsSkeleton />}>
				<ProjectRows />
			</Suspense>
		</main>
	);
}
