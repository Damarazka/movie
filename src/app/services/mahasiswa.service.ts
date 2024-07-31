import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Mahasiswa } from '../pages/mahasiswa.model';

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

  createMahasiswa(model : Mahasiswa): Observable<any> {
    const payload = {
      nama: model.nama,
      alamat: model.alamat,
      nim: model.nim,
      email: model.email,
    }
    return this.http.post<any>(this.apiUrl + '/create', payload)
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

  updateMahasiswa(body: any): Observable<any> {
    const payload = {
      nama: body.nama,
      alamat: body.alamat,
      nim: body.nim,
      email: body.email,
    }

    return this.http.put<any>(`${this.apiUrl}/update/${body._id}`, payload)
  }
}
