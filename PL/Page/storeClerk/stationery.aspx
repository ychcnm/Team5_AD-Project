<%@ Page Title="" Language="C#" MasterPageFile="~/Master/storeClerk.Master" AutoEventWireup="true" CodeBehind="stationery.aspx.cs" Inherits="PL.Page.storeClerk.stationery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="model">
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width: 25%;">
                <div class="modal-content">
                    <div class="widget_header">
                        <button type="button" class="close" data-dismiss="modal" style="margin-top: 1%;"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="widget_header_title wwIcon i_16_forms">Edit Item</h4>
                    </div>
                    <div class="line_grid">
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Item ID :</p>
                            </div>
                            <div class="col-lg-9">CIAKSA</div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Category :</p>
                            </div>
                            <div class="col-lg-9">
                                <div class="selector" id="uniform-undefined">
                                    <span>Web Designer</span>
                                    <select class="simple_form" style="width: 125px; position: relative; top: -24px; opacity: 0;">
                                        <option value="Web Designer" selected="selected">Web Designer
                                        </option>
                                        <option value="Web Developer">Web Developer
                                        </option>
                                        <option value="Other">Other
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Item Name :</p>
                            </div>
                            <div class="col-lg-9">
                                <input class="simple_field" type="text" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Description:</p>
                            </div>
                            <div class="col-lg-9">
                                <input class="simple_field" type="text" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Reloder Level:</p>
                            </div>
                            <div class="col-lg-9">
                                <input class="simple_field" type="text" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Reorder Level:</p>
                            </div>
                            <div class="col-lg-9">
                                <input class="simple_field" type="text" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <p>Unit of Measure:</p>
                            </div>
                            <div class="col-lg-9">
                                <div class="selector" id="uniform-undefined">
                                    <span>Web Designer</span>
                                    <select class="simple_form" style="width: 125px; position: relative; top: -24px; opacity: 0;">
                                        <option value="Web Designer" selected="selected">Web Designer
                                        </option>
                                        <option value="Web Developer">Web Developer
                                        </option>
                                        <option value="Other">Other
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <input type="submit" value="Update" class="submitIt simple_buttons" />
                            </div>
                            <div class="col-lg-6">
                                <input style="float: left" type="submit" value="Cancel" class="submitIt simple_buttons" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6" style="padding: 2%;">
            <div id="page_title">
                Stationery List
            </div>
        </div>
        <div class="col-lg-6" style="padding: 2%;">
            <input type="text" class="top_search_input" style="margin-left: 52%" />
            <div class="simple_buttons" style="float: right;">
                <img src="/Image/Icons/search.png" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12" style="margin-top: -3%;">
            <div class="g_12 separator"><span id="category_pin" style="cursor: pointer;"></span></div>
        </div>
    </div>
    <div id="category">
    </div>
    <div class="row" id="item_list" style="margin-top: 2%;">
        <div class="col-lg-12">
            <div class="widget_header">
                <h4 class="widget_header_title wwIcon i_16_data">Items</h4>
            </div>
            <div class="widget_contents noPadding twCheckbox">
                <table class="tables">
                    <thead>
                        <tr>
                            <th>Inventory Code</th>
                            <th>Category</th>
                            <th style="width: 29%">Description</th>
                            <th>Reorder Level</th>
                            <th>Reorder Qty</th>
                            <th>Meassure Unit</th>
                            <th>Operate</th>
                        </tr>
                    </thead>
                </table>
                <div class="dtBottom">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="dtInfo">
                                <div class="dataTables_info" id="DataTables_Table_0_info">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="dtPagination">
                                <div class="dataTables_paginate paging_full_numbers" id="DataTables_Table_0_paginate">
                                    <a tabindex="0" class="first paginate_button paginate_button_disabled" id="DataTables_Table_0_first">First</a>
                                    <a tabindex="0" class="previous paginate_button paginate_button_disabled" id="DataTables_Table_0_previous">&lt</a>
                                    <span id="pagePlace"></span>
                                    <a tabindex="0" class="next paginate_button paginate_button_disabled" id="DataTables_Table_0_next">&gt</a>
                                    <a tabindex="0" class="last paginate_button paginate_button_disabled" id="DataTables_Table_0_last">Last</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Script/storeClerk/stationery.js"></script>
    <script id="itemTemplate" type="text/x-handlebars">
        <tbody>
            {{#each items}}
               <tr>
                   <td>{{itemID}}</td>
                   <td>{{category}}</td>
                   <td>{{description}}</td>
                   <td>{{reorderLevel}}</td>
                   <td>{{reorderQuality}}</td>
                   <td>{{UMID}}</td>
                   <td class="operate"><span class="i_edit" style="background-position-y: 0px;"></span></td>
               </tr>
            {{/each}}
        </tbody>
    </script>
    <%--    <script id="modelTemplate" type="text/x-handlebars">
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="widget_header">
                        <button type="button" class="close" data-dismiss="modal" style="margin-top: 1%;"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="widget_header_title wwIcon i_16_forms">Edit Item</h4>
                    </div>
                    <div class="line_grid">
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-lg-6">
                                <input type="submit" value="Update" class="submitIt simple_buttons" />
                            </div>
                            <div class="col-lg-6">
                                <input style="float:left" type="submit" value="Update" class="submitIt simple_buttons" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </script>--%>
    <script>
        Stationery.init();
    </script>
</asp:Content>
