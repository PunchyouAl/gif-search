var gifHolder = document.getElementById('gifMain');

var urlArr = [];
var gifMainHtml;




$.ajax({
    type: 'GET',
    url: "https://api.giphy.com/v1/gifs/search?q=hannah&api_key=uOID7M4l5siqJ0fiDeZaesIoBFxQS2UN",
    //            contentType: 'application/json',
    //            dataType: 'json',
    //            responseType: 'application/json',
    //            xhrFields: {
    //                withCredentials: false
    //            },
    success: function (data) {
        console.log(data);


        ///


        var imageArr = data.data;
        
        
        
        var urlArr = [];
        var html = null;

        for (var i = 0; i < imageArr.length; i++) {
            urlArr.push(imageArr[i].images.fixed_width.url);
        }

        


        for (var i = 0; i < imageArr.length; i++) {
            html = `<div class="gifInner"><img src="${urlArr[i]}"></div>`;
            console.log(html);
            $('#gifMain').append(html);
        };

        
        
        
        
        ///


    },
    error: function (error) {
        console.log("FAIL....=================");
    }
});


//
//$.get({
//    url: "https://api.giphy.com/v1/gifs/search?q=cat+funny&api_key=uOID7M4l5siqJ0fiDeZaesIoBFxQS2UN",
//    success: function (data) {
//
//        var imageArr = data.data;
//        var urlArr = [];
//
//        for (var i = 0; i < imageArr.length; i++) {
//            urlArr.push(imageArr[i].embed_url);
//        }
//
//
//
//        for (var i = 0; i < imageArr.length; i++) {
//            var html = `<div class="col-md-4"><img src="${urlArr[i]}"></div>`;
//
//            console.log(urlArr);
//
//            $('#gifMain').append(html);
//        }
//
//
//
//    },
//    error: function (error) {
//        console.log(error);
//    }
//});
//
//function populateGifArea(url) {
//
//}