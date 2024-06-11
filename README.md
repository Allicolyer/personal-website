<h3> Getting Started </h3>
Use rbenv to manage Ruby Versions.

```
brew install rvenv
```

Add rbenv to the path in fish shell:
```
# Load rbenv automatically by appending
set -gx PATH $HOME/.rbenv/bin $PATH
status --is-interactive; and . (rbenv init -|psub)
```

Finally use rbenv local to see what version of Ruby this project uses. As of writing this, this project uses Ruby 3.1.
```
rbenv local 
rbenv install 3.1.0
rbenv local 3.1.0
```

Install gems `bundle install`
Run Jekyll `bundle exec jekyll serve`

This project uses `gulp` to compile CSS from Sass.
To install sass then run `sass --watch assets/css/scss:assets/css`

<h3> Making new posts </h3>
In this project, portfilio posts are in the folder `_posts` and blog posts are in the foler `_blog`

Some portfolio projects are hidden using the `hidden: true` in the frontmatter. See [about.markdown](./_portfolio/2018-01-01-about.markdown) for an exmple.
This is because the paginator filters out [hidden posts](./vendor/bundle/ruby/2.6.0/gems/jekyll-paginate-1.1.0/lib/jekyll-paginate/pagination.rb).

 Note that this will not work with collections that are not the _post directory.