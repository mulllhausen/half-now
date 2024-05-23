#!/bin/bash

# merge all files in the js-bundle dir into 1 file

timestamp_filename=".js-bundle-last-run.txt"
bundle_js_file="bundle.js"
path_to_js_bundle_dir="../js-bundle/"
output_file="../${bundle_js_file}"
all_js_files="$(ls -1 $path_to_js_bundle_dir)"

if [ -f "$timestamp_filename" ]; then
    # https://stackoverflow.com/questions/6964747
    any_files_changed="$(find ../js-bundle/ -newer $timestamp_filename -exec basename {} \;)"
else
    # running for the first time
    any_files_changed="$all_js_files"
fi

if [[ -n "$any_files_changed" ]]; then
    source bash-colors.sh
    echo -e "${bash_green}files changed:${bash_no_color}\n$any_files_changed"
else
    # echo "no files changed, so $output_file was not updated"
    exit 0
fi

echo > $output_file

for file in $all_js_files; do
    # remove comments from each js file and append the result to the merged file
    echo "// original file: $file" >> $output_file
    echo >> $output_file
    cat "${path_to_js_bundle_dir}${file}" >> $output_file
    # delete comments
    # sed \
    #     -e 's://.*::g' \
    #     -e 's:/\*.*\*/::g' \
    #     -e '/\/\*/,/\*\//d' \
    #     "${path_to_js_bundle_dir}${file}" >> $output_file
    echo >> $output_file
    echo >> $output_file
done

source bash-colors.sh
echo -e "${bash_green}rebuilt $output_file${bash_no_color}"

echo "the timestamp of this file is the last time build.sh was run" > $timestamp_filename
echo "delete this file to rebuild all" >> $timestamp_filename
touch $timestamp_filename