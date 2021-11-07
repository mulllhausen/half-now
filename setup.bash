#!/bin/bash

if [[ "$(uname -m)" != "x86_64" ]]; then
    echo -e "you are not on a 64 bit system. this script needs updating to\n" \
    " handle installation on your machine"
    exit 1
fi

if [[ $(id -u) != 0 ]]; then
    echo "you must run this script as root (eg. using sudo)"
    exit 1
fi

# install nodejs v14 (implicitly includes npm)
cd /tmp
curl -fsSL https://deb.nodesource.com/setup_lts.x -o nodesource_setup_14_lts.sh
# add the ppa under /etc/apt/sources.list.d/
bash nodesource_setup_14_lts.sh
apt-get install -y nodejs

# install the latest version of npm
npm install -g npm

# https://github.com/sveltejs/kit
# npm i -g pnpm

# https://kit.svelte.dev/
npm init svelte@next .
npm install
# npm run dev -- --open

npm install -g firebase firebase-tools

# run the following not as root

#firebase login
#firebase init hosting --json
