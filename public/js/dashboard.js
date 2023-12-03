$(document).ready( function () {

    const dashboardHeader = $('#dashboard-header');
    const tableQueryContainer = $('#table-query-container');
    const resetDashboardBtn = $('#reset-dashboard');
    const tableContainer = $('#table-containers');

    // Table Data
    const regFishfolksRow = $('.reg-fishfolk-row');
    const regFishingGearsRow = $('.reg-fishing-gears-row');
    const regFishingBoatsRow = $('.reg-fishing-boats-row');
    const ageBracketRow = $('.age-bracket');
    const edAttainmentRow = $('.ed-attainment');
    const noChildrenRow = $('.no-children');

    function newTable (tableHeaders, tableData) {

        const table = $('<table>');
        table.addClass('table table-hover');
        const thead = $('<thead>');
        const headerRow = $('<tr>');

        $.each(tableHeaders, function (index, value) {

            const thead = $('<th>');
            headerRow.append(thead.text(value));

        });

        thead.append(headerRow);
        table.append(thead);

        const tbody = $('<tbody>');
        

        $.each(tableData, function (index, arrayData) {
            
            const bodyRow = $('<tr>');

            $.each(arrayData, function (index, data) {
                const td = $('<td>');
                td.text(data);
                bodyRow.append(td);
            });
            
            tbody.append(bodyRow);

        });

        table.append(tbody);

        tableContainer.slideUp();
        resetDashboardBtn.removeClass('d-none');

        tableQueryContainer.append(table);

        table.DataTable({
            dom: '<"row"<"col-md-4"l><"col-md-4"B><"col-md-4"f>><"row"<"col-md-12"t>><"row"<"col-md-6"i><"col-md-6"p>>',
            "lengthMenu": [10, 25, 50, 75, 100],
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

        return table;

    }

    $.each(noChildrenRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Educational Attainment - ' + header);

            const tableHeader = ['Name', 'Address', 'Age'];
            const tableData = [
                ['Name 1', 'Address 1', 'Sample Age'],
                ['Name 2', 'Address 2', 'Sample Age'],
                ['Name 3', 'Address 3', 'Sample Age']
            ]

            newTable(tableHeader, tableData);

        });

    });

    $.each(edAttainmentRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Educational Attainment - ' + header);

            const tableHeader = ['Name', 'Address', 'Age'];
            const tableData = [
                ['Fisherfolk 1', 'Address 1', 'Sample Age'],
                ['Fisherfolk 2', 'Address 2', 'Sample Age'],
                ['Fisherfolk 3', 'Address 3', 'Sample Age']
            ]

            newTable(tableHeader, tableData);

        });

    });

    $.each(ageBracketRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Age Bracket - ' + header);

            const tableHeader = ['Name', 'Address', 'Age'];
            const tableData = [
                ['Fisherfolk 1', 'Address 1', 'Sample Age'],
                ['Fisherfolk 2', 'Address 2', 'Sample Age'],
                ['Fisherfolk 3', 'Address 3', 'Sample Age']
            ]

            newTable(tableHeader, tableData);

        });

    });

    $.each(regFishingBoatsRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Registered Fishing Boats - ' + header);

            const tableHeader = ['Type', 'Owner'];
            const tableData = [
                ['Type 1', 'Fisherfolk 1'],
                ['Type 2', 'Fisherfolk 2'],
                ['Type 3', 'Fisherfolk 3']
            ]

            newTable(tableHeader, tableData);

        });

    });

    $.each(regFishingGearsRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Registered Fishing Gears - ' + header);

            const tableHeader = ['Type', 'Owner'];
            const tableData = [
                ['Type 1', 'Fisherfolk 1'],
                ['Type 2', 'Fisherfolk 2'],
                ['Type 3', 'Fisherfolk 3']
            ]

            newTable(tableHeader, tableData);

        });

    });


    $.each(regFishfolksRow, function (index, item) {

        const row = $(item);

        row.click( function () {
            const header = row.children('.category').text();
            dashboardHeader.text('Registered Fisherfolks - ' + header);

            const tableHeader = ['Name', 'Address', 'Age'];
            const tableData = [
                ['Fisherfolk 1', 'Goa', 23],
                ['Fisherfolk 2', 'San Jose', 31],
                ['Fisherfolk 3', 'Tigaon', 45]
            ]

            newTable(tableHeader, tableData);

        });

    });

    // RESET BUTTON FUNCTION
    resetDashboardBtn.click( function () {

        dashboardHeader.text('Dashboard');
        resetDashboardBtn.addClass('d-none');
        tableQueryContainer.empty();
        tableContainer.slideDown();


    });


});