from django.urls import path
from .views import form_del2, home, form_cliente, perfil_usuario, login_admin, index2, apro_form, forms, form_mod, form_del, apro_trabajo, trabajo_mod, trabajos, registro, carro

urlpatterns = [
    path('',home,name="home"),
    path('form-cliente', form_cliente, name="form_cliente"),
    path('perfil_cliente', perfil_usuario, name="perfil_usuario"),
    path('login_admin', login_admin, name="login_admin"),
    path('index2', index2, name="index2"),
    path('apro_form', apro_form, name="apro_form"),
    path('forms', forms, name="forms"),
    path('form_mod/<id>', form_mod, name="form_mod"),
    path('form_del/<id>', form_del, name="form_del"),
    path('form_del2/<id>', form_del2, name="form_del2"),
    path('apro_trabajo', apro_trabajo, name="apro_trabajo"),
    path('trabajo_mod/<id>', trabajo_mod, name="trabajo_mod"),
    path('trabajos', trabajos, name="trabajos"),
    path('registro/',registro, name="registro"),
    path('carro/',carro, name="carro"),
]
