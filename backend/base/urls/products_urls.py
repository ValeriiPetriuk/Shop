from django.urls import path
from base.views import products_views as views


urlpatterns = [
    path('', views.getProducts, name="products"),
    path('create/', views.createProduct, name='create-product'),
    path('upload/', views.updloadImage, name='image-upload'),
    path('<str:pk>/reviews/', views.createProductReview, name="create-product-review"),
    path('top/', views.getTopProducts, name="top-products"),
    path('<str:pk>/', views.getProduct, name="products"),

    path('update/<str:pk>/', views.updateProduct, name='update-product'),
    path('delete/<str:pk>/', views.deleteProduct, name='delete-product'),
    
]