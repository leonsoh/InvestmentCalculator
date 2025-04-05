import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Post } from "./services.model";

@Injectable({providedIn: 'root'})
export class Services {
    constructor(private http: HttpClient) {}
    private url = "https://jsonplaceholder.typicode.com/posts"

    getUserPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }
}
