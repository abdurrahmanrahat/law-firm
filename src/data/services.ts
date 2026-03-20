import type { ServiceItem } from "@/types/service.type";

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "family-law",
    title: "Family Law",
    shortDescription:
      "Compassionate legal support for divorce, custody, child support, mediation, and family protection matters.",
    icon: "/images/services/icons/family-law.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        Family law matters often involve deeply personal decisions that affect your future,
        your children, and your financial stability. We provide steady legal guidance with a
        strategy that protects your rights while reducing unnecessary conflict wherever possible.
      </p>

      <p>
        Whether you are dealing with divorce, child custody, guardianship, alimony, or property
        division, our role is to give you clarity at every stage. We prepare your case carefully,
        explain your options in plain language, and advocate for outcomes that are practical,
        fair, and sustainable.
      </p>

      <h3>What is included in our Family Law service?</h3>

      <p>
        We assist with both negotiated settlements and contested proceedings. Our approach combines
        legal precision, sensitive communication, and a focus on long-term stability for families.
      </p>

      <ul>
        <li>Divorce and legal separation filings</li>
        <li>Child custody, visitation, and parenting arrangements</li>
        <li>Child support and spousal support matters</li>
        <li>Property and asset division strategy</li>
        <li>Protective orders and urgent family court applications</li>
      </ul>

      <p>
        Every family situation is unique. We tailor our legal strategy to your priorities, timeline,
        and desired outcome so you can move forward with confidence.
      </p>
    `,
    faqs: [
      {
        question: "How long does a family law case usually take?",
        answer:
          "It depends on whether the matter is uncontested or disputed. Straightforward cases can resolve in a few months, while high-conflict matters involving custody or assets may take longer.",
      },
      {
        question: "Can custody arrangements be settled without trial?",
        answer:
          "Yes. Many custody matters are resolved through negotiation, mediation, or court-approved parenting agreements without a full trial.",
      },
      {
        question: "What documents should I prepare before meeting a lawyer?",
        answer:
          "Bring identification, marriage records if applicable, court notices, financial documents, and any communication relevant to custody, support, or disputes.",
      },
      {
        question: "Do you handle urgent protection-related applications?",
        answer:
          "Yes. We can assist with time-sensitive family court filings, including protection requests and emergency parenting issues where legally appropriate.",
      },
    ],
  },
  {
    id: 2,
    slug: "personal-injury",
    title: "Personal Injury",
    shortDescription:
      "Strong representation for accident victims seeking compensation for medical costs, income loss, and recovery support.",
    icon: "/images/services/icons/personal-injury.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        After an accident, the legal process can feel overwhelming. We help injured clients pursue
        fair compensation while handling insurers, evidence collection, and claim strategy with care.
      </p>

      <p>
        Our team focuses on building a clear case around liability, damages, and future impact.
        We work to recover compensation for treatment costs, lost income, pain and suffering,
        and other claimable losses.
      </p>

      <h3>What does our Personal Injury team handle?</h3>

      <ul>
        <li>Road traffic and vehicle accident claims</li>
        <li>Slip, trip, and fall incidents</li>
        <li>Workplace injury claims</li>
        <li>Medical expense and rehabilitation recovery support</li>
        <li>Insurance negotiation and litigation preparation</li>
      </ul>

      <p>
        We aim to keep the process transparent, responsive, and strategically strong from the first
        consultation to final resolution.
      </p>
    `,
    faqs: [
      {
        question: "How much is my injury claim worth?",
        answer:
          "The value depends on liability, severity of injury, treatment costs, lost income, and the long-term impact on your life and work.",
      },
      {
        question: "Do I need medical records to start a case?",
        answer:
          "Not necessarily at the first meeting, but medical records are very helpful. We can guide you on what documentation strengthens the claim.",
      },
      {
        question: "What if the insurance company already contacted me?",
        answer:
          "You should respond carefully and avoid agreeing to a settlement before getting legal advice. Early offers may undervalue your claim.",
      },
      {
        question: "Can I still claim if I was partly at fault?",
        answer:
          "In some cases, yes. Partial responsibility does not always prevent a claim, though it may affect the compensation amount.",
      },
    ],
  },
  {
    id: 3,
    slug: "business-law",
    title: "Business Law",
    shortDescription:
      "Practical legal guidance for contracts, governance, risk management, transactions, and commercial growth.",
    icon: "/images/services/icons/business-law.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        Businesses need legal decisions that support both protection and growth. We advise startups,
        founders, and established companies on commercial matters with a focus on clarity, speed,
        and risk control.
      </p>

      <p>
        From drafting contracts to reviewing partnerships and internal governance, we help you make
        confident legal decisions that support operations and future expansion.
      </p>

      <h3>Business law support includes:</h3>

      <ul>
        <li>Commercial agreements and contract drafting</li>
        <li>Company formation and structural advice</li>
        <li>Shareholder and partnership arrangements</li>
        <li>Regulatory risk review and compliance support</li>
        <li>Dispute prevention and pre-litigation guidance</li>
      </ul>

      <p>
        Our goal is to make legal support commercially useful, not overly complicated. We focus on
        practical outcomes your business can act on.
      </p>
    `,
    faqs: [
      {
        question: "Do you help with startup legal setup?",
        answer:
          "Yes. We can help with entity structure, founder agreements, basic contract frameworks, and early compliance considerations.",
      },
      {
        question: "Can you review our client or vendor contracts?",
        answer:
          "Absolutely. We review for risk, obligations, liability exposure, payment terms, and negotiation opportunities.",
      },
      {
        question: "When should a business involve a lawyer?",
        answer:
          "Ideally before signing key contracts, onboarding partners, handling disputes, or expanding into higher-risk commercial arrangements.",
      },
      {
        question: "Do you provide ongoing outside counsel support?",
        answer:
          "Yes. We can support businesses on an ongoing basis for recurring commercial and operational legal needs.",
      },
    ],
  },
  {
    id: 4,
    slug: "criminal-law",
    title: "Criminal Law",
    shortDescription:
      "Focused legal defense, procedural protection, and strategic representation for criminal allegations and investigations.",
    icon: "/images/services/icons/criminal-law.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        Criminal allegations require immediate, disciplined legal action. We defend clients with a
        focus on due process, evidence review, procedural fairness, and clear strategic advice from
        the start.
      </p>

      <p>
        Whether the issue involves questioning, formal charges, or court representation, we work to
        protect your rights and build the strongest response available under the facts of the case.
      </p>

      <h3>Our Criminal Law support covers:</h3>

      <ul>
        <li>Police interview and investigation support</li>
        <li>Bail, hearings, and courtroom representation</li>
        <li>Case analysis and defense strategy</li>
        <li>Evidence and procedural review</li>
        <li>Pre-trial negotiation and legal submissions</li>
      </ul>

      <p>
        Early legal advice can make a major difference. We act quickly, communicate clearly, and
        defend your position with seriousness and discretion.
      </p>
    `,
    faqs: [
      {
        question: "Should I speak to authorities before getting a lawyer?",
        answer:
          "You should seek legal advice as early as possible. Early statements can affect how a case develops.",
      },
      {
        question: "Can you represent me during an investigation?",
        answer:
          "Yes. Legal representation during the investigation stage is often critical and may affect later proceedings.",
      },
      {
        question: "What happens at the first court appearance?",
        answer:
          "The court may address charges, bail, scheduling, or initial procedural matters. We prepare you for what to expect and how to respond.",
      },
      {
        question: "Do all criminal cases go to trial?",
        answer:
          "No. Some matters resolve through dismissal, negotiation, plea arrangements, or procedural outcomes before trial.",
      },
    ],
  },
  {
    id: 5,
    slug: "education-law",
    title: "Education Law",
    shortDescription:
      "Legal support for students, institutions, administrators, and families in academic and regulatory matters.",
    icon: "/images/services/icons/education-law.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        Education law issues can affect academic standing, access, institutional compliance, and
        long-term opportunities. We support students, parents, educators, and institutions with
        balanced and practical legal guidance.
      </p>

      <p>
        Our work includes disciplinary matters, academic appeals, administrative policies, and
        governance questions where legal review can help avoid costly mistakes.
      </p>

      <h3>Education law matters may include:</h3>

      <ul>
        <li>Student disciplinary proceedings and appeals</li>
        <li>Institutional policy and compliance review</li>
        <li>Admission and academic dispute guidance</li>
        <li>Administrative hearings and procedural fairness matters</li>
        <li>Education-related contracts and governance issues</li>
      </ul>

      <p>
        We approach education matters with sensitivity, structure, and a strong understanding of how
        policy decisions can impact individuals and institutions alike.
      </p>
    `,
    faqs: [
      {
        question: "Can a student appeal a disciplinary decision?",
        answer:
          "In many cases, yes. Appeal rights depend on the institution’s policies, the applicable procedures, and the underlying facts.",
      },
      {
        question: "Do you work with schools and institutions too?",
        answer:
          "Yes. We support both individuals and institutions on policy, procedure, governance, and dispute-related matters.",
      },
      {
        question:
          "What should be reviewed before filing an academic complaint?",
        answer:
          "Relevant policies, notices, evidence, correspondence, and deadlines should all be reviewed carefully before taking action.",
      },
      {
        question: "Can legal counsel help with administrative hearings?",
        answer:
          "Yes. Legal preparation can help clarify the process, strengthen submissions, and improve overall case presentation.",
      },
    ],
  },
  {
    id: 6,
    slug: "real-estate-law",
    title: "Real Estate Law",
    shortDescription:
      "Trusted legal support for property transactions, title review, contracts, disputes, and development matters.",
    icon: "/images/services/icons/real-estate-law.png",
    pageBannerImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
    contentImages: [
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    ],
    description: `
      <p>
        Real estate transactions involve significant financial and legal risk. We help buyers,
        sellers, investors, and developers navigate contracts, title issues, due diligence, and
        transaction documents with confidence.
      </p>

      <p>
        Our approach is detail-focused and commercially practical. We identify issues early, explain
        their impact clearly, and help you move forward with better protection.
      </p>

      <h3>Our Real Estate Law service includes:</h3>

      <ul>
        <li>Purchase and sale agreement review</li>
        <li>Title and due diligence support</li>
        <li>Lease drafting and property-related contracts</li>
        <li>Transaction risk assessment</li>
        <li>Dispute prevention and resolution support</li>
      </ul>

      <p>
        Whether you are closing a residential purchase or negotiating commercial property terms,
        we focus on protecting your interests with efficient legal execution.
      </p>
    `,
    faqs: [
      {
        question:
          "Should I have a lawyer review the sale agreement before signing?",
        answer:
          "Yes. Early review helps identify risk, unclear clauses, deadlines, and obligations that may create future problems.",
      },
      {
        question: "What is included in property due diligence?",
        answer:
          "It often includes title review, contract examination, property disclosures, financing conditions, and issue spotting before closing.",
      },
      {
        question: "Do you assist with lease agreements?",
        answer:
          "Yes. We help draft, review, and negotiate lease terms for better legal clarity and protection.",
      },
      {
        question: "Can you help if a real estate dispute starts after closing?",
        answer:
          "Yes. We can assess the documents, facts, and available remedies to guide the next legal step.",
      },
    ],
  },
];
