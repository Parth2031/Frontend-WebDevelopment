const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// ! Search by Song or Artist :->

async function searchSongs(term)
{
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// ! Show Song and Artist in DOM :->

function showData(data)
{
  result.innerHTML = `
    <ul class="songs">
      ${data.data.map (
          (song) => `<li>
                     <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                     <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
                   </li>`
        )
        .join('')}
    </ul>
  `;

  if (data.prev || data.next)
  {
    more.innerHTML = `
                      ${
                        data.prev
                          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
                          : ''
                      }
                      ${
                        data.next
                          ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
                          : ''
                      }
                     `;
  }

  else 
    more.innerHTML = '';
}

// ! Get Previous and Next Songs :->

async function getMoreSongs(url)
{
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
}

// ! Get Lyrics for Song :->

async function getLyrics(artist, songTitle)
{
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
  <span>${lyrics}</span>`;

  more.innerHTML = '';
}

// ! Event Listeners :->

form.addEventListener('submit', (event) =>
{
  const searchTerm = search.value.trim();

  if (!searchTerm) 
    alert('Please type in a search term');
  
  else 
    searchSongs(searchTerm);
  
  event.preventDefault();
});

// ! Get Lyrics Button Click :->

result.addEventListener('click', (event) =>
{
  const clickedElement = event.target;

  if (clickedElement.tagName === 'BUTTON')
  {
    const artist = clickedElement.getAttribute('data-artist');
    const songTitle = clickedElement.getAttribute('data-songtitle');

    getLyrics(artist, songTitle);
  }
});
