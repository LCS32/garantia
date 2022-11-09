import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Garantia } from '../interfaces/garantia';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/garantias/'
  }

  getListGarantias(): Observable<Garantia[]> {
    return this.http.get<Garantia[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveGarantia(garantia: Garantia): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, garantia)
  }

  getGarantia(id: number): Observable<Garantia> {
    return this.http.get<Garantia>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateGarantia(id: number, garantia: Garantia): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, garantia);
  }
}
