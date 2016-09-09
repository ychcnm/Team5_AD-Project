var Stationery = {
    url: '/Service/WebService1.asmx/',
    jsonData: '',
    init: function () {
        $("#stationery").addClass("selected");
        Request.Myajax(Stationery.url + 'getCategory', {}, Stationery.getCategorySuccess, Stationery.getCategoryError);
        Stationery.jsonData = Stationery.getJsonData();
        Request.Myajax(Stationery.url + 'getStationery', JSON.stringify(Stationery.jsonData), Stationery.getStationerySuccess, Stationery.getStationeryError);
        Stationery.bindEvent();
    },
    bindEvent: function () {
        $("select").on("click", "option", function () {
            var selected = $(this).text();
            $(".selector > span").html(selected);
        });
        $("#category").on("click", '.in_border_c', function () {
            var cid = $(this).attr("cid");
            Stationery.jsonData = Stationery.getJsonData();
            Stationery.jsonData.categoryId = cid;
            Request.Myajax(Stationery.url + 'getStationery', JSON.stringify(Stationery.jsonData), Stationery.getStationerySuccess, Stationery.getStationeryError);
        }).on("mouseover", '.in_border_c', function () {
            $(this).css("border-radius", "4px");
        }).on("mouseout", '.in_border_c', function () {
            $(this).css("border-radius", "34px");
        });
        $("#category_pin").on("click", function () {
            $("#category").toggle();
            if ($("#category").is(":hidden")) {
                $("#item_list").css("margin-top", "16%");
            } else {
                $("#item_list").css("margin-top", "2%");
            }
        });
        $(".tables").on("mouseover", '.i_edit', function () {
            $(this).css("background-position-y", "-20px");
        }).on("mouseout", ".i_edit", function () {
            $(this).css("background-position-y", "0px");
        }).on("click", ".i_edit", function () {
            var itemId = $(this).parent().parent().children("td:first-child").text();
            Request.Myajax(Stationery.url + 'getEditItem', JSON.stringify({ "itemId": itemId }), Stationery.getEditItemSuccess, Stationery.getEditItemError);
        });
        $("#pagePlace").on("click", "a", function () {
            var index = $(this).attr("index");
            Stationery.jsonData.page = index;
            Request.Myajax(Stationery.url + 'getStationery', JSON.stringify(Stationery.jsonData), Stationery.getStationerySuccess, Stationery.getStationeryError);
        })
    },
    getCategorySuccess: function (data) {
        Stationery.drawCategory(data.d);
        $("#category_pin").trigger("click");
    },
    getCategoryError: function () {
        alert("load fail");
    },
    getStationerySuccess: function (data) {
        var json = JSON.parse(data.d);
        var count = json.count;
        var itemTemplate = Handlebars.compile($("#itemTemplate").html());
        var eachTd = itemTemplate({ items: json.itemList });
        $(".tables").html(eachTd);
        var first = parseInt(Stationery.jsonData.page) * parseInt(Stationery.jsonData.amount) + 1;
        var last = first + parseInt(Stationery.jsonData.amount) - 1;
        if (last > count) { last = count; }
        $("#DataTables_Table_0_info").html("Showing " + first + " to " + last + " of " + count + " items");
        var amount = parseInt(Stationery.jsonData.amount);
        var current = parseInt(Stationery.jsonData.page);
        Page.compliePage(count, amount, current);

    },
    getStationeryError: function () {
        alert("load fail");
    },
    getJsonData: function () {
        var json = {};
        json.page = 0;
        json.amount = 4;
        json.categoryId = 0;
        return json;
    },
    getEditItemSuccess: function (data) {
        $('#myModal').modal()
    },
    getEditItemError: function () {
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