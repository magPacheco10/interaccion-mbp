google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Año', 'Ventas', 'Gastos'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Desempeño de la compañía',
          curveType: 'función',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('LineChart'));

        chart.draw(data, options);
      }