#!/usr/bin/env bash
mkcert httpbin.org
cp "$(mkcert -CAROOT)"/rootCA.pem .
