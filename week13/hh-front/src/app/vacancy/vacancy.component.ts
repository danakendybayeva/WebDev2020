import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private companyService: CompanyService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancies();
  }
  getVacancies(): void {
    const companyId = +this.route.snapshot.paramMap.get('companyId');
    this.companyService.getVacanciesByCompanyId(companyId)
      .subscribe(vacancies => this.vacancies = vacancies);
  }

}
