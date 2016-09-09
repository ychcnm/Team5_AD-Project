var Login = {
    url: '/Service/WebService1.asmx/',
    data: '',
    JsonData: '',
    init: function () {
        Login.bindEvent();
    },
    bindEvent: function () {
        $("#btnLogin").on("click", function () {
            Login.JsonData = Login.getJsonData();
            if (Login.validate()) {
                Request.Myajax(Login.url + 'Login', JSON.stringify(Login.JsonData), Login.LoginSuccess, Login.LoginError)
            } else {
                $("#message").text("Username And Password are Required");
            }
        });
    },
    LoginSuccess: function (data) {
        if (data.d !== "Successful") {
            $("#message").text(data.d);
        }
        else { window.location = '/Page/storeClerk/home.aspx'; }

    },
    LoginError: function () {
        $("#message").text("Unknown Error")
    }, getJsonData: function () {

        var jsonData = {};
        jsonData.userName = $("#userName").val();
        jsonData.passWord = $("#passWord").val();
        return jsonData;
    }, validate: function () {
        var result = true;
        if (Login.JsonData.userName === "") {
            result = false;
        }
        if (Login.JsonData.passWord === "") {
            result = false;
        }
        return result;
    }
}