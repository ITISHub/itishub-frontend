#!/usr/bin/env sh

# build Nuxt app
npm run generate

# navigate into the build output directory
cd dist

# custom domain
# echo 'itis-hub.ru' > CNAME

git init
git add -A

message="deploy from "$(date -u)

git commit -m "$message"

# push dist to gh-pages
git push -f git@github.com:ITISHub/itishub-frontend.git master:gh-pages

cd /
