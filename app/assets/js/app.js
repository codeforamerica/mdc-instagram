$(document).ready(function() {
	
	console.log('ready to go');
	
	//api keys
	var accessToken = 'fb2e77d.47a0479900504cb3ab4a1f626d174d2d'; // Instagram's. Get yours.
	var clientID = '1e31ec2d23d0411c94d896c5f5d75886'; // registered to mdc-instagram
	
	var searchHashtag;
	
	$('#submitHashtag').click(function() {
		
		searchHashtag = $('#searchTag').val();
		console.log(searchHashtag);	
		
		searchInstagram(searchHashtag);
		
	})
	
	/*
		https://api.instagram.com/v1/tags/coffee/media/recent?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=callbackFunction
		https://api.instagram.com/v1/media/popular?client_id=CLIENT-ID
		https://api.instagram.com/v1/tags/codeforamerica/media/recent?client_id=1e31ec2d23d0411c94d896c5f5d75886 
		http://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/
		//data(loop)link
		
		http://api.instagram.com/oembed?
		
	*/
	
	function searchInstagram(tag) {
		
		console.log('searching instagram for this hashtag:', tag, searchHashtag);
		
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + clientID,
			success: function(data) {
				
				//console.log(data);   
				for(var i = 0; i < data.data.length; i++) {
					
					console.log(data.data[i]);
					//filter for location -- if returns null, don't call embedInstagram
					
					if(data.data[i].location != null){
						
						console.log(data.data[i].location);
						
						createMarkers(data.data[i]);
						//embedInstagram(data.data[i].link);
						
					}
					
				}
				
			}
		});
		
		
	}
	
	function embedInstagram(img) {
		
		$.ajax({
			
			type:"GET",
			dataType: "jsonp",
			omitscript:true,
			url: "http://api.instagram.com/oembed?url=" + img,
			success:function(data) {
				
				console.log(img);
				//console.log(data.html);
				window.instgrm.Embeds.process();
				$('#photoHolder').append(data.html);
			},
			error:function() {
				
				console.log('uhoh, something failed!');
			}
		})
	}
	
	//25.7667° N, 80.2000° W
	
	var map = L.map('map').setView([25.776, -80.2], 11);
	L.tileLayer('http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
}).addTo(map);


//var marker = L.marker([51.5, -0.09]).addTo(map);

	function createMarkers(obj) {
		
		var marker = L.marker([obj.location.latitude, obj.location.longitude]).addTo(map);
			marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br><img src='" + obj.images.low_resolution.url + "'>", this, {maxWidth:400});
			marker.update();
			
		console.log('markers created');
	}
	

}) // close $(document).ready					
