import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Skill = {
  name: string;
  src?: any;
};
