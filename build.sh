#!/bin/bash
rm -rf AgfaJenkinsFirefoxAddon.zip
7z a -tzip AgfaJenkinsFirefoxAddon.zip -r content_scripts icons popup *.js *.html *.png *.css README.md LICENSE manifest.json
