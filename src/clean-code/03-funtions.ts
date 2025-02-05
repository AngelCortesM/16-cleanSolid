(() => {
  function getAllMoviesById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie(movie: Movie) {
    console.log({ movie });
  }

  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;
    console.log({ fullName, birthdate });
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
