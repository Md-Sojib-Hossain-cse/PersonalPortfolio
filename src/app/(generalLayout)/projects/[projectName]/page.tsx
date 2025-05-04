import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) => {
  const { projectName } = await params;

  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${projectName}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 }, // Optional: cache revalidation
    }
  );

  if (!res.ok) {
    return (
      <div className="pt-20 text-center text-red-600">
        <h1>Failed to fetch project details.</h1>
      </div>
    );
  }

  const data = await res.json();

  return (
    <div className="pt-20 px-4 pb-8">
      <SectionTitle heading="Project Details"></SectionTitle>

      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-black border border-[#F16543] shadow-lg rounded-xl space-y-6">
        {/* Owner Info */}
        <div className="flex items-center gap-4">
          <Image
            src={data.owner.avatar_url}
            alt={data.owner.login}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {data.name}
            </h2>
            <a
              href={data.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm"
            >
              @{data.owner.login}
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300">
          {data.description || "No description available."}
        </p>

        {/* Repo Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <strong>Language:</strong> {data.language || "N/A"}
          </div>
          <div>
            <strong>Stars:</strong> {data.stargazers_count}
          </div>
          <div>
            <strong>Forks:</strong> {data.forks_count}
          </div>
          <div>
            <strong>Watchers:</strong> {data.watchers_count}
          </div>
          <div>
            <strong>Open Issues:</strong> {data.open_issues_count}
          </div>
          <div>
            <strong>Visibility:</strong> {data.visibility}
          </div>
          <div>
            <strong>Created At:</strong>{" "}
            {new Date(data.created_at).toLocaleDateString()}
          </div>
          <div>
            <strong>Last Updated:</strong>{" "}
            {new Date(data.updated_at).toLocaleDateString()}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap mt-4">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
          >
            View on GitHub
          </a>

          {data.homepage && (
            <a
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-medium"
            >
              Visit Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
