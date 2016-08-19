/**
 * Created by Andrew on 19.08.2016.
 */

$(document).ready(function() {
    var searchInput = $("input[type='text']"),
        remove = $('#remove');

    function clear() {
        remove.css({display: 'none'});
        $('#result')
            .css({display: 'none'})
            .html('');
    }

    searchInput.keyup(function() {
        var txt = $(this).val();
        if (txt !== '') {
            remove.css({display: 'block'});

            if (/(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/.test(txt)) {
                var onlyDomain = txt.replace(/^(http|https):\/\//, ''),
                    onlyDomain = onlyDomain.replace(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, '');

                $('#result')
                    .css({display: 'block'})
                    .html(
                        '<ul>' +
                        '<li class="search-result">' + txt + ' <span class="link">in <a href="//super‐analytics.com?q=' + txt + '" target="_blank">Phrase Overview</a></span></li>' +
                        '<li class="search-result">' + onlyDomain + ' <span class="link">in <a href="//super‐analytics.com?q=' + onlyDomain + '" target="_blank">Domain Overview</a></span></li>' +
                        '<li class="search-result">' + onlyDomain + ' <span class="link">in <a href="//super‐analytics.com?q=' + onlyDomain + '" target="_blank">URL Overview</a></span></li>' +
                        '</ul>');
            } else {
                $('#result')
                    .css({display: 'block'})
                    .html('<p class="search-result">' + txt + '</p>');
            }
        } else {
            $('#result').css({
                display: 'none'
            });
            clear();
        }
    });

    // clear input
    remove.click(function() {
        searchInput.val('');
        clear();
    });

    $('form').submit(function(e) {
        e.preventDefault();
        var searchVal = encodeURI(searchInput.val());
        console.log(searchVal);

        $.ajax({
            method: 'POST',
            type: 'POST',
            url: '//super‐analytics.com,',
            crossDomain: true,
            data: {
                formId: 'search',
                query: searchVal
            },
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

var inArray = Array.prototype.inArray = function(el) {
    var result = false;
    (arguments[1] || this).forEach(function(val) {
        if (el === val) {
            result = true;
        }
    });

    return result;
};

// console.log([10, 12, 50, 99, 9, 99].inArray(105)); // false
// console.log(inArray(1, [10, 1, 105])); // true