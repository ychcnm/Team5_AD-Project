var Stationery = {
    url: '/Service/WebService1.asmx/',
    jsonData: '',
    init: function () {
        Common.init();
        Block.show();
        $("#stationery").addClass("selected");
        Common.getCategory();
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
            Block.show();
            var cid = $(this).attr("cid");
            Stationery.jsonData = Stationery.getJsonData();
            Stationery.jsonData.categoryId = cid;
            Request.Myajax(Stationery.url + 'getStationery', JSON.stringify(Stationery.jsonData), Stationery.getStationerySuccess, Stationery.getStationeryError);
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
            Block.show();
            var index = $(this).attr("index");
            Stationery.jsonData.page = index;
            Request.Myajax(Stationery.url + 'getStationery', JSON.stringify(Stationery.jsonData), Stationery.getStationerySuccess, Stationery.getStationeryError);
        })
    },
    getStationerySuccess: function (data) {
        $("tbody").remove();
        var json = JSON.parse(data.d);
        var count = json.count;
        var itemTemplate = Handlebars.compile($("#itemTemplate").html());
        var eachTd = itemTemplate({ items: json.itemList });
        $(".tables").append(eachTd);
        var first = parseInt(Stationery.jsonData.page) * parseInt(Stationery.jsonData.amount) + 1;
        var last = first + parseInt(Stationery.jsonData.amount) - 1;
        if (last > count) { last = count; }
        $("#DataTables_Table_0_info").html("Showing " + first + " to " + last + " of " + count + " items");
        var amount = parseInt(Stationery.jsonData.amount);
        var current = parseInt(Stationery.jsonData.page);
        Page.compliePage(count, amount, current);
        Block.close();

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
    }
}