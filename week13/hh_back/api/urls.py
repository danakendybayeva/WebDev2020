from django.urls import path
from api.views import companies_list, company_detail, vacancies_by_company, vacancies_list, vacancy_detail, vacancy_top

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies', vacancies_by_company),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten', vacancy_top),
]