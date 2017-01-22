export const playSound = ({ url, volume=1 }) => {
  const audio = new Audio(url);
  audio.volume = volume;
  audio.play();
};
