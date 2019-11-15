$(document).ready(function () {
    var today = new Date();
    var date_init = "11/26/2018";
    var date_curr = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    dt1 = new Date(date_init);
    dt2 = new Date(date_curr);
    //var days =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));    
    $("#days").val(Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24)));
    console.log(dt1);
    console.log(dt2);
    console.log(days);
})