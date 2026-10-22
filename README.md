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
