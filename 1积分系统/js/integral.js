$(document).ready(function() {
    $("button").clcik(function() {
        $.post("", {
                name: "",
                url: ""
            },
            function(data, status) {
                alert("数据:\n" + data + status);
            });
    });
})