import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company, Vacancy } from '../models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[];
  vacancies: Vacancy[];

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList(){
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies;
      });
  }

}
