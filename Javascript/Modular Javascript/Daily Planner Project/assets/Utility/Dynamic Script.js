// TODO:: Creating a Script which could be Dynamically Loaded in the Main JS File and not loaded in HTML File.
// ! NOTE - It helps to avoid extra loading of files which are not needed all the time.

const intervalId = setInterval(() => {
  console.log('Sending analytics data...')
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});