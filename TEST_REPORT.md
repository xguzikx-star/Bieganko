# Weryfikacja układu map — 5.13

Data: 22 października 2026 r. Baza: aktualne `main`, `3778ce9`.

## Przyczyna i rozwiązanie

Nagłówek był absolutnie pozycjonowany nad ilustracją. Warstwy gradientów w `style.css` i w bloku v11 w `index.html` przykrywały górę map; ich wysokość i odstępy zależały od wysokości ekranu, zamiast od rzeczywistej wysokości tekstu. Dodatkowo obraz był absolutnie pozycjonowany w kontenerze o narzuconych proporcjach.

Nagłówek i ilustracja zajmują teraz kolejne wiersze zwykłego układu dokumentu. Mapa jest obrazem `width:100%;height:auto`; jej wysokość wynika z pliku, a atrybuty wymiarów rezerwują prawidłowe miejsce przed pobraniem obrazu. Rozdział I: 864×1536, pozostałe: 1024×1536. Mapy zajmują pełną szerokość widoku, także przy 768 px. Usunięto nakładające się definicje nagłówka i inline `<style>`; docelowe reguły są w `style.css`.

Gradient ma wyłącznie rolę dekoracyjną: `min(4vw,24px)` na samej krawędzi ilustracji, poniżej tekstu. Kończy się przed najwyższymi punktami trasy. Nie wpływa na wymiary ani współrzędne obrazu. Domyślnie kontenery nie przycinają mapy. Dopiero świadome przybliżenie włącza przycinanie powiększonego widoku i wyłącza gradient; reset przywraca całą ilustrację i pionowe przewijanie strony. Obraz i punkty są transformowane razem. Zachowano rozmiary i rodziny czcionek nagłówka, treści, obrazy źródłowe, dolną nawigację i mechanikę treningów. Wersje CSS i JS w `index.html`: `5.13`.

## Wyniki

- `CHROMIUM_PATH=/usr/bin/chromium node tests/mobile.cjs`: **489/489 PASS**, Chromium, emulacja telefonu i dotyku; brak nieobsłużonych błędów JavaScript.
- Rozdziały I–IV × szerokości 320, 375, 390, 430, 768 px: naturalne proporcje, pełna szerokość, nagłówek poza mapą, brak przycinania i poziomego przepełnienia, gradient poza punktami trasy, zachowane rozmiary tekstu, poprawne współrzędne wszystkich punktów.
- Każda mapa: górna i dolna krawędź osiągalne przewijaniem nad nawigacją; przybliżenie, przesunięcie, reset i otwieranie punktu trasy działają.
- Istniejące regresje: układ pozostałych sekcji, nawigacja, symulowany dolny safe area 34 px, zasoby HTTP, import/eksport, zachowanie danych treningowych, edycja, animacja przejść między rozdziałami, gesty, blokowanie przyszłych rozdziałów, ograniczony ruch i odznaki: PASS.
- Kontrola wizualna rozdziału III przy 390 px: widoczne Lothlórien i Rauros; krótki gradient na krawędzi mapy.
- `node --check app.js`, `node --check sw.js`, `node --check tests/mobile.cjs`, `git diff --check`: PASS.

## Safari / iOS — ograniczenie weryfikacji

Nie wykonano testu na fizycznym iPhonie ani w Safari. Próba instalacji WebKit zakończyła się HTTP 403 „Domain forbidden” z powodu polityki sieciowej środowiska. Emulacja mobilna Chromium i symulacja safe area nie zastępują tego testu. Układ nie wymaga `:has()`, obliczania wysokości mapy z `vh` ani dopasowania absolutnie pozycjonowanego obrazu do rozmiaru kontenera.

## Chronicle redesign — 2026-10-22

- `node --check app.js` and `git diff --check`: passed.
- Existing `tests/mobile.cjs`: 489 checks passed in Chromium with touch/mobile emulation, including map layouts, workout persistence, editing, JSON backup/restore and reduced motion.
- `tests/chronicle.cjs`: tests 320, 375, 390, 430 and 768 px; all 20 discoveries, descending mileage, accordion and keyboard interaction, intrinsic expanded heights, long narrative/notes, no horizontal overflow, chronological discovery dates, no invented Hobbiton date, unchanged stored data, empty history, statistics after addition/deletion, concealed locked artwork, journal pagination and bottom navigation clearance.
- Visual review: 390 px screenshot, dark green/ivory/gold atlas with large artwork and compact summaries.
- Asset query versions updated to 5.14. Existing service worker does not cache requests.
- Limitation: Safari/iOS was not available for a device test. Implementation uses native buttons, ARIA, intrinsic image dimensions and CSS grid expansion with reduced-motion support; no external runtime dependencies were added.

## Kronika, analiza kondycji i obsługa mapy — 5.15 (22.10.2026)

Baza: `ec24b3d`, zgodna ze zdalnym `main` podczas rozpoczęcia prac.

- Atlas: ilustracja na całą szerokość przycisku, wspólny kadr 16:9, pełna grafika w rozwinięciu. Skrót opisu znika po rozwinięciu; pełna treść i data odkrycia pozostają dostępne. Usunięto limit 140 px i boczny układ miniatur.
- Mapa: przyczyną dodatkowego odstępu był osobny wiersz nagłówka z samymi ustawieniami. Przycisk ustawień jest teraz poza przepływem, przy górnej bezpiecznej krawędzi. Tekst rozdziału nadal poprzedza obraz w normalnym przepływie. Rozmiary tekstów i naturalne proporcje czterech map pozostają zachowane.
- Przycisk „+ Dodaj aktywność” pod mapą i kilometrażem uruchamia istniejący formularz. Pole `minutes` już istniało i pozostaje opcjonalne. Nie zmieniono kluczy localStorage ani grafik źródłowych.
- Rozwój: pięć obszarów, okresy 4/12 tygodni i cała historia, rzeczywiste kilometry, ważone tempo/prędkość, grupy podobnych aktywności, kalendarz, serie i rekordy. Porównanie objętości opiera się na pełnych tygodniach. Progi wymaganej liczby danych i informacyjnego wzrostu 30% są opisane w interfejsie. Braki czasu nie są interpretowane jako zerowy czas. Brak oceny punktowej lub estymacji VO₂max.
- `tests/mobile.cjs`: **489/489 PASS**, Chromium i emulacja dotyku, cztery mapy przy 320, 375, 390, 430 i 768 px; również animacje, nawigacja, import/eksport, edycja i zachowanie pól dawnych danych.
- `tests/chronicle.cjs`: **56/56 PASS**, pięć wymaganych szerokości, rozwijanie, daty odkryć, niepełna historia i aktualizacje.
- `node --test tests/fitness.cjs`: **9/9 PASS**. Ważenie tempa, brak czasu, brak danych, pełne bloki tygodniowe, minimalna liczba obserwacji, zmiana roku i DST, błędne daty, rekordy po edycji/usunięciu, grupowanie tempa i brak mutacji wejścia.
- `tests/fitness-mobile.cjs`: **56/56 PASS**, pięć szerokości, wszystkie okresy, wykresy, atlas na pełną szerokość, pełna ilustracja, brak powielonego widocznego opisu, zapis z mapy, edycja oraz usuwanie i przeliczenie statystyk.
- Brak fizycznego iPhone’a/Safari w środowisku. Emulacja Chromium nie stanowi testu Safari iOS.

- Kontrola wizualna aktualnych zrzutów 390 px: mapa rozpoczyna się pod krótkim nagłówkiem, atlas wypełnia szerokość sekcji, panel analiz ma kompaktowe wskaźniki i czytelne wykresy.
- Próba instalacji WebKit 26.5: pobieranie zablokowane HTTP 403 `Domain forbidden`; test WebKit nie został wykonany.
