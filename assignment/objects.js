let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

    programming.languages.push("Go");
    console.log(programming);

    programming.difficulty = 7;
    console.log(programming);

    delete programming.jokes;
    console.log(programming);


    programming.isFun = true;
    console.log(programming);