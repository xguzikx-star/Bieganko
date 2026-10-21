# Śródziemie — Droga Pierścienia (v0.1)

Mobilna aplikacja PWA na iPhone'a, hostowana na GitHub Pages. Rejestruje marsz, bieg i interwały (szybko lub szczegółowo); oblicza trasę w skali **1 km realny = 3 km fabularne**; pokazuje kronikę odkryć, tygodniowy wykres dystansu oraz serię tygodniową. Umożliwia dodawanie starszych treningów, edycję, usuwanie, eksport i import JSON.

## Instalacja na GitHub Pages

1. Utwórz repozytorium, np. `srodziemie`, i wgraj **zawartość** tego folderu do katalogu głównego repozytorium (index.html musi być w root).
2. Wejdź do **Settings → Pages → Build and deployment → Deploy from a branch**, wybierz `main`, katalog `/ (root)` i zapisz.
3. Otwórz adres `https://NAZWA-UZYTKOWNIKA.github.io/srodziemie/` w Safari na iPhonie.
4. W Safari wybierz **Udostępnij → Dodaj do ekranu początkowego**.

Działa jako statyczna strona (nie wymaga backendu). Możesz także uruchomić lokalny serwer, np. `python -m http.server 8000`, i otworzyć `http://localhost:8000` na komputerze. Otwieranie index.html przez `file://` nie gwarantuje instalacji PWA ani działania service workera.

## Dane i kopie

Dane treningowe zapisują się w `localStorage` danej instalacji przeglądarki. **Nie synchronizują się** przez GitHub ani między urządzeniami. Korzystaj z ikony ustawień → „Pobierz kopię JSON”. Przywracanie kopii **zastępuje** istniejące dane. Nie przechowuj prywatnego JSON w publicznym repozytorium. Wyczyszczenie danych strony może usunąć dziennik.

## Znane ograniczenia

- **Kartografia v0.1 jest stylizowaną mapą SVG, a nie geograficznie dokładną mapą Tolkiena.** Kilometraż punktów pośrednich i podział trasy to wartości robocze, wymagające weryfikacji w jednej konsekwentnej rekonstrukcji. Przyjęte kotwice: 0 / 737 / 1481 / 2107 / 2863 km fabularnych.
- Karty odkryć zawierają krótkie autorskie opisy; ilustracje miejsc i komplet badań źródłowych to następna iteracja.
- Wersja v0.1 nie ma automatycznego importu treningów ze smartwatcha, synchronizacji, testów na urządzeniach ani kolejnych wypraw.
- Po zapisie segmentów treningu dystans pozostaje wpisaną wartością z bieżni. Tempo liczone jest jako czas/dystans, nie z sumy prędkości segmentów.
- Po zmianie danych odznaki odkryć przeliczane są z bieżącego kilometrażu.

## Struktura

`index.html` · `style.css` · `app.js` · `sw.js` · `manifest.webmanifest` · `assets/`

Kod bez frameworka i kompilatora — wygodny do kolejnych iteracji i publikacji bez builda.


## v0.2 — mapa ilustracyjna
Tło `assets/eriador-landscape.webp` jest osobnym plikiem rastrowym 1280×1700. Droga, znaczniki, obecna pozycja i nazwy są generowane jako interaktywne SVG w `app.js`. Dzięki temu nie ma wygenerowanych na obrazie napisów ani nieprawidłowych oznaczeń. Tło jest ilustracyjną interpretacją krajobrazu, **nie** dokładnym atlasem Śródziemia. Geograficzny przebieg trasy i dystanse punktów pośrednich wymagają weryfikacji.

Przed podmianą plików na GitHubie wyeksportuj kopię treningów z Ustawień. Klucz danych `srodziemie.v1` pozostaje bez zmian, więc aktualizacja zachowuje dotychczasowy dziennik na tym samym urządzeniu i adresie.


## Wersja 0.3 — nowy krajobraz

Podmieniono tło pierwszego rozdziału na osobny obraz malarski w `assets/eriador-landscape.webp`. Trasa i znaczniki pozostają interaktywną warstwą SVG w `app.js`. Późniejsze rozdziały mają roboczy układ i wymagają osobnych ilustracji oraz zatwierdzenia geografii. Wymiana plików nie czyści danych zapisanych w localStorage, lecz przed aktualizacją zalecamy eksport JSON.


## v0.4 — naprawa mapy iPhone
Ilustracja WebP jest teraz elementem HTML `<img>` pod nakładką SVG (Safari nie musi pobierać zewnętrznego obrazu z wnętrza SVG). Trasa jest prowadzona krzywymi Béziera, SVG pozostaje interaktywne. Cache PWA podniesiony do srodziemie-v4. Zachowany klucz danych localStorage `srodziemie.v1`.
