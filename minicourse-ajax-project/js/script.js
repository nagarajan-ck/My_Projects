
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
	var $street = $('#street')
	var $city = $('#city')

    // clear out old data before new request
    //$wikiElem.text("");
    //$nytElem.text("");
	var streetStr = $street.val();
	var cityStr = $city.val();
	var bgi='http://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
	bgi = bgi+streetStr+', '+cityStr;
	bgi= bgi.replace(/ /g, "%20");

	img = '<img class="bgimg" src=' + bgi + '>'
	$body.append(img);
    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
