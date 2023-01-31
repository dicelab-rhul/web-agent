#!/usr/bin/env python3

from typing import List, Dict
from json import dump

import os


def main() -> None:
    envs_dir: str = "envs"
    envs: List[str] = ["/" + os.path.join(envs_dir, subdir) for subdir in os.listdir(envs_dir)]

    to_dump: Dict[str, List[str]] = {
        "envs": envs
    }

    with open(os.path.join("res", "envs.json"), "w") as f:
        dump(to_dump, f, sort_keys=True, indent=4)

        f.write("\n")


if __name__ == "__main__":
    main()
