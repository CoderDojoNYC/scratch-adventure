$(document).ready(function() {
    var terms = {
        'Scratch': '<p>Scratch is a programming language and online community where you can create your own interactive stories, games, and animations.</p>' +
            '<img src="img/editor2-sm.png"></img>',

        'Block': 'A Block is _.',
        'Sprite': 'A Sprite is _.',
        'Backdrop': 'A Backdrop is _.',

        'Tips': null,
        'Blocks Toolbox': null,
        'Scripts Area': null,
        'Stage': null
    };

    $('.vocab-term').tooltip({
        html: true,

        title: function() {
            return terms[$(this).text()];
        }
    });
});
