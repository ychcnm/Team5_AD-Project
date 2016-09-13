<%@ Page Title="" Language="C#" MasterPageFile="~/Master/depEmp.Master" AutoEventWireup="true" CodeBehind="speRequisition.aspx.cs" Inherits="PL.Page.depEmp.speRequisition" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="items">
    </div>
    <div class="row">
        <div class="col-lg-6" style="padding: 2%;">
            <div id="page_title">
                Specila Requisition
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
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
    <div class="row">
        <div class="col-lg-12" style="margin-top: 3%;">
            <div class="widget_header">
                <h4 class="widget_header_title wwIcon i_16_cart">Items</h4>
            </div>
            <div class="widget_contents noPadding twCheckbox" style="height: 220px; overflow-y: scroll;">
                <table class="tables">
                    <thead>
                        <th>Item No</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody id="cart">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 2%;">
        <div class="col-lg-6" style="text-align: right">
            <input type="button" id="cartSubmit" value="Confirm" class="submitIt simple_buttons" />
        </div>
        <div class="col-lg-6">
            <input type="button" id="cleanCart" value="Cancel" class="submitIt simple_buttons" />
        </div>
    </div>
    <script src="/Script/depEmp/speRequisition.js"></script>
    <script id="itemTemplate" type="text/x-handlebars">
        <tbody id="addItem">
            {{#each items}}
               <tr>
                   <td>{{itemID}}</td>
                   <td>{{description}}</td>
                   <td>{{quantityInHand}}</td>
                   <td>
                       <div class="input-group spinner">
                           <input type="text" class="form-control" value="0" min="0" max="{{quantityInHand}}" style="height: 26px;" />
                           <div class="input-group-btn-vertical">
                               <button class="btn btn-default spinner_up" type="button"></button>
                               <button class="btn btn-default spinner_down" type="button"></button>
                           </div>
                       </div>
                   </td>
                   <td>
                       <input type="checkbox" class="simple_form" />
                   </td>
               </tr>
            {{/each}}
        </tbody>
    </script>
    <script>
        SpeRequisition.init();
    </script>
</asp:Content>
