#!/usr/bin/env sh

# build Nuxt app
npm run generate

# navigate into the build output directory
cd dist

# custom domain
echo 'itis-hub.ru' > CNAME

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

timestamp=$(date + '%H:%M %m/%d/%Y')

git init
git add -A
git commit -m "deploy from ${timestamp}"

# push dist to gh-pages
git push -f git@github.com:ITISHub/itishub-frontend.git master:gh-pages

cd -
