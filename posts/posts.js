import _ from 'lodash';
import moment from 'moment';

export default class Posts {
  constructor(posts) {
    this.posts = posts || [];
  }

  reverseOrder() {
    return _(this.posts)
      .sortBy(this.posts, p => p.metadata.date)
      .reverse()
      .value();
  }

  forSlug(urlSlug) {
    let index = _.findIndex(this.posts, p => p.metadata.urlSlug === urlSlug);

    if (index < 0) {
      return null;
    }

    return this.posts[index];
  }
}
