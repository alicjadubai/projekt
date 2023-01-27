![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj fork repozytorium (stworzony w punkcie 1) na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres możesz znaleźć na stronie forka repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

### Poszczególne zadania rozwiązuj w odpowiednich plikach.

**Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.**


## Zadanie 1 - ES6

Podczas wykonywania tego zadania **nie używaj biblioteki React**.

> ### Przygotowanie
>
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
>
> - `01_Zadanie_1`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**

Stwórz funkcję `without` przyjmującą nieskończoną ilość argumentów (należy skorzystać z odpowiedniego operatora). Pierwszy z argumentów (`data`) będzie tablicą wartości liczbowych całkowitych. Kolejnych argumentów może być nieskończenie wiele.

Funkcja powinna zwracać **nową tablicę** która będzie pozbawiona wartości podanych jako kolejne argumenty funkcji. Do rozwiązania należy użyć odpowiednich **funkcji tablicowych**.

### Przykład

```js
const data = [1, 2, 3, 4, 5];

console.log(without(data, 1, 2)); // [3, 4, 5];
console.log(without(data, 5, 3)); // [1, 2, 4];
console.log(without(data, 1, 2, 3, 4)); // [5];
console.log(without(data)); // [1, 2, 3, 4, 5];
console.log(without(data, 1, 2, 3, 4, 5)); // [];
```


## Zadanie 2 - ES6

Podczas wykonywania tego zadania **nie używaj biblioteki React**.

> ### Przygotowanie
>
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
>
> - `02_Zadanie_2`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**

W pliku przygotowanym do tego zadania, masz do dyspozycji tablicę użytkowników (zmienna `users`).

> Do wszystkich akcji związanych z tablicą danych użyj **metod tablicowych**.

Stwórz funkcję o nazwie `parseUserData` która przyjmuje **tablicę** jako argument (pod zmienną `data`) a następnie:

- przefiltruj otrzymaną tablicę i pozostaw tylko użytkowników, którzy w kluczu `language` mają wartość `French`,
- zmień przy użyciu odpowiedniej metody tablicowej strukturę pojedynczych obiektów tak, aby reprezentowały następujące dane (użyj destrukturyzacji):
  - `id`,
  - `fullName`: `firstName` `lastName` (pomiędzy imieniem i nazwiskiem powinna być "spacja"),
  - `email`,
  - `nin`,
- posortuj ją według klucza `nin` (rosnąco).

Funkcja ma zwracać w pełni przygotowaną tablicę według powyższej specyfikacji.

### Oczekiwany wynik:

```js
[
  {
    id: 5,
    fullName: "Colas Moffett",
    email: "cmoffett4@purevolume.com",
    nin: "1288790260",
  },
  {
    id: 4,
    fullName: "Biddie Liddard",
    email: "bliddard3@noaa.gov",
    nin: "2931819395",
  },
  {
    id: 1,
    fullName: "Idalia Franses",
    email: "ifranses0@mapy.cz",
    nin: "3033798411",
  },
];
```


## Zadanie 3 - ES6
Podczas wykonywania tego zadania **nie używaj biblioteki React**.


> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `3_Zadanie 3`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**



Stwórz klasę abstrakcyjną `Product` z konstruktorem przyjmującym takie parametry jak:

- `name` - nazwa produktu
- `price` - cena produktu
- `inStock` - wartość `true`/`false` czy produkt jest dostępny
- `quantity` - ilość produktu w magazynie

Ma zawierać również takie metody:

- `isInStock()` - zwracająca tekst "Produkt dostępny" lub "Brak w magazynie" w zależności od odpowiedniego klucza w obiekcie
- `order(quantity)` - metoda powinna zwracać informację o cenie zakupu odpowiedniej ilości (`quantity`) produktów. Jeżeli wartość `quantity` przekracza ilość produktu w magazynie, metoda powinna zwrócić `false`. Musi ona również odpowiednio modyfikować wartość `this.quantity` a jeżeli dojdzie ona do `0` to również ustawić `this.inStock` na `false`

Następnie stwórz klasę `Shoes` która będzie dziedziczyć po `Product`. Ma ona **dodatkowo** w konstruktorze tworzyć:

- `colors` - tablicę z kolorami butów (na początku pusta)
- `sizes` - tablicę z rozmiarami butów (na początku: `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`)

Dodatkowo klasa `Shoes` powinna mieć dwie dodatkowe metody:

- `addColor(color)` - dodaje odpowiedni kolor do tablicy `this.colors` (użyj operatora rozproszenia)
- `removeSize(size)` - usuwa odpowiedni rozmiar z tablicy `this.sizes` (użyj metody iterującej `filter`)

Przetestuj działanie klas, wykonując poniższy lub wymyślony przez siebie kod.

```js
const adidas = new Shoes("Adidas", 299.99, true, 40);

console.log(adidas.isInStock()); // Produkt dostępny
console.log(adidas.order(30)); // 8999.7
console.log(adidas.order(30)); // false
console.log(adidas.order(10)); // 2999.9
console.log(adidas.isInStock()); // Brak w magazynie

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors); // ["red", "blue", "green"]

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]
```



## Zadanie 4 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `04_Zadanie_4`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**

Wyrenderuj w **funkcyjnym** komponencie ```App``` następujące elementy:
- `h1` z napisem "Hello World!",
- `span` z napisem "React Rules!".

Elementy mają być **bezpośrednimi** dziećmi elementu głównego, do którego renderujemy całą aplikację - `#app`.



## Zadanie 5 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `05_Zadanie_5`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


Stwórz komponent **funkcyjny** `UserDetails`. Ma on przez `props` przyjmować:

- Imię `name`
- Nazwisko `surname`
- Adres ``address``
- Kod Pocztowy `postcode`
- Miejscowość `city`

Komponent ma renderować (przykład w `HTML`):

```html
<div class="card">
  <div>
    <h5>{Imię} {Nazwisko}</h5>
    <div>{Adres}</div>
    <div>{Kod Pocztowy} {Miejscowość}</div>
  </div>
</div>
```

Wyrenderuj ten komponent dla dowolnych danych.

**Pamiętaj o stworzeniu również funkcyjnego komponentu `App`, który będzie renderował komponent do tego zadania.**



## Zadanie 6 - React
Zadanie wykonaj **przy użyciu biblioteki React**.

> ### Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak, aby zmienna `entryPath` wskazywała na:
> - `06_Zadanie_6`
>
> **Pamiętaj, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`), a następnie włączyć go z powrotem (`npm start`).**


Zaimportuj tablicę obiektów znajdującą się w `js/data/products.js` pod zmienną `products`.

Stwórz trzy komponenty: `App`, `Products`, `Item`.

Komponent `App` ma przesyłać przez `props` do komponentu `Products` zaimportowaną listę produktów (`props` ma mieć nazwę `products`).

Komponent `Product` ma renderować nagłówek `h2` "Produkty" i listę `ul` a w niej komponenty `Item` przesyłając do nich wartości `name` i `price` z każdego obiektu tablicy `products`. Musi odbywać się to automatycznie poprzez znaną Ci metodę iteracyjną. 

Komponent `Item` ma renderować element `li` z danymi odebranymi przez `props`, np. `{name}, Cena: {price}`.

W końcowym wyniku ma nastąpić następująca konstrukcja (w nawiasach kwadratowych zaznaczono jakie `propsy` powinien dostać komponent i jakiego mają być typu):

```plain
App
 |_Products [products: Array]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
```
