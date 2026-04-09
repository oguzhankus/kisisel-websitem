export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
  link?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name" | "link">> & Pick<TCommonProps, "link">;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">> & Pick<TCommonProps, "link">;

export type TProject = {
  description: string;
  longDescription?: string;
  screenshots?: string[];
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  liveLink: string;
} & Required<Pick<TCommonProps, "name">> & Pick<TCommonProps, "link">;

export type TTechnology = Required<Omit<TCommonProps, "title" | "link">> & Pick<TCommonProps, "link">;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">> & Pick<TCommonProps, "link">;

export type TService = {
  description: string;
} & Required<Omit<TCommonProps, "name" | "link">> & Pick<TCommonProps, "link">;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
