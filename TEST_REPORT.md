# Raport weryfikacji Śródziemia 5.5

Data: 22 października 2026 r.
Gałąź robocza: `main`, baza `46746bc`.

## Wynik

**209/209 sprawdzeń zakończonych powodzeniem** w Chromium z emulacją telefonu i dotyku. Brak nieobsłużonych błędów JavaScript podczas scenariuszy.

- `node --check app.js`, `node --check sw.js`, `node --check tests/mobile.cjs`: poprawna składnia.
- `git diff --check`: brak błędów białych znaków.
- Układ Mapa / Trening / Kronika / Rozwój: 320×568, 375×667, 390×844, 430×932 i 844×390 px. Brak poziomego przepełnienia; cztery dostępne przyciski nawigacji; końcówka treści ponad menu.
- Bezpieczny obszar dolny: dodatkowe 34 px sprawdzone przez zmienną CSS używaną przez `env(safe-area-inset-bottom)`.
- Opis i sterowanie poza mapą; zgodność proporcji ilustracji z oryginałem 344×660.
- Wszystkie używane mapy, ilustracje lokacji, odznaki oraz lokalne zasoby HTML: poprawne nazwy i odpowiedzi HTTP.
- Dotychczasowe treningi w `srodziemie.v1`: zachowane wszystkie pola po uruchomieniu.
- Eksport i ponowny import JSON: zachowane treningi, plan i dodatkowe metadane. Uszkodzona kopia nie zmienia treningów.
- Edycja treningu: zachowane pola spoza formularza, m.in. tętno, strefy i pola rozszerzeń.
- Zapis nowego treningu: dopisany trening, ruch znacznika między klatkami, przejście I → II oraz przejście przez kilka rozdziałów do IV.
- Odkrycie lokacji i pierwsza odznaka: widoczne ekrany nagród; kolekcja 18 odznak i szczegóły.
- Gesty poziome: wszystkie odblokowane rozdziały; brak dostępu do zablokowanych. Pionowy i anulowany gest oraz przesuwanie powiększonej mapy nie zmieniają rozdziału.
- Nawigacja podczas animacji: bezpiecznie kończy ruch bez utraty treningu.
- Ograniczenie ruchu: wyłączona animacja podróży i zachowane zdobyte nagrody.

## Odtworzenie

Z katalogu repozytorium uruchom serwer `python -m http.server 8000 --bind 127.0.0.1`, a następnie `node tests/mobile.cjs` z zainstalowanym Playwright i Chromium. W tej sesji użyto `CHROMIUM_PATH=/usr/bin/chromium`. Szczegóły konfiguracji zawiera README.

## Granice weryfikacji i wdrożenie

Nie wykonano testu w Safari/WebKit ani na fizycznym iPhonie. Bezpieczny obszar sprawdzono poprzez symulację wartości CSS, a nie rzeczywisty odczyt z urządzenia. Przed publikacją warto sprawdzić Safari i aplikację dodaną do ekranu początkowego, szczególnie zachowanie przy otwartej klawiaturze.

Zmiany są przygotowane w lokalnym `main`. Publikacja GitHub Pages nie jest częścią wykonanego testu. Zachowanie adresu aplikacji zachowuje dotychczasowy origin localStorage; format treningów i klucz danych nie wymagają migracji. CSS i JS otrzymały parametr wersji `5.5`.
