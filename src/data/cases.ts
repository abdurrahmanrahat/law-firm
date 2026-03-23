import type { TCaseStudy } from "@/types/case.type";

export const caseStudies: TCaseStudy[] = [
  {
    _id: "case-1",
    slug: "child-custody-dispute",
    title: "Child Custody Dispute Resolution",
    category: "Family Law",
    thumbnail: "/images/cases/1.jpg",
    featuredImage: "/images/cases/details/1.jpg",

    caseDetails: {
      client: "Emily Watson",
      attorneyId: "attorney-robert-fox",
      caseType: "Family Law",
      caseStart: "2023-01-10",
      executionTimeInMonths: 4,
      result: "won",
    },

    description:
      "<p>This case involved a complex custody battle requiring careful legal negotiation.</p>",
    challengeOfCase:
      "<p>The main challenge was conflicting custody claims and emotional distress.</p>",
    approachToSolution:
      "<p>We used mediation and strong legal representation to secure custody rights.</p>",

    chartData: [
      { label: "Jan", value: 20 },
      { label: "Feb", value: 40 },
      { label: "Mar", value: 70 },
      { label: "Apr", value: 90 },
    ],

    isFeatured: true,
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-2",
    slug: "personal-injury-claim",
    title: "Road Accident Injury Claim",
    category: "Personal Injury",
    thumbnail: "/images/cases/2.jpg",
    featuredImage: "/images/cases/details/2.jpg",

    caseDetails: {
      client: "Michael Brown",
      attorneyId: "attorney-jane-cooper",
      caseType: "Personal Injury",
      caseStart: "2023-02-01",
      executionTimeInMonths: 5,
      result: "settled",
    },

    description:
      "<p>A severe road accident resulted in long-term injuries.</p>",
    challengeOfCase: "<p>Insurance company denied full compensation.</p>",
    approachToSolution:
      "<p>Negotiated aggressively and gathered medical evidence.</p>",

    chartData: [
      { label: "Feb", value: 15 },
      { label: "Mar", value: 35 },
      { label: "Apr", value: 60 },
      { label: "May", value: 80 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-3",
    slug: "business-contract-dispute",
    title: "Business Contract Dispute",
    category: "Business Law",
    thumbnail: "/images/cases/3.jpg",
    featuredImage: "/images/cases/details/3.jpg",

    caseDetails: {
      client: "TechNova Ltd.",
      attorneyId: "attorney-robert-fox",
      caseType: "Business Law",
      caseStart: "2022-11-01",
      executionTimeInMonths: 6,
      result: "won",
    },

    description:
      "<p>A dispute over breach of contract between two companies.</p>",
    challengeOfCase:
      "<p>Complex legal documentation and financial loss claims.</p>",
    approachToSolution:
      "<p>Presented strong contractual evidence in court.</p>",

    chartData: [
      { label: "Nov", value: 10 },
      { label: "Dec", value: 30 },
      { label: "Jan", value: 60 },
      { label: "Feb", value: 85 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-4",
    slug: "criminal-defense-case",
    title: "Criminal Defense Case",
    category: "Criminal Law",
    thumbnail: "/images/cases/4.jpg",
    featuredImage: "/images/cases/details/4.jpg",

    caseDetails: {
      client: "Daniel Carter",
      attorneyId: "attorney-jacob-jones",
      caseType: "Criminal Law",
      caseStart: "2023-03-12",
      executionTimeInMonths: 3,
      result: "won",
    },

    description: "<p>Client accused of a serious criminal offense.</p>",
    challengeOfCase: "<p>Lack of initial evidence in favor of the client.</p>",
    approachToSolution:
      "<p>Cross-examination and evidence breakdown led to acquittal.</p>",

    chartData: [
      { label: "Mar", value: 30 },
      { label: "Apr", value: 60 },
      { label: "May", value: 95 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-5",
    slug: "education-rights-case",
    title: "Education Rights Violation",
    category: "Education Law",
    thumbnail: "/images/cases/5.jpg",
    featuredImage: "/images/cases/details/5.jpg",

    caseDetails: {
      client: "Sophia Lee",
      attorneyId: "attorney-jerome-bell",
      caseType: "Education Law",
      caseStart: "2023-04-01",
      executionTimeInMonths: 2,
      result: "won",
    },

    description: "<p>A student was denied rightful academic access.</p>",
    challengeOfCase: "<p>Institutional resistance and policy loopholes.</p>",
    approachToSolution: "<p>Filed legal action and secured reinstatement.</p>",

    chartData: [
      { label: "Apr", value: 40 },
      { label: "May", value: 80 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-6",
    slug: "real-estate-dispute",
    title: "Real Estate Ownership Dispute",
    category: "Real Estate Law",
    thumbnail: "/images/cases/6.jpg",
    featuredImage: "/images/cases/details/6.jpg",

    caseDetails: {
      client: "John Matthews",
      attorneyId: "attorney-jerome-bell",
      caseType: "Real Estate Law",
      caseStart: "2022-12-01",
      executionTimeInMonths: 7,
      result: "settled",
    },

    description: "<p>Dispute over property ownership and documentation.</p>",
    challengeOfCase: "<p>Conflicting land records and legal claims.</p>",
    approachToSolution: "<p>Resolved through settlement and verification.</p>",

    chartData: [
      { label: "Dec", value: 10 },
      { label: "Jan", value: 25 },
      { label: "Feb", value: 50 },
      { label: "Mar", value: 75 },
      { label: "Apr", value: 90 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-7",
    slug: "family-property-case",
    title: "Family Property Settlement",
    category: "Family Law",
    thumbnail: "/images/cases/7.jpg",
    featuredImage: "/images/cases/details/7.jpg",

    caseDetails: {
      client: "Olivia Harris",
      attorneyId: "attorney-jane-cooper",
      caseType: "Family Law",
      caseStart: "2023-01-15",
      executionTimeInMonths: 4,
      result: "settled",
    },

    description: "<p>Division of inherited property among family members.</p>",
    challengeOfCase: "<p>Multiple claimants with conflicting interests.</p>",
    approachToSolution: "<p>Legal mediation ensured fair distribution.</p>",

    chartData: [
      { label: "Jan", value: 25 },
      { label: "Feb", value: 45 },
      { label: "Mar", value: 65 },
      { label: "Apr", value: 85 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-8",
    slug: "startup-legal-case",
    title: "Startup Legal Compliance Case",
    category: "Business Law",
    thumbnail: "/images/cases/8.jpg",
    featuredImage: "/images/cases/details/8.jpg",

    caseDetails: {
      client: "StartUp Hub Inc.",
      attorneyId: "attorney-robert-fox",
      caseType: "Business Law",
      caseStart: "2023-05-01",
      executionTimeInMonths: 3,
      result: "ongoing",
    },

    description: "<p>Ensuring startup legal compliance and documentation.</p>",
    challengeOfCase: "<p>Multiple regulatory requirements.</p>",
    approachToSolution: "<p>Structured compliance and advisory support.</p>",

    chartData: [
      { label: "May", value: 20 },
      { label: "Jun", value: 40 },
      { label: "Jul", value: 60 },
    ],

    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    _id: "case-9",
    slug: "misc-legal-support",
    title: "General Legal Support Case",
    category: "Others",
    thumbnail: "/images/cases/9.jpg",
    featuredImage: "/images/cases/details/9.jpg",

    caseDetails: {
      client: "Various Clients",
      attorneyId: "attorney-jacob-jones",
      caseType: "Others",
      caseStart: "2023-06-01",
      executionTimeInMonths: 2,
      result: "dismissed",
    },

    description: "<p>Handled various minor legal matters.</p>",
    challengeOfCase: "<p>Multiple small-scale issues.</p>",
    approachToSolution: "<p>Provided efficient legal solutions.</p>",

    chartData: [
      { label: "Jun", value: 30 },
      { label: "Jul", value: 50 },
    ],

    status: "archived",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
