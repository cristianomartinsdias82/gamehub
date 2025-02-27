export const getOptimizedImageUrl = (url: string, width = 600, height = 400) => {

  const mediaResourceFragment = 'media/';
  const lastIndexOf = url.lastIndexOf(mediaResourceFragment) + mediaResourceFragment.length
  const urlFirstPart = url.substring(0, lastIndexOf);
  const urlLastPart = url.substring(lastIndexOf);

  return [urlFirstPart, `crop/${width}/${height}/`, urlLastPart].join('');
}
