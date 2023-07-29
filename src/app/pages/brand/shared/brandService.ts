import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Brand } from "./brand";
import { enviroment } from "src/environments/environments.prod";
import { BrandApi } from "./brand-api.constant";

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    private apiServerUr = enviroment.apiBaseUrl;
    constructor(private http: HttpClient) { }
    getBrands(): Observable<Brand[]> {
        return this.http.get<Brand[]>(`${this.apiServerUr}${BrandApi.GET_ALL_BRANDS}`);
    }
}