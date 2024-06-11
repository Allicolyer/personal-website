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