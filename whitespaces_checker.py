#!/usr/bin/env python3

import os


def main() -> None:
    for d, _, files in os.walk("."):
        if "node_modules" in d or ".git" in d:
            continue
        else:
            __scan_files(d, files)

def __scan_files(d: str, files: list[str]) -> None:
    for f in files:
        if f.endswith(".mp3") or f.endswith(".png") or f.endswith(".ico"):
            continue
        else:
            __scan_file(d, f)

def __scan_file(d: str, f: str) -> None:
    lines: list[str] = open(os.path.join(d, f)).readlines()

    for i in range(len(lines)):
        if " \n" in lines[i]:
            print(os.path.join(d, f) + ": line " + str(i + 1) + ".")


if __name__ == "__main__":
    main()
