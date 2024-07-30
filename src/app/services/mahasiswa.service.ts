import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private apiUrl = 'http://93.127.199.17:8080/api/mahasiswa'

  constructor(private http: HttpClient) { }

  getAllMahasiswas(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
      map(response => {
        return Array.isArray(response) ? response : response.data;
      })
    );
  }

  getMahasiswaById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMahasiswa(mahasiswa: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, mahasiswa);
  }

  deleteMahasiswa(id: string): Observable<any>{
    const deleteUrl = `${this.apiUrl}/delete/${id}`;
    const body = {
      nama: '',
      alamat: '',
      email: '',
      nim: '',
    }

    return this.http.delete<any>(deleteUrl, {body}).pipe(
      catchError((error: any) => {
        console.error('ini error', error);
        return throwError(error)
      })
    )
  }
}
