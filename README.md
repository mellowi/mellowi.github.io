# README

## Custom domains for Github Pages

### Github configuration

1. Open Github Pages repository
2. Go to Settings
3. Set "Custom domain" to the domain of choice

More from Github documentation: [Adding or removing a custom domain](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/)

### DNS

Setup your DNS so that it points at Github IPs and create a CNAME alias for www subdomain.

| HOST .mej.fi | Type      | Pointing at       |
| ------------ |:---------:| -----------------:|
| @            | A         | 192.30.252.153    |
| @            | A         | 192.30.252.154    |
| www          | CNAME     | mellowi.github.io |

More from Github documentation: [Setting up apex domain and www subdomain](https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/)
