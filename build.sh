#!/bin/sh

if [ -z ${DENO+x} ];
then DENO=deno;
fi

$DENO run --allow-read --allow-write --allow-net --import-map=import_map.json --unstable build.mjs
