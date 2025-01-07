export interface IProjectItem {
  _id: string;
  title: string;
  content: string;
  summary: string;
  skills: string[];
  image_url: string[];
  site_url: string;
  git_repo_url: string;
  created_at: string;
  updated_at: string;
}

export interface IHeroItem {
  _id: string;
  hero_text: string;
}

export interface IAboutItem {
  _id: string;
  about_text: string;
  about_skills: string[];
}
