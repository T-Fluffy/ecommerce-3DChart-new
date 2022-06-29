import { Article } from "./Article";

export interface Reviews {
  IdReview: number;
  Comment: string;
  Rating: string;
  Sugggestions: string;
  article: Article;
}
