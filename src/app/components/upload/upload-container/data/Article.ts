import { Reviews } from "./Reviews";

export interface Article {
  IdArticle: number;
  Name: String;
  Details: String;
  Licence: string;
  Review: string;
  Format: string;
  ImportableTo: String;
  Size: number;
  Geometry: string;
  Vertices: string;
  PBR: String;
  Textures: String;
  Materials: string;
  UV_layers: string;
  Vertex_colors: String;
  Rigged_geometries: string;
  Animations: string;
  Morph_Geometries: string;
  Scale_Transformations: string;
  Category: string;
  Photo: string;
  PublishedDate: Date;
  Taggs: string[];
  listReviews: Array<Reviews>;
}
