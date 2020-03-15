// ! Intializing Github & UI class for using Fetch API :
const github = new Github;
const ui = new UI;

// ! Search input ->
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) =>
{
  // ! User Text which will be used to search the github profiles and repositories. 
  const userText = event.target.value;

  if (userText !== '')
  {
    // ! Make http call's :

    github.getUser(userText)
      .then(data =>
      {
        if (data.profile.message === 'Not Found')
        {
          // ! Show's alert -
          ui.showAlert('User not found', 'alert alert-danger');
        }
        else
        {
          // ! Show's profile and repos -

          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  }
  else
  {
    // ! Clear's profile -
    ui.clearProfile();
  }
}); 