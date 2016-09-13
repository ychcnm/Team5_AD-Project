var Common = {
    url: '/Service/WebService1.asmx/',
    init:function(){
        Common.bindEvent();
    },
    getCategory: function () {
        Request.Myajax(Common.url + 'getCategory', {}, Common.getCategorySuccess, Common.getCategoryError);
    },
    bindEvent: function () {
        $("#category").on("mouseover", '.in_border_c', function () {
            $(this).css("border", "2px solid orange");
        }).on("mouseout", '.in_border_c', function () {
            $(this).css("border","");
        });
    },
    getCategorySuccess: function (data) {
        Common.drawCategory(data.d);
        $("#category_pin").trigger("click");
    },
    getCategoryError: function () {
        alert("load fail");
    },
    drawCategory: function (parameter) {
        $("#category").empty();
        var data = jQuery.parseJSON(parameter);
        for (var i = 0; i < 3; i++) {
            var row = $("<div class='row'>");
            var element = $("<div class='col-lg-12'>");
            var ul = $("<ul class='category_view'>");
            for (var k = 0 ; k < 6; k++) {
                var index = (i * 6) + k;
                var li = $("<li>");
                var out = $("<div class='out_border_c'>");
                var inner = $("<div class='in_border_c'>").css("background", "url('" + data[index].imgUrl + "') no-repeat scroll transparent");
                inner.attr("cId", data[index].categoryID);
                var p = $("<p>").text(data[index].categoryName);
                inner.append(p);
                out.append(inner);
                li.append(out);
                ul.append(li);
            }
            element.append(ul);
            row.append(element);
            $("#category").append(row);
        }
    }
}