var Request = {
    Myajax: function (url, data, success, error) {
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: success,
            error: error,
            dataType: "json",
            contentType: "application/json",
        });
    },
}