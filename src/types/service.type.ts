export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  pageBannerImage: string;
  image: string;
  contentImages: string[];
  description: string; // html string
  faqs: ServiceFaq[];
};
