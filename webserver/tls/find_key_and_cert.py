#!/usr/bin/env python3

import os


def main() -> None:
    current_dir: str = os.path.dirname(os.path.realpath(__file__))
    active_dir: str = os.path.join(current_dir, "active")
    prefixes: list[str] = ["secp256r1", "ed25519", "secp384r1", "ed448", "secp521r1"]

    if os.path.exists(path=active_dir) and not os.path.isdir(s=active_dir):
        raise IOError(f"{active_dir} is not a directory.")
    elif not os.path.exists(path=active_dir):
        os.mkdir(path=active_dir)

    for prefix in prefixes:
        key_file_name: str = f"{prefix}-key.pem"
        cert_file_name: str = f"{prefix}-cert.pem"
        key_file_path: str = os.path.join(current_dir, key_file_name)
        cert_file_path: str = os.path.join(current_dir, cert_file_name)

        if os.path.isfile(path=key_file_path) and os.path.isfile(path=cert_file_path):
            __unlink_if_present(path=os.path.join(active_dir, "key.pem"))
            __unlink_if_present(path=os.path.join(active_dir, "cert.pem"))
            __link_if_not_present(src=key_file_path, dst=os.path.join(active_dir, "key.pem"))
            __link_if_not_present(src=cert_file_path, dst=os.path.join(active_dir, "cert.pem"))

            break

def __unlink_if_present(path: str) -> None:
    if os.path.islink(path=path):
        os.unlink(path=path)

def __link_if_not_present(src: str, dst: str) -> None:
    if not os.path.exists(path=dst) and os.path.exists(path=src):
        os.symlink(src=src, dst=dst)

if __name__ == "__main__":
    main()
