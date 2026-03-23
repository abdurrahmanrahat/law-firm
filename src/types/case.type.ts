export type TCaseStudy = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  featuredImage: string;

  // detail facts
  caseDetails: {
    client: string;
    attorneyId: string;
    caseType: string;
    caseStart: string;
    executionTimeInMonths: number;
    result: "won" | "settled" | "ongoing" | "dismissed";
  };

  // main content
  description: string; // use html string
  challengeOfCase: string; // use html string
  approachToSolution: string; // use html string

  // result graph
  chartData: { label: string; value: number }[];

  // seo / utility
  isFeatured?: boolean;
  status?: "published" | "draft" | "archived";
  createdAt: string; // IOS date string
  updatedAt: string; // IOS date string
};
