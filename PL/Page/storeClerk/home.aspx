<%@ Page Title="" Language="C#" MasterPageFile="~/Master/Main.Master" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="PL.Page.storeClerk.home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="row" style="margin-top: 5%">
        <div class="col-lg-5">
            <div class="widget_header">
                <h4 class="widget_header_title wwIcon i_req">New Requisition</h4>
            </div>
            <div class="line_grid">
                <div class="row">
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="widget_header">
                <h4 class="widget_header_title wwIcon i_dis">Discrepancy</h4>
            </div>
            <div class="line_grid">
                <div class="row">
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="g_12 separator"><span></span></div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="widget_header">
                <h4 class="widget_header_title wwIcon i_req_his">Requisition History</h4>
            </div>
            <div class="widget_contents noPadding twCheckbox">
                <div class="line_grid">
                    <div class="row">
                    </div>
                </div>
                <div class="dtBottom">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="dtInfo">
                                <div class="dataTables_info" id="DataTables_Table_0_info">
                                    Showing 1 to 10 of 10 entries
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="dtPagination">
                                <div class="dataTables_paginate paging_full_numbers" id="DataTables_Table_0_paginate">
                                    <a tabindex="0" class="first paginate_button paginate_button_disabled" id="DataTables_Table_0_first">First</a>
                                    <a tabindex="0" class="previous paginate_button paginate_button_disabled" id="DataTables_Table_0_previous">Previous</a>
                                    <span>
                                        <a tabindex="0" class="paginate_active">1</a>
                                    </span>
                                    <a tabindex="0" class="next paginate_button paginate_button_disabled" id="DataTables_Table_0_next">Next</a>
                                    <a tabindex="0" class="last paginate_button paginate_button_disabled" id="DataTables_Table_0_last">Last</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Script/storeClerk/home.js" type="text/javascript"></script>
    <script type="text/javascript">
        Home.init()
    </script>
</asp:Content>
