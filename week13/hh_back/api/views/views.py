from django.http.response import JsonResponse
from api.models import Company,Vacancy

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())


def vacancies_by_company(request, id):
    try:
        vacancies = Vacancy.objects.filter(company=id)
        vacancies_by_company_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_by_company_json, safe=False)
    except:
        return JsonResponse({'error': 'No vacancies in company'})

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json())


def vacancy_top(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
