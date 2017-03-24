/**
 * Created by Lee on 2016/12/22.
 */

const root = 'http://localhost:8080/'

const urlMap = {
  articles: root+'articles',
  article:  root+'article',
  tags: root+'tags',
  tag: root+'tag',
}

const getUrl = name => {
  let url = urlMap[name]

  return url
}

export { getUrl }
