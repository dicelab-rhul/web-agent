#!/usr/bin/env python3

from re import match

import os


INTERESTING_EXTENSIONS = [".py", ".cjs", ".jsx", ".ts", ".tsx", ".html", ".css", ".json", ".md", ".txt", ".sh", ".gitignore"]
DIRECTORIES_TO_IGNORE = ["node_modules", ".git"]
PATTERNS = [r"[ \t]+$", r"[ \t]+\n$"]


def main() -> None:
    for d, _, files in os.walk("."):
        if any(ignored in d for ignored in DIRECTORIES_TO_IGNORE):
            continue
        else:
            __scan_files(d, files)


def __scan_files(d: str, files: list[str]) -> None:
    for f in files:
        if any(f.endswith(ext) for ext in INTERESTING_EXTENSIONS):
            __scan_file(d, f)


def __scan_file(d: str, f: str) -> None:
    lines: list[str] = open(os.path.join(d, f)).readlines()

    for i in range(len(lines)):
        if any(match(pattern, lines[i]) for pattern in PATTERNS) or __multiple_spaces_within_line(lines[i].strip()):
            print(os.path.join(d, f) + ": line " + str(i + 1) + ".")


def __multiple_spaces_within_line(line: str) -> bool:
    line = line.replace(r"\"\s+\"", "").replace(r"'\s+'", "")

    for i in range(len(line) - 1):
        if line[i] == " " and line[i + 1] == " " and not line[i + 1:].strip().startswith(("//", "/*", "#")):
            return True
    return False


if __name__ == "__main__":
    main()
