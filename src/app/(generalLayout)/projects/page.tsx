import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "@/components/ui/sectionTitle";
import { TGithubRepo } from "@/types";
import Link from "next/link";

const ProjectsPage = async () => {
  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return (
    <div className="pt-20 px-4 pb-8">
      <SectionTitle heading="Project Showcase"></SectionTitle>
      <p className="text-center">
        A curated collection of my web development work, built with passion and
        precision.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
        {data.length > 0 &&
          data?.map((repo: TGithubRepo, i: number) => (
            <Card key={i} className="grid grid-rows-3">
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
                <CardDescription>
                  {repo.description || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 row-span-2">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Language: {repo.language || "N/A"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Created: {new Date(repo.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
                    </p>
                    {repo.homepage ? (
                      <a
                        href={repo.homepage}
                        className="text-blue-600 text-sm underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Live Site
                      </a>
                    ) : (
                      <p>Live Site Not Available</p>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link
                    href={`/projects/${repo.name}`}
                    rel="noopener noreferrer"
                  >
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
