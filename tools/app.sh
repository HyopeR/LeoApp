#!/bin/bash
tsc --project tsconfig.app.json && tsc-alias --project tsconfig.app.json $@
