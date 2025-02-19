export const getRandomImage = (): string => {
    const width = 400;
    const height = 300;
    const seed = Math.floor(Math.random() * 1000);
    return `/api/placeholder/${width}/${height}?random=${seed}`;
  };