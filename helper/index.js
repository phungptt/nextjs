export function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export const px2vw = (px) => `${px * 0.052083333333333336}vw`;

export const youtubeUrl2Id = (url) => {
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : false;
};

export const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
