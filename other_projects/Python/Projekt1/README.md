# Podstawy Pythona – Projekt demonstracyjny

Projekt prezentuje znajomość podstawowych elementów języka **Python 3.10+**.
Każdy moduł jest samodzielnym plikiem `.py`, który można uruchomić oddzielnie lub przez `main.py`.

## Struktura projektu

```
.
├── main.py                    ← punkt wejścia (uruchamia wszystkie moduły)
├── 01_zmienne_i_typy.py       ← int, float, str, bool, None, casting
├── 02_operatory.py            ← arytmetyczne, porównania, logiczne, bitowe
├── 03_instrukcje_i_petle.py   ← if/elif/else, match-case, for, while, break/continue
├── 04_funkcje.py              ← def, *args/**kwargs, lambda, rekurencja, dekoratory
├── 05_kolekcje.py             ← list, tuple, set, dict, comprehensions, Counter
├── 06_klasy_oop.py            ← klasy, dziedziczenie, polimorfizm, enkapsulacja, dataclass
└── 07_wyjatki_i_pliki.py      ← try/except/finally, własne wyjątki, pliki txt/csv, pathlib
```

## Uruchomienie

```bash
# Wszystkie moduły
python main.py

# Wybrane moduły (np. 1, 3 i 5)
python main.py 1 3 5

# Pojedynczy moduł
python 04_funkcje.py
```

## Omawiane zagadnienia

| # | Moduł | Zagadnienia |
|---|-------|-------------|
| 1 | Zmienne i typy | `int`, `float`, `complex`, `str`, `bool`, `None`, konwersja typów, wielokrotne przypisanie |
| 2 | Operatory | Arytmetyczne, porównania, logiczne, bitowe, pierwszeństwo operatorów |
| 3 | Instrukcje i pętle | `if/elif/else`, `match/case`, `for`, `while`, `break`, `continue`, `else`, list comprehension |
| 4 | Funkcje | Parametry domyślne, `*args`, `**kwargs`, lambda, `map`/`filter`, rekurencja, domknięcia, dekoratory |
| 5 | Kolekcje | `list`, `tuple`, `set`, `dict`, operacje teorii zbiorów, dict comprehension, `Counter` |
| 6 | Klasy OOP | `__init__`, dziedziczenie, `super()`, polimorfizm, `@property`, `@classmethod`, `@staticmethod`, `dataclass` |
| 7 | Wyjątki i pliki | `try/except/else/finally`, własne wyjątki, pliki tekstowe, CSV, `pathlib` |

## Wymagania

- Python **3.10** lub nowszy (ze względu na `match/case`)
- Brak zewnętrznych bibliotek – wyłącznie biblioteka standardowa
