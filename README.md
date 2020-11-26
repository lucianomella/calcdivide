# CalcDivide
Micro-servicio simple que divide dos variables
La operación resultante es equivalente a: "X = a / b"

## Versión
~~~
Node 12.10.0
npm 6.10.3
~~~

## Endpoint /divide

Para el servicio se debe consulta a traves de metodo POST la URl.

Ejemplo:
~~~
http://localhost/divide
~~~

### Input
Se espera como entrada un body JSON con dos (2) parámetros: 'a' y 'b', los cuales pueden ser número o tipo caracter.

Ejemplo 1:
~~~
{
    "a": 10,
    "b": 22
}
~~~

Ejemplo 2:
~~~
{
    "a": "11",
    "b": 5
}
~~~

Ejemplo 3:
~~~
{
    "a": 456,
    "b": "10"
}
~~~

Ejemplo 4:
~~~
{
    "a": "56",
    "b": "11"
}
~~~

### Output
Se pueden generar 2 resultados.

#### Status 200
Devuelve un número en formto de texto.
Ejemplo:
Para un input
~~~
{
    "a": 50,
    "b": 10
}
~~~

El resultado es:
~~~
    5
~~~

#### Status 400

Si alguno de los parámetros 'a' y 'b' no se encuentran en el body de la solicitud o no son números válidos se devuelve un mensaje de error con status de error http 400.

Ejemplo:
~~~
Error en datos
~~~


### Endpoint /coverage

Se puede visualizar la cobertura de la prueba desde la URl.

Ejemplo:
~~~
http://localhost/coverage
~~~

## DOCKER

~~~
docker build -t calcdivide ./
docker run --publish 3004:3001 --detach --name calcdivide calcdivide
~~~