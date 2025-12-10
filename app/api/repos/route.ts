import { NextRequest, NextResponse } from "next/server";

const GITHUB_USERNAME = "AKATWIJUKA-ELIA";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const perPage = searchParams.get("per_page") || "100";
    const sort = searchParams.get("sort") || "updated";
    const featured = searchParams.get("featured") === "true";

    const url = `${GITHUB_API_URL}?per_page=${perPage}&sort=${sort}&type=owner`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add GitHub token for higher rate limits (optional)
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
      // Cache for 1 hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories from GitHub" },
        { status: response.status }
      );
    }

    const repos = await response.json();

    // Filter and transform repos
    let filteredRepos = repos.filter(
      (repo: any) => !repo.fork && !repo.archived
    );

    // If featured flag is set, only return repos with topics or stars
    if (featured) {
      filteredRepos = filteredRepos.filter(
        (repo: any) => repo.stargazers_count > 0 || repo.topics?.length > 0
      );
    }

    // Transform to a cleaner format
    const transformedRepos = filteredRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      updatedAt: repo.updated_at,
      createdAt: repo.created_at,
    }));

    return NextResponse.json({
      success: true,
      count: transformedRepos.length,
      repos: transformedRepos,
    });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}