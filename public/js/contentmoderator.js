$(document).ready(function () {

    const formsTable = $('#forms-table');


    formsTable.DataTable({
        dom: '<"row"<"col-md-4"l><"col-md-4 d-flex justify-content-center align-items-center"B><"col-md-4"f>><"row"<"col-md-12"t>><"row"<"col-md-6"i><"col-md-6 d-flex justify-content-end"p>>',
        "lengthMenu": [10, 25, 50, 75, 100],
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});