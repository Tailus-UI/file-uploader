# How to build a custom file uploader

Build a file uploader for changing background.

Require Tailwind Css 2.2.16

    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

Enable JIT Compiler

    module.exports = {
        mode: 'jit',
        purge: {
            content : ['./templates/**/*.html'],
            safelist : []
        }
    }