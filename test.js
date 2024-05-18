document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost/nasaInformation/api/apigetDataEonet.php')
        .then(response => response.json())
        .then(data => {
            displayEventData(data);
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });
});

function displayEventData(events) {
    const volcanoDataElement = document.getElementById('volcanoData');
    let html = '<h2>Volcano Events</h2>';
    html += '<ul>';

    events.forEach(event => {
        html += '<li>';
        html += '<strong>Title:</strong> ' + event.title + '<br>';
        html += '<strong>Date:</strong> ' + event.date_eonet + '<br>';
        html += '<strong>Link:</strong> <a href="' + event.link + '">More info</a>';
        html += '</li>';
    });

    html += '</ul>';

    volcanoDataElement.innerHTML = html;
}
