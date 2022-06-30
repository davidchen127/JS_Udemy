class GitHub {
  constructor() {
    this.client_id = "19f4774a8b0c9c71d5ae";
    this.client_secret = "e7fe15d858c5ab47ddaccead48abf0e57ce1a53c";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile, // this equals to profile:profile, which is the variable above
      repos: repos,
    };
  }
}
