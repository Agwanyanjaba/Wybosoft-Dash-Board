$(document).ready(function() {
    $.ajax({
        url: "http://127.0.0.1:9000/v1/accounts"
    }).then(function(data, status, accounts) {
       $('.fname').append(data.firstName);
       $('.sname').append(data.lastName);
       console.log(accounts);
    });
});