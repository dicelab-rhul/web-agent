#!/bin/bash

if ! command -v mkcert &> /dev/null; then
    echo "mkcert could not be found. Please install it if you want Web-Agent to be served via HTTPS."
elif ! command -v openssl &> /dev/null; then
    echo "openssl could not be found. Please install it if you want Web-Agent to be served via HTTPS."
else
    echo "Generating keys and certificates..."

    # Private Key + CSR + X.509 Certificate with secp256r1.
    openssl ecparam -name secp256r1 -genkey -noout -out secp256r1-key.pem
    openssl req -new -key secp256r1-key.pem -out secp256r1.csr -config localhost.cnf -sha256
    mkcert -csr secp256r1.csr -cert-file secp256r1-cert.pem

    # Private Key + CSR + X.509 Certificate with secp384r1.
    openssl ecparam -name secp384r1 -genkey -noout -out secp384r1-key.pem
    openssl req -new -key secp384r1-key.pem -out secp384r1.csr -config localhost.cnf -sha384
    mkcert -csr secp384r1.csr -cert-file secp384r1-cert.pem

    # Private Key + CSR + X.509 Certificate with secp521r1.
    openssl ecparam -name secp521r1 -genkey -noout -out secp521r1-key.pem
    openssl req -new -key secp521r1-key.pem -out secp521r1.csr -config localhost.cnf -sha512
    mkcert -csr secp521r1.csr -cert-file secp521r1-cert.pem

    # Private Key + CSR + X.509 Certificate with Ed25519.
    openssl genpkey -algorithm ed25519 -out ed25519-key.pem
    openssl req -new -key ed25519-key.pem -out ed25519.csr -config localhost.cnf -sha256
    mkcert -csr ed25519.csr -cert-file ed25519-cert.pem

    # Private Key + CSR + X.509 Certificate with Ed448.
    openssl genpkey -algorithm ed448 -out ed448-key.pem
    openssl req -new -key ed448-key.pem -out ed448.csr -config localhost.cnf -sha256
    # Not yet supported by mkcert.
    # mkcert -csr ed448.csr -cert-file ed448-cert.pem

    echo "Done."
fi
