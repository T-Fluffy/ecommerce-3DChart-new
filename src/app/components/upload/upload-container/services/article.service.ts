import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../data/Article";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  private Shop3DServerUrl = "";

  //showing all the articles :
  constructor(private http: HttpClient) {}
  public getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>("${this.Shop3DServerUrl}/RestArticle/all");
  }
  //Adding an article to the database:
  public addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      "${this.Shop3DServerUrl}/add_article/",
      article
    );
  }
  //Deleting an article from database:
  public deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(
      "${this.Shop3DServerUrl}//delete_article/${articleId}"
    );
  }
  //rechercheBMC
  public rechercheBMC(motCle: String): Observable<void> {
    return this.http.get<void>(
      "${this.Shop3DServerUrl}/RestArticle/rechercheByBMC/${motCle}"
    );
  }
  //
  public getImageArticle(motCle: String): Observable<void> {
    return this.http.get<void>(
      "${this.Shop3DServerUrl}/RestArticle/save_article"
    );
  }
}
