<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="PL.Page.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="/Css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/Css/style.css" rel="stylesheet" type="text/css" />
    <link href="/Css/component.css" rel="stylesheet" type="text/css" />
    <script src="/Script/jquery-3.1.0.min.js" type="text/javascript"></script>
    <script src="/Script/bootstrap.min.js" type="text/javascript"></script>
    <script src="/Script/login.js" type="text/javascript"></script>
    <script src="/Script/request.js" type="text/javascript"></script>
    <script src="/Script/block.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container-fluid">
            <div class="row" id="top_panel">
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                    <div id="user">
                        <img src="/Image/user_avatar.png" id="user_avatar" />
                        <span id="user_name">Sign In</span>
                    </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3"></div>
            </div>
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <div class="login_body">
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                                <img src="/Image/Logo.png" style="width: 90%; margin-left: 4%;" />
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <img src="/Image/Icons/user.png" style="width: 20%; float: right; margin-top: 26%;" />
                            </div>
                            <div class="col-lg-6">
                                <input type="text" id="userName" class="login_text" placeholder="Username" />
                            </div>
                            <div class="col-lg-3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <img src="/Image/Icons/password.png" style="width: 18%; float: right; margin-top: 26%;" />
                            </div>
                            <div class="col-lg-6">
                                <input type="password" id="passWord" class="login_text" placeholder="Password" />
                            </div>
                            <div class="col-lg-3">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12" style="text-align: center">
                                <span id="message">&nbsp;</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-3">
                                <input id="btnLogin" class="btn_login" type="button" value="Login" />
                            </div>
                            <div class="col-lg-3">
                                <input class="btn_reset" type="button" value="Reset" />
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6" style="text-align: center; margin-top: 4%;">
                                <span id="forget"><a>Forget Your Password?</a></span>
                            </div>
                            <div class="col-lg-3"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4"></div>
            </div>
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-3"></div>
            </div>
        </div>
    </form>
</body>
<script type="text/javascript">
    Login.init()
</script>
</html>
