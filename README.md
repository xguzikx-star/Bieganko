Śródziemie v4.6: usunięto automatyczny baner kopii zapasowej; ręczny eksport/import JSON pozostaje w Ustawieniach. Ujednolicono stylistykę, tło i metaliczne złoto.

Wersja v4.5 – hero karta startowa, schowany górny nagłówek na mapie, szlachetniejsza złota kolorystyka.

# Śródziemie — Droga Pierścienia v3.0

Komplet plików do głównego katalogu repozytorium GitHub Pages. Rozpakuj bez tworzenia dodatkowego katalogu.

## Nowości
- Zakładka **Rozwój Wędrowca**: oddzielne filtry marszu, biegu i interwałów, tygodniowe dystanse, trendy tempa i średniego tętna.
- Porównywanie oznaczonych prób o tym samym rodzaju aktywności i dystansie różniącym się maksymalnie o 0,25 km.
- Sumaryczny czas w strefach tętna, jeśli został wpisany lub zaimportowany.
- **Karta Wędrowca**: regularność, bieg ciągły, zarejestrowane RPE i zmiana tempa prób. Wszystkie reguły pokazane użytkowniczce.
- Zapisywany lokalnie cel, dni treningowe i orientacyjny czas treningu; ostrożne wskazówki oparte na dostępnych treningach.
- Zachowany import zrzutów Mi Fitness oraz kopie JSON; plan treningowy dołączony do eksportu/importu.

## Uwagi
- Zachowano ten sam klucz localStorage `srodziemie.v1`: dotychczasowe treningi powinny pozostać dostępne. Wykonaj kopię JSON przed aktualizacją.
- Nie dodano żadnych zastępczych zdjęć. Brakujące zdjęcia lokacji i mapy mogą nadal nie wyświetlać się bez dołożenia ich do repozytorium.
- Rozpoznawanie obrazu jest OCR w przeglądarce i wymaga potwierdzenia odczytanych wartości.
- Analiza trendów nie jest diagnozą medyczną ani profesjonalnym planem treningowym; dane z różnych typów wysiłku należy interpretować oddzielnie.


## v3.1 — poprawa OCR
Dystans i czas są rozpoznawane z osobnych obszarów zrzutu Mi Fitness. Jeśli rozpoznawanie się nie powiedzie, importer nie wstawia niepewnej wartości.


## v3.2 — naprawa importu Mi Fitness
- Obszary OCR wyznaczane na podstawie szerokości zrzutu, niezależnie od jego całkowitej długości.
- Oddzielny wycinek dystansu (lewy górny kafel) i czasu treningu.
- Zachowano ręczne zatwierdzanie wartości przed zapisaniem.


Aktualizacja v3.3: odświeżona kolorystyka kroniki, nowe odznaki w miejsce pieczęci oraz poprawiona logika opisów w dzienniku wyprawy.

## v3.4 — pełny szlak
Na mapie przesuń palcem w lewo/prawo, aby zobaczyć rozdziały I–IV i widok „Cała trasa”. Przycisk „Cała trasa” działa z każdego rozdziału. Złota linia oznacza przebytą trasę, przerywana dalszy szlak. Atlas zbiorczy jest schematem opartym na kolejności punktów, a nie dokładną kartografią Śródziemia. Powiększ mapę, aby otwierać punkty. Brakujące ilustracje rozdziałów II–IV pozostają bez grafik zastępczych.


## v3.5 — Atlas i odznaki
Atlas-srodziemia.jpg to ilustracyjna, fantastyczna mapa w stylu Śródziemia; mapa jest stylizowana, a nie geodezyjnie dokładna. Warstwa wektorowa pokazuje 20 punktów, przebytą trasę i pozycję wynikającą z danych treningowych. Włącz widok „Cała trasa”. Dwanaście ilustracji medalionów jest mapowanych na 18 osiągnięć, więc niektóre symbole są współdzielone.


## v3.7 — spójność map
Rozdziały II–IV są obecnie widokami tego samego atlasu (`atlas-srodziemia.jpg`) i korzystają z jednej tablicy `WORLD_POINTS`. Nie trzeba wgrywać dawnych grafik `chapter-2`, `chapter-3`, `chapter-4`. Atlas ma charakter ilustracyjny, nie jest geodezyjnie wierną mapą Tolkiena. Rozdział I pozostaje z pierwotną ilustracją Eriadoru.


Aktualizacja v3.8: dodane ilustracyjne karty rozdziałów w górnej części mapy, w stylu zintegrowanej karty z gradientem.


Aktualizacja v3.9: widok Cała trasa otrzymał kartę hero w tym samym stylu co rozdziały oraz dopracowaną górną sekcję atlasu.


## v4.0 — interaktywne karty map
Karty rozdziałów są generowane z HTML/CSS/SVG, nie zawierają gotowych tekstów ani wrysowanego postępu. Jeden atlas, aktywne znaczniki, licznik odkryć i przebyty dystans. Nie ma podwójnych map ani osobnych grafik typu hero-ch*.png.


Wersja 5.1: mapa dominuje na ekranie, opisy rozdziałów są pod nagłówkiem, uproszczone sekcje bez ciężkich ramek.


### v5.3 — grafiki rozdziałów
Wszystkie cztery etapy wykorzystują dostarczone oryginalne ilustracje `chapter-portrait-1.jpg`…`chapter-portrait-4.jpg` w proporcji 344:660, bez rozciągania oraz bez drugiej nakładki tras i etykiet. Gest przewijania rozdziałów pozostaje aktywny dla odblokowanych rozdziałów. Ilustracje mają naniesione nazwy i znaczniki w samym obrazie; nie są one oddzielnymi interaktywnymi punktami. Pozostałe pliki zachowano dla kompatybilności.

## v5.5 — układ mobilny i animowany szlak

- Dolne menu ma cztery równe pola dotykowe, stałe wymiary ikon i odstęp na bezpieczny obszar iPhone’a. Końcówki ekranów pozostają dostępne ponad menu.
- Nagłówek rozdziału, narzędzia i liczniki są poza ilustracją. Mapy zachowują proporcję 344:660, a zdjęcia lokacji naturalną wysokość. Ujednolicono Trening, Kronikę i Rozwój bez ciężkich gradientów i kartowych ramek.
- Po zapisie znacznik porusza się wzdłuż namalowanej drogi, także przy przekraczaniu kilku rozdziałów. Animacja aktualizuje istniejący znacznik, zamiast przebudowywać interfejs w każdej klatce.
- Odkrycia lokacji i odznak pokazują się kolejno. Odznaki i dziennik wyprawy są ponownie dostępne w ekranach aplikacji. Ustawienie ograniczenia ruchu pomija animacje.
- Poziomy gest przegląda odblokowane rozdziały; przewijanie pionowe, anulowanie gestu i przesuwanie powiększonej mapy nie zmieniają rozdziału.
- Klucz `srodziemie.v1` i format treningów pozostają zgodne. Edycja zachowuje dodatkowe pola treningu (np. tętno i strefy), a import/eksport JSON zachowuje dodatkowe pola kopii, w tym plan. Import kopii jest dostępny w Ustawieniach oraz Treningu. Dawny przycisk opisany jako import Mi Fitness otwierał wyłącznie importer JSON; etykieta odpowiada teraz jego działaniu.
- Usunięto wielokrotne definicje funkcji i sprzeczne warstwy CSS; inicjalizacja następuje po deklaracji całego stanu aplikacji.

### Weryfikacja

```sh
node --check app.js
node --check sw.js
node --check tests/mobile.cjs
python -m http.server 8000 --bind 127.0.0.1
```

W drugim terminalu uruchom `node tests/mobile.cjs` z dostępnym pakietem `playwright` i przeglądarką Chromium. `BASE_URL` zmienia adres serwera; `CHROMIUM_PATH` pozwala wskazać systemową przeglądarkę. Przykład instalacji zależności poza repozytorium:

```sh
npm install --prefix ../work playwright
../work/node_modules/.bin/playwright install chromium
NODE_PATH=../work/node_modules node tests/mobile.cjs
```

Test obejmuje szerokości 320, 375, 390, 430 i 844 px, wszystkie cztery ekrany, bezpieczny obszar menu, ścieżki zasobów, stare treningi, edycję z dodatkowymi polami, eksport/import JSON, odrzucenie uszkodzonej kopii, animację przez granice rozdziałów, gesty, odznaki i ograniczenie ruchu. Emulacja dotyku w Chromium nie zastępuje końcowego sprawdzenia na fizycznym iPhonie w Safari i w trybie ekranu początkowego.

Wdrożenie to standardowa publikacja plików statycznych z `main`. W adresach CSS i JavaScript ustawiono wersję `5.5`, aby przeglądarka pobrała nowe pliki. Nie zmieniaj domeny ani ścieżki uruchomienia aplikacji podczas aktualizacji, ponieważ dane localStorage są przypisane do jej originu.
