import { series } from "./data.js";
import { Serie } from "./serie.js";

const tableBody = document.getElementById("seriesTableBody") as HTMLTableSectionElement;
const seasonsAverageCell = document.getElementById("seasonsAverage") as HTMLTableCellElement;
const seriesDetailCard = document.getElementById("seriesDetailCard") as HTMLDivElement;
const seriesImage = document.getElementById("seriesImage") as HTMLImageElement;
const seriesTitle = document.getElementById("seriesTitle") as HTMLHeadingElement;
const seriesDescription = document.getElementById("seriesDescription") as HTMLParagraphElement;
const seriesLink = document.getElementById("seriesLink") as HTMLAnchorElement;

series.forEach((serie) => {
    const row = document.createElement("tr");
    row.style.cursor = "pointer"; 

    row.innerHTML = `
        <td><strong>${serie.id}</strong></td>
        <td><a href="${serie.url}" target="_blank" class="text-decoration-none">${serie.title}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `
    row.addEventListener("click", () => {
        displaySeriesDetails(serie);
    });

    tableBody.appendChild(row);
});

const totalSeasons = series.reduce((series, serie) => series + serie.seasons, 0);
const averageSeasons = (totalSeasons / series.length).toFixed(0);

seasonsAverageCell.textContent = `Seasons average: ${averageSeasons}`;

function displaySeriesDetails(serie: Serie) {
    seriesImage.src = serie.imageUrl;
    seriesTitle.textContent = serie.title;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.url;
    seriesLink.textContent = serie.url;
    seriesDetailCard.style.display = "block";
}