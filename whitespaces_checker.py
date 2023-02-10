#!/usr/bin/env python3

import os

for d, _, files in os.walk("."):
    if "node_modules" in d or ".git" in d:
        continue

    for f in files:
        if f.endswith(".mp3") or f.endswith(".png") or f.endswith(".ico"):
            continue
        else:
            lines = open(os.path.join(d, f)).readlines()

            for i in range(len(lines)):
                if " \n" in lines[i]:
                    print(os.path.join(d, f) + ": line " + str(i + 1) + ".")
