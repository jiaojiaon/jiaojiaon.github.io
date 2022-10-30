// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["MANHATTAN", "BROOKLYN", "QUEENS", "BRONX", "STATEN ISLAND"],
      datasets: [
        {
          label: "DOB Permit Issuance",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1609260,924836,822951,335013,227701]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Number of DOB Permit Issuance in each boroughs'
      }
    }
});
//Doughnut Chart 
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["MANHATTAN", "BROOKLYN", "QUEENS", "BRONX", "STATEN ISLAND"],
      datasets: [
        {
          label: "DOB Permit Issuance",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [1609260,924836,822951,335013,227701]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Number of DOB Permit Issuance in each boroughs'
      }
    }
});