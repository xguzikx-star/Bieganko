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
