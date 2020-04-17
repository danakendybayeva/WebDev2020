import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company, Vacancy, LoginResponse } from './models';

// import { Company } from './company';
// import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) {}

  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }

  getVacancyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/vacancies/`);
  }

  getVacancy(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getVacanciesByCompanyId(companyId): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyId}/vacancies/`);
  }
}
