#!/bin/bash
# this script runs continuously to build the site

start_unixtime=$(date +%s%N)

./bundle-js.sh

end_unixtime=$(date +%s%N)

runtime_milliseconds=$(((end_unixtime-start_unixtime)/1000000))

if (( $runtime_milliseconds > 1000 )); then
    source bash-colors.sh
    echo -e "${bash_red}WARNING: build took ${runtime_milliseconds} ms. since that is longer than 1 second, its time to rewrite the framework! :(${bash_no_color}"
else
    # echo "built in ${runtime_milliseconds} ms :)"
fi