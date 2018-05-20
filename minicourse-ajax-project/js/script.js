
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
	$greeting.text("So you wanna live at " + streetStr + ", " + cityStr +"?");
	var bgi='http://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
	bgi = bgi+streetStr+', '+cityStr;
	bgi= bgi.replace(/ /g, "%20");

	img = '<img class="bgimg" src=' + bgi + '>'
	$body.append(img);
    // load streetview

    // YOUR CODE GOES HERE!
	
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({'api-key': "fda9404d908a42dc91872b8410bd6bd6",'q': streetStr + ", " + cityStr });
	
	$.getJSON(url, function(data) {
		articlesArray= data['response']['docs'];
		console.log(articlesArray[0]);
		$nytElem.text("");
		for (i=0;i<articlesArray.length; ++i){
			$nytElem.append('<a href = "'+ articlesArray[i].web_url +'">'+ articlesArray[i].headline.main+"</a>");
			$nytElem.append("<br>");
			$nytElem.append(articlesArray[i].snippet);
			$nytElem.append("<br><br>");
		}
	});

    return false;
};

$('#form-container').submit(loadData);
