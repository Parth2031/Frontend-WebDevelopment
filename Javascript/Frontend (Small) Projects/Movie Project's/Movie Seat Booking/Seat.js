const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = parseInt(movieSelect.value);

// ! Save Selected Movie Index and Price :->

const setMovieData = (movieIndex, moviePrice) =>
{
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// ! Update Total and Count :->

function updateSelectedCount()
{
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// ! Get Data from Local Storage and Populate UI :->
function populateUI()
{
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0)
  {
    seats.forEach((seat, index) =>
    {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// ! Movie Select Event :->

movieSelect.addEventListener('change', (event) =>
{
  ticketPrice = +event.target.value;
  setMovieData(event.target.selectedIndex, event.target.value);
  updateSelectedCount();
});

// ! Seat Click Event :->

container.addEventListener('click', event =>
{
  if ( event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) 
  {
    event.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// ! Initial Count and Total Set :->

updateSelectedCount();