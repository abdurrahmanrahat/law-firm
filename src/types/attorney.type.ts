export type TAttorney = {
  _id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
};
