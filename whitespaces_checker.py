#!/usr/bin/env python3

import os


INTERESTING_EXTENSIONS = [".py", ".js", ".cjs", ".jsx", ".ts", ".tsx", ".html", ".css", ".json", ".md", ".txt", ".sh"]
DIRECTORIES_TO_IGNORE = ["node_modules", ".git"]


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
        if " \n" in lines[i]:
            print(os.path.join(d, f) + ": line " + str(i + 1) + ".")


if __name__ == "__main__":
    main()
