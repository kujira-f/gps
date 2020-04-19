if( navigator.geolocation )
{
	navigator.geolocation.getCurrentPosition(

		function( position )
		{
			var data = position.coords ;

			// データの整理
			var lat = Math.floor(data.latitude) ;
			var lng = Math.floor(data.longitude) ;
			var alt = data.altitude ;

			document.getElementById( 'result' ).innerHTML = '<dl><dt>緯度</dt><dd>' + lat + '</dd><dt>経度</dt><dd>' + lng + '</dd><dt>高度</dt><dd>' + alt + '</dd></dl>' ;
		},

		function( error )
		{
			var errorMessage = "エラーが発生しました";
			alert( errorMessage ) ;
		} ,

		{
			"enableHighAccuracy": true,
			"timeout": 8000,
			"maximumAge": 2000,
		}

	) ;
}
