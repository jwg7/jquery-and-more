'use strict'
// create a div
let div = $('<div></div>')
let body = $('body')
$('body').append('<div>Hello World</div>')

$('div').on('click', function(){
    alert('Hello world')
})

