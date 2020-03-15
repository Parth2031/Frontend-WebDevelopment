// TODO:: This file is used to fetch the API to find github profiles.

class Github
{
  constructor()
  {
    this.client_id = 'c49abf55ae74a4b9a3fd';
    this.client_secret = 'ec32d20af22ac658ff01774865b69ae73751de0a';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, repos
    };
  }
}