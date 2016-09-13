var Block = {
    show: function () {
        var str = '<div id="load">'
                    + ' <div class="modal fade" id="loadingModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
                    + '<div class="modal-dialog" style="width: 25%; margin-top:20%;">'
                    + ' <div class="modal-content">'
                    + '<div class="loadingBar">'
                    + '<img src="/Image/Icons/load.gif" style="padding: 10%; float: left;" />'
                    + '<h4 class="loadingText">On Loading</h4>' + '</div></div></div></div></div>';

        $('body').prepend(str);
        $('#loadingModel').modal({ backdrop: 'static', keyboard: false });
    },
    close: function () {
        $('#loadingModel').modal('hide');
    }

}