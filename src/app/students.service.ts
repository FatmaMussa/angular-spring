import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  /** GET all students from the server */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
