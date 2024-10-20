import { series } from "./data.js";
var tableBody = document.getElementById("seriesTableBody");
var seasonsAverageCell = document.getElementById("seasonsAverage");
var seriesDetailCard = document.getElementById("seriesDetailCard");
var seriesImage = document.getElementById("seriesImage");
var seriesTitle = document.getElementById("seriesTitle");
var seriesDescription = document.getElementById("seriesDescription");
var seriesLink = document.getElementById("seriesLink");
series.forEach(function (serie) {
    var row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.innerHTML = "\n        <td><strong>".concat(serie.id, "</strong></td>\n        <td><a href=\"").concat(serie.url, "\" target=\"_blank\" class=\"text-decoration-none\">").concat(serie.title, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
    row.addEventListener("click", function () {
        displaySeriesDetails(serie);
    });
    tableBody.appendChild(row);
});
var totalSeasons = series.reduce(function (series, serie) { return series + serie.seasons; }, 0);
var averageSeasons = (totalSeasons / series.length).toFixed(0);
seasonsAverageCell.textContent = "Seasons average: ".concat(averageSeasons);
function displaySeriesDetails(serie) {
    seriesImage.src = serie.imageUrl;
    seriesTitle.textContent = serie.title;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.url;
    seriesLink.textContent = serie.url;
    seriesDetailCard.style.display = "block";
}
