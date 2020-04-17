from django.urls import path

from api.views import view_cbv
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', view_cbv.CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', view_cbv.CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', view_cbv.VacanciesByCompanyAPIView.as_view()),
    path('vacancies/', view_cbv.VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', view_cbv.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', view_cbv.TopVacanciesListAPIView.as_view())
]