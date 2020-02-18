/**
 * @package WordPress
 * @subpackage Theme
 */
;
/* QuickTags */
quicktagsL10n = {
    quickLinks: "(Quick Links)",
    wordLookup: "Enter a word to look up:",
    dictionaryLookup: "Dictionary lookup",
    lookup: "lookup",
    closeAllOpenTags: "Close all open tags",
    closeTags: "close tags",
    enterURL: "Enter the URL",
    enterImageURL: "Enter the URL of the image",
    enterImageDescription: "Enter a description of the image"
};

/*ready*/
(function ($, window, undefined) {
    $(function () {
        // load comments
        var $comments = $('#comments');
        if ($comments.length) {
            var postId = $('h1.title').attr('data-id');

            var updateComments = function() {
                // quick tags
                // clean default buttons settings
                edButtons = [];
                // reinitialization of QTags
                new QTags({
                    id:'comment',
                    buttons:''
                });
                // reset toolbar
                QTags.addButton('strong', 'b', '<strong>', '</strong>', 'b');
                QTags.addButton('del', 'del', '<del>', '</del>', 's');
                QTags.addButton('block', 'quote', '<blockquote>', '</blockquote>', 'q');
                QTags.addButton('php', 'PHP', '[php]', '[/php]', 'p');
                QTags.addButton('html', 'HTML', '[html]', '[/html]', 'h');
                QTags.addButton('css', 'CSS', '[css]', '[/css]', 'c');
                QTags.addButton('js', 'JS', '[js]', '[/js]', 'j');

                // syntax highlighter
                if (SyntaxHighlighter != undefined)
                    SyntaxHighlighter.highlight();
            };

            // push[Ok]
            if (window.commentsLoad) {
                return;
            } else {
                window.commentsLoad = true;
                $comments.load('/?theme-future=comments&p=' + postId, updateComments);    
            }
            // before
            /*$comments.load('/?theme-future=comments&p=' + postId, updateComments);*/
            // end of push[Ok]

            $comments.delegate('nav a', 'click', function () {
                var cpage = $(this).attr('cpage');
                $comments.load('/?theme-future=comments&p=' + postId + '&cpage=' + cpage, updateComments);
                return false;
            });

            $comments.delegate('#commentform', 'submit', function () {
                /*validate here*/
                var cpage = $('.commentlist').attr('cpage');
                $comments.find('div.error').remove();

                $('#commentform').addClass('loading');

                $.ajax({
                    url:'/?theme-future=comments&p=' + postId + '&cpage=' + cpage,
                    data:$(this).serialize(),
                    dataType:'json',
                    method:'POST',
//                    error:function(data) {
//                        console.log(data);
//                    },
                    success:function (data) {
                        if (data.status === 'KO') {
                            var $div = $('<div class="error">' + data.message + '</div>');
                            $('#reply-title').after($div);
                            $div.fadeIn();
                            $div.click(function () {
                                $(this).fadeOut();
                            });
                        } else {
                            $('#respond').find('div.error').fadeOut();
                            $comments.load('/?theme-future=comments&p=' + postId, updateComments);
                        }
                    },
                    complete:function() {
                        $('#commentform').removeClass('loading');
                    }
                });
                return false;
            });

            // spoiler
            $('.entry .spoiler > strong').click(function(){
                // you can't use next(), because WP insert tag <p> for new line
                $(this).parent().find('div').toggle();
            });
        }
    });
})(jQuery, window);

