import type { TCaseStudy } from "@/types/case.type";

export const caseStudies: TCaseStudy[] = [
  {
    _id: "case-1",
    slug: "child-custody-dispute",
    title: "Child Custody Dispute Resolution",
    category: "Family Law",
    thumbnail: "/images/cases/1.jpg",
    caseDetails: {
      client: "Emily Watson",
      attorneyId: "01",
      caseType: "Family Law",
      caseStart: "2023-01-10",
      executionTimeInMonths: 4,
      result: "won",
    },

    description: `
<p>This case involved a highly complex child custody dispute between two parents following a prolonged separation. The situation required careful legal strategy, as both parties presented strong claims supported by emotional and financial arguments. Our legal team conducted a detailed review of family history, financial records, and child welfare reports to ensure the best possible outcome for the client.</p>

<p>Throughout the process, we maintained a client-first approach, ensuring emotional sensitivity while building a strong legal foundation. Multiple court hearings and mediation sessions were conducted, allowing both sides to present their perspectives. Our team worked diligently to highlight the client's strengths and commitment to the child's well-being.</p>

<p>Ultimately, the court recognized the stability and care provided by our client, resulting in a favorable custody arrangement. This case demonstrates our firm's ability to manage emotionally charged legal matters while maintaining professionalism and strategic focus.</p>
`,

    challengeOfCase: `
<p>The case presented several emotional and legal complexities that required careful handling and structured legal arguments.</p>
<ul>
  <li>Conflicting custody claims from both parents</li>
  <li>Emotional distress affecting decision-making</li>
  <li>Lack of clear financial documentation</li>
  <li>Child welfare concerns raised in court</li>
  <li>Pressure from extended family members</li>
</ul>
`,

    approachToSolution: `
<p>Our legal team began by gathering all necessary evidence, including financial documents, communication records, and child care reports. We then initiated mediation sessions to reduce conflict and build a cooperative approach. During court proceedings, we presented structured arguments focusing on the child’s best interests. Our strategy emphasized stability, emotional care, and long-term well-being. Over time, this approach helped establish credibility with the court, ultimately leading to a favorable judgment that secured custody rights for our client.</p>
`,

    chartData: [
      { label: "Jan", value: 20 },
      { label: "Feb", value: 40 },
      { label: "Mar", value: 70 },
      { label: "Apr", value: 90 },
    ],

    isFeatured: true,
    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-2",
    slug: "personal-injury-claim",
    title: "Road Accident Injury Claim",
    category: "Personal Injury",
    thumbnail: "/images/cases/2.jpg",
    caseDetails: {
      client: "Michael Brown",
      attorneyId: "02",
      caseType: "Personal Injury",
      caseStart: "2023-02-01",
      executionTimeInMonths: 5,
      result: "settled",
    },

    description: `
<p>This case involved a severe road accident that resulted in long-term physical injuries and financial loss for the client. The insurance company initially denied full compensation, creating additional challenges. Our legal team conducted an in-depth analysis of medical reports, accident records, and insurance policies.</p>

<p>We worked closely with medical professionals and financial experts to establish the full impact of the injury. Detailed documentation was prepared to strengthen the claim. Our team ensured that all legal requirements were met while maintaining continuous communication with the client.</p>

<p>Through persistent negotiation and legal pressure, we secured a fair settlement that covered medical expenses and financial damages. This case highlights our expertise in handling injury claims effectively.</p>
`,

    challengeOfCase: `
<p>This case required overcoming strong resistance from insurance providers and proving long-term damages.</p>
<ul>
  <li>Insurance denial of full compensation</li>
  <li>Insufficient initial evidence</li>
  <li>Complex medical documentation</li>
  <li>Delayed claim processing</li>
</ul>
`,

    approachToSolution: `
<p>We began by collecting detailed medical reports and consulting specialists to validate the client’s condition. Our team reconstructed the accident timeline using evidence and witness statements. Negotiations with the insurance company were conducted strategically, applying legal pressure when necessary. By presenting strong documentation and consistent arguments, we established the legitimacy of the claim. This systematic approach resulted in a successful settlement that ensured financial stability for the client and covered all essential damages.</p>
`,

    chartData: [
      { label: "Feb", value: 15 },
      { label: "Mar", value: 35 },
      { label: "Apr", value: 60 },
      { label: "May", value: 80 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-3",
    slug: "business-contract-dispute",
    title: "Business Contract Dispute",
    category: "Business Law",
    thumbnail: "/images/cases/3.jpg",
    caseDetails: {
      client: "TechNova Ltd.",
      attorneyId: "03",
      caseType: "Business Law",
      caseStart: "2022-11-01",
      executionTimeInMonths: 6,
      result: "won",
    },

    description: `
<p>This case involved a major contract dispute between two corporate entities. The disagreement arose from breach of contract terms, leading to financial losses and operational disruption. Our legal team carefully reviewed all agreements and communications between the parties.</p>

<p>We conducted a thorough investigation to identify key violations and supporting evidence. Financial records and internal documents were analyzed to establish the impact of the breach. Our strategy focused on building a strong legal argument supported by factual data.</p>

<p>The case was presented in court with clarity and precision, leading to a successful judgment in favor of our client. This case demonstrates our capability in handling complex corporate disputes.</p>
`,

    challengeOfCase: `
<p>The case involved multiple legal and financial complexities requiring detailed documentation.</p>
<ul>
  <li>Complex contractual clauses</li>
  <li>High financial stakes</li>
  <li>Conflicting interpretations of agreement</li>
  <li>Extensive documentation review</li>
</ul>
`,

    approachToSolution: `
<p>We started by analyzing the contract in detail and identifying key areas of breach. Our team gathered supporting financial documents and internal communications. We prepared a structured legal argument supported by evidence and expert insights. During court proceedings, we presented our case clearly, focusing on factual inconsistencies and contractual obligations. This strategic approach strengthened our position and resulted in a favorable outcome for the client.</p>
`,

    chartData: [
      { label: "Nov", value: 10 },
      { label: "Dec", value: 30 },
      { label: "Jan", value: 60 },
      { label: "Feb", value: 85 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-4",
    slug: "criminal-defense-case",
    title: "Criminal Defense Case",
    category: "Criminal Law",
    thumbnail: "/images/cases/4.jpg",
    caseDetails: {
      client: "Daniel Carter",
      attorneyId: "04",
      caseType: "Criminal Law",
      caseStart: "2023-03-12",
      executionTimeInMonths: 3,
      result: "won",
    },

    description: `
<p>This case involved defending a client accused of a serious criminal offense. The situation required immediate legal action and a strong defense strategy. Our team conducted a detailed investigation into the circumstances surrounding the case.</p>

<p>We carefully reviewed evidence, witness statements, and procedural details. Our focus was on identifying inconsistencies and ensuring that the client’s rights were protected throughout the process.</p>

<p>The case concluded successfully with the client being acquitted. This highlights our strength in criminal defense and courtroom advocacy.</p>
`,

    challengeOfCase: `
<p>The case required handling sensitive evidence and strong opposition from prosecution.</p>
<ul>
  <li>Limited initial evidence</li>
  <li>Strong prosecution arguments</li>
  <li>Time-sensitive proceedings</li>
  <li>Witness credibility issues</li>
</ul>
`,

    approachToSolution: `
<p>We began by reviewing all available evidence and identifying inconsistencies in the prosecution’s claims. Our legal team conducted independent investigations and gathered additional proof to support the client’s position. During the trial, we focused on cross-examination and logical argumentation. This approach exposed weaknesses in the case against our client, ultimately leading to a successful defense and acquittal.</p>
`,

    chartData: [
      { label: "Mar", value: 30 },
      { label: "Apr", value: 60 },
      { label: "May", value: 95 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },
  {
    _id: "case-5",
    slug: "education-rights-case",
    title: "Education Rights Violation",
    category: "Education Law",
    thumbnail: "/images/cases/5.jpg",
    caseDetails: {
      client: "Sophia Lee",
      attorneyId: "01",
      caseType: "Education Law",
      caseStart: "2023-04-01",
      executionTimeInMonths: 2,
      result: "won",
    },

    description: `
<p>This case involved a student who was unjustly denied access to academic opportunities due to administrative errors and policy misinterpretation. The situation escalated quickly, affecting the student’s academic progress and future prospects. Our legal team stepped in to assess institutional policies and identify inconsistencies that violated the student’s rights.</p>

<p>We conducted a detailed review of academic regulations, internal communication, and documentation provided by the institution. By gathering strong evidence and expert opinions, we built a compelling case to challenge the decision. Our approach ensured that the client's academic interests were protected at every stage.</p>

<p>The case was resolved efficiently, resulting in the student’s reinstatement and restoration of academic privileges. This case highlights our firm’s ability to handle education law matters with precision and urgency.</p>
`,

    challengeOfCase: `
<p>The case required navigating institutional resistance and unclear academic policies.</p>
<ul>
  <li>Ambiguous institutional regulations</li>
  <li>Administrative delays in response</li>
  <li>Lack of proper documentation</li>
  <li>Resistance from academic authorities</li>
  <li>Time-sensitive academic deadlines</li>
</ul>
`,

    approachToSolution: `
<p>We began by analyzing institutional policies and identifying legal inconsistencies. Our team gathered documentation and expert insights to support the student’s claim. We initiated formal communication with the institution and escalated the issue legally when necessary. By presenting a structured argument backed by evidence, we demonstrated the violation of academic rights. This strategic approach resulted in a quick resolution, ensuring the student could resume education without further delay.</p>
`,

    chartData: [
      { label: "Apr", value: 40 },
      { label: "May", value: 80 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-6",
    slug: "real-estate-dispute",
    title: "Real Estate Ownership Dispute",
    category: "Real Estate Law",
    thumbnail: "/images/cases/6.jpg",
    caseDetails: {
      client: "John Matthews",
      attorneyId: "02",
      caseType: "Real Estate Law",
      caseStart: "2022-12-01",
      executionTimeInMonths: 7,
      result: "settled",
    },

    description: `
<p>This case involved a complex real estate ownership dispute between multiple parties claiming rights over a high-value property. The conflict arose due to discrepancies in documentation and historical ownership records. Our legal team conducted a comprehensive investigation to verify all claims.</p>

<p>We analyzed land records, legal documents, and transaction history to identify inconsistencies. The process required coordination with local authorities and expert consultation. Our goal was to establish a clear ownership structure while minimizing conflict between parties.</p>

<p>Through strategic negotiation and legal intervention, the dispute was resolved through settlement. This case demonstrates our expertise in handling property-related legal matters efficiently.</p>
`,

    challengeOfCase: `
<p>The dispute involved multiple claimants and conflicting property records.</p>
<ul>
  <li>Conflicting land ownership documents</li>
  <li>Multiple legal claimants</li>
  <li>Incomplete historical records</li>
  <li>Verification delays from authorities</li>
  <li>High financial stakes</li>
</ul>
`,

    approachToSolution: `
<p>Our team began by verifying all available property documents and identifying discrepancies. We worked closely with authorities to validate records and establish a clear ownership timeline. Negotiation sessions were conducted to reduce conflict and reach mutual agreement. By presenting factual evidence and legal clarity, we guided all parties toward a fair settlement. This structured approach ensured a smooth resolution without prolonged litigation.</p>
`,

    chartData: [
      { label: "Dec", value: 10 },
      { label: "Jan", value: 25 },
      { label: "Feb", value: 50 },
      { label: "Mar", value: 75 },
      { label: "Apr", value: 90 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },
  {
    _id: "case-7",
    slug: "family-property-case",
    title: "Family Property Settlement",
    category: "Family Law",
    thumbnail: "/images/cases/7.jpg",
    caseDetails: {
      client: "Olivia Harris",
      attorneyId: "03",
      caseType: "Family Law",
      caseStart: "2023-01-15",
      executionTimeInMonths: 4,
      result: "settled",
    },

    description: `
<p>This case involved the division of inherited property among multiple family members. Disagreements over ownership shares and emotional tensions complicated the situation. Our legal team worked to establish a fair and legally sound solution.</p>

<p>We reviewed all inheritance documents and legal claims, ensuring that each party’s rights were properly evaluated. Mediation sessions were conducted to reduce conflict and promote cooperation among family members.</p>

<p>The case was resolved through mutual agreement, resulting in fair property distribution. This case highlights our ability to handle sensitive family disputes effectively.</p>
`,

    challengeOfCase: `
<p>The case involved emotional conflicts and multiple ownership claims.</p>
<ul>
  <li>Disputes over inheritance shares</li>
  <li>Emotional family conflicts</li>
  <li>Lack of clear documentation</li>
  <li>Conflicting legal claims</li>
  <li>Delays in agreement</li>
</ul>
`,

    approachToSolution: `
<p>We began by reviewing all inheritance documents and identifying valid claims. Mediation sessions were arranged to facilitate communication between family members. Our legal team ensured transparency and fairness throughout the process. By combining legal guidance with structured negotiation, we helped all parties reach an agreement. This approach minimized conflict and ensured a legally binding and fair settlement for everyone involved.</p>
`,

    chartData: [
      { label: "Jan", value: 25 },
      { label: "Feb", value: 45 },
      { label: "Mar", value: 65 },
      { label: "Apr", value: 85 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-8",
    slug: "startup-legal-case",
    title: "Startup Legal Compliance Case",
    category: "Business Law",
    thumbnail: "/images/cases/8.jpg",
    caseDetails: {
      client: "StartUp Hub Inc.",
      attorneyId: "03",
      caseType: "Business Law",
      caseStart: "2023-05-01",
      executionTimeInMonths: 3,
      result: "ongoing",
    },

    description: `
<p>This case involved providing legal compliance support to a growing startup facing regulatory challenges. The company required structured legal guidance to ensure compliance with business laws and avoid future risks.</p>

<p>Our team conducted a thorough assessment of the startup’s operations, contracts, and regulatory requirements. We identified key areas that needed improvement and developed a compliance roadmap.</p>

<p>With continuous legal support, the startup achieved stability and reduced legal risks. This case reflects our ability to guide businesses through complex regulatory environments.</p>
`,

    challengeOfCase: `
<p>The case required managing multiple compliance requirements and tight deadlines.</p>
<ul>
  <li>Complex regulatory framework</li>
  <li>Incomplete legal documentation</li>
  <li>Time-sensitive compliance deadlines</li>
  <li>Limited internal legal knowledge</li>
  <li>Risk of legal penalties</li>
</ul>
`,

    approachToSolution: `
<p>We began by auditing all business operations and identifying compliance gaps. Our legal team created a structured roadmap to address each issue systematically. We assisted in updating contracts, policies, and documentation to meet legal standards. Regular monitoring ensured ongoing compliance. This proactive approach helped the startup build a strong legal foundation and avoid potential risks.</p>
`,

    chartData: [
      { label: "May", value: 20 },
      { label: "Jun", value: 40 },
      { label: "Jul", value: 60 },
    ],

    status: "published",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },

  {
    _id: "case-9",
    slug: "general-legal-support",
    title: "General Legal Support Case",
    category: "Others",
    thumbnail: "/images/cases/9.jpg",
    caseDetails: {
      client: "Various Clients",
      attorneyId: "04",
      caseType: "Others",
      caseStart: "2023-06-01",
      executionTimeInMonths: 2,
      result: "dismissed",
    },

    description: `
<p>This case involved providing legal assistance across multiple minor cases for different clients. Each case presented unique challenges, requiring flexible legal strategies and quick resolution.</p>

<p>Our team handled documentation, consultations, and legal filings efficiently. By maintaining clear communication with clients, we ensured that each issue was addressed properly.</p>

<p>Although some cases were dismissed due to lack of evidence, clients received proper legal guidance and support. This demonstrates our commitment to providing reliable legal services.</p>
`,

    challengeOfCase: `
<p>The case required managing multiple small-scale issues simultaneously.</p>
<ul>
  <li>Varied legal issues</li>
  <li>Limited case evidence</li>
  <li>Time constraints</li>
  <li>Multiple client coordination</li>
  <li>Case prioritization challenges</li>
</ul>
`,

    approachToSolution: `
<p>We approached each case individually while maintaining an organized workflow. Our team prioritized urgent matters and provided tailored legal advice to each client. Proper documentation and timely filing ensured smooth handling. Even in cases with limited evidence, we guided clients effectively. This approach allowed us to manage multiple cases efficiently while maintaining service quality.</p>
`,

    chartData: [
      { label: "Jun", value: 30 },
      { label: "Jul", value: 50 },
    ],

    status: "archived",
    createdAt: "2024-03-23T11:35:00.000Z",
    updatedAt: "2024-03-23T11:35:00.000Z",
  },
];
