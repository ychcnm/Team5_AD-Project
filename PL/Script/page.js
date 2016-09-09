var Page = {
    compliePage: function (count, volumn, current) {
        var sign = 0;
        if (count % volumn === 0) {
            sign = 1;
        }
        var pageNum = (count / volumn) + 1 - sign;
        var bar = $("<span>");
        for (var i = 1; i <= pageNum; i++) {
            if (i < 3 || i > pageNum - 3) {
                if (current === i - 1) { var page = $("<a class='paginate_active'>"); }
                else {
                    var page = $("<a class='paginate_button'>");
                }
                page.text(i);
                page.attr("index", i - 1);
                bar.append(page);
            }
            else if (i === 4) {
                var page = $("<a class='paginate_button'>");
                page.text("...");
                page.attr("index", i - 1);
                bar.append(page);
            }
            else {
            }
        }
        $("#pagePlace").html(bar);
        if (current === 0) {
            $("#DataTables_Table_0_previous").css("cursor", "not-allowed");
        } else {
            $("#DataTables_Table_0_previous").css("cursor", "pointer");
        }
        var la = $("#pagePlace").children().children("a:last-child");
        if (la.attr("class") === "paginate_active") {
            $("#DataTables_Table_0_next").css("cursor", "not-allowed");
        } else {
            $("#DataTables_Table_0_next").css("cursor", "pointer");
        }
    }
}