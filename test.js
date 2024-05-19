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
    const tableBody = document.querySelector('#table_eonet table tbody');
    if (!tableBody) {
        console.error('Table body not found');
        return;
    }

    events.forEach(event => {
        const row = `
            <tr>
                <td>${event.id}</td>
                <td>${event.title}</td>
                <td>${event.descriptions}</td>
                <td>${event.link ? '<a href="' + event.link + '">More info</a>' : ''}</td>
                <td>${event.closed}</td>
                <td>${event.date_eonet}</td>
                <td>${event.magnitudeValue}</td>
                <td>${event.magnitudeUnit}</td>
                <td>${event.urls}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
