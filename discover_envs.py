#!/usr/bin/env python3

from typing import Dict
from json import dump

import os


def main() -> None:
    envs_dir: str = os.path.join(os.path.dirname(__file__), "envs")
    envs: Dict[str, str] = {env_name: os.path.join(os.path.basename(envs_dir), env_name) for env_name in os.listdir(envs_dir)}

    with open(os.path.abspath(os.path.join(os.path.dirname(__file__), "static", "json", "envs.json")), "w") as f:
        dump(envs, f, sort_keys=True, indent=4)

        f.write("\n")


if __name__ == "__main__":
    main()
