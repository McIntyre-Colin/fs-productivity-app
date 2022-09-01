from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Two example views. Change or delete as necessary.
def home(request):

    context = {
        'example_context_variable': 'Change me.',
    }

    return render(request, 'pages/home.html', context)

def about(request):
    context = {
    }

    return render(request, 'pages/about.html', context)



def react_app(request):
    index_contents = open('./frontend/build/index.html').read()
    return HttpResponse(index_contents)

def test_api_view(request):
    return JsonResponse({
        'testing' : 'Does this work',
    })