var ReqStationery = {
    url: '/Service/WebService1.asmx/',
    jsonData: '',
    init: function () {
        Common.init();

        ReqStationery.bindEvent();
        $("#reqStationery").addClass("selected");
        Common.getCategory();

    },
    bindEvent: function () {
        $("#category").on("click", '.in_border_c', function () {
            var cid = $(this).attr("cid");
            Request.Myajax(ReqStationery.url + 'getReqStationery', JSON.stringify({ "categoryId": cid }), ReqStationery.getReqStationerySuccess, ReqStationery.getReqStationeryError);
        });
        $("#cartSubmit").on("click", function () {

            ReqStationery.jsonData = ReqStationery.getJsonData();
            Request.Myajax(ReqStationery.url + 'makeRequisition', JSON.stringify({ "jsonStr": JSON.stringify(ReqStationery.jsonData) }), ReqStationery.makeRequisitionSuccess, ReqStationery.makeRequisitionError)
        });
        $("#cleanCart").on("click", function () {
            $("#cart").empty();
        });
    },
    getReqStationerySuccess: function (data) {

        var inventoryList = JSON.parse(data.d);
        ReqStationery.drawItemsTable(inventoryList);
        var itemTemplate = Handlebars.compile($("#itemTemplate").html());
        var eachTd = itemTemplate({ items: inventoryList.itemList });
        $("#addToCartTable").append(eachTd);
        $('.spinner').on('click', '.btn:first-of-type', function () {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                input.val(parseInt(input.val(), 10) + 1);
            } else {
                btn.next("disabled", true);
            }
        });
        $('.spinner').on('click', '.btn:last-of-type', function () {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                input.val(parseInt(input.val(), 10) - 1);
            } else {
                btn.prev("disabled", true);
            }
        });
        $("#addToCart").on("click", function () {
            $('tr').each(function () {
                var isCheck = $(this).find("input").is(":checked");
                var flag = 0;
                if (isCheck) {
                    var item = $("<tr>");
                    var id = $(this).find('td:eq(0)').text();
                    var des = $(this).find('td:eq(1)').text();
                    var qty = $(this).find('td:eq(3)').find("input").val();
                    $("#cart").children().each(function () {
                        if ($(this).find('td:eq(0)').text() === id) {
                            var nowQty = $(this).find('td:eq(2)').text();
                            var finalQty = parseInt(nowQty) + parseInt(qty);
                            $(this).find('td:eq(2)').text(finalQty.toString());
                            flag = 1;
                        }
                    });
                    if (flag === 0) {
                        var str = '<tr><td>' + id + '</td>' + '<td>' + des + '</td>' + '<td>' + qty + '</td>' + '</tr>'
                        $("#cart").append(str);
                    }

                }
            });
            $("#itemsModal").modal("hide");
        });
        $("#addCancel").on("click", function () {
            $("#itemsModal").modal("hide");
        });
        $("#itemsModal").modal();

    },
    getReqStationeryError: function () {
        alert("loading fail");
    },
    drawItemsTable: function (data) {
        var str = '<div class="modal fade" id="itemsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
                + '<div class="modal-dialog" style="width:40%;margin-top: 14%;">' + ' <div class="modal-content">' + '<div class="widget_header">'
                + '<button type="button" class="close" data-dismiss="modal" style="margin-top: 1%;">'
                + '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>' + '</button>'
                + '<h4 class="widget_header_title wwIcon i_16_forms">Add Item</h4>' + '</div>'
                + '<div class="line_grid" style="height: 340px; overflow-y: auto; overflow-x: hidden;">'
                + '<div class="row">'
                + '<div class="col-lg-12"style=" text-align:center;font-size:35px;color:grey;">'
                + '<p>'
                + data.itemList[0].category + '</p></div></div>'
                + '<div class="row" style="padding: 0 7%">'
                + '<div class="col-lg-12">'
                + '<div class="widget_contents noPadding twCheckbox">'
                + '<table class="tables" id="addToCartTable">'
                + '<thead><th style="width: 15%;">Item No</th><th style="width: 40%">Description</th><th>Stock</th><th>Quantity</th><th>Selected</th></thead>'
                + '</table></div></div></div></div>'
                + '<div class="modal-footer"><div class="row"> <div class="col-lg-6">'
                + '<input type="button"  id="addToCart" value="Add to Cart" class="submitIt simple_buttons" /></div>'
                + '<div class="col-lg-6"><input id="addCancel" style="float: left" type="button" value="Cancel" class="submitIt simple_buttons" /></div>'
                + '</div></div></div></div></div></div></div>';
        $("#items").html(str);
    },
    makeRequisitionSuccess: function (data) {

        alert(data.d);
        $("#reqStationery").trigger("click");
    },
    makeRequisitionError: function () {

        alert("UnKnow Error");
    },
    getJsonData: function () {
        var json = {};
        //json.user = $("#user_name").text();
        var array = [];
        json.user = "Mitch";
        var table = $("#cart").children();
        table.each(function () {
            var data = {};
            data["itemId"] = $(this).find('td:eq(0)').text();
            data["description"] = $(this).find('td:eq(1)').text();
            data["Quantity"] = $(this).find('td:eq(2)').text();
            array.push(data);
        });

        json.requisitionList = array;

        return json;
    }
}