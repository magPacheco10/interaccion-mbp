// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']}); //corechart cambia el tipo de grafico 

// Set a callback to run when the Google Visualization API is loaded. COLLBACK establecer una cominicacion ASINCRONA
//OBLIGATORIO
google.charts.setOnLoadCallback(dibujarGrafica);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function dibujarGrafica() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['champiñones', 3],
    ['Cebollas', 1],
    ['Zceitunas', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'¿cuanta pizza comiste anoche?',
                 'width':450,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}