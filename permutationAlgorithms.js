
function createPowerSet(arr) {
	var powerSet = [[]];

	for (let i = 0;i < arr.length;i++) {
		for (let k = 0, len = powerSet.length; k < len;k++) {
			powerSet.push(powerSet[k].concat(arr[i]));
		}
	}	

	return powerSet;
}

function permutationsWithRepetitions(str, accumulator, r) {
  if (accumulator.length >= r) {
    return [accumulator];
  }

  let results = [];

  for (let i = 0;i < str.length;i++) {
    results = results.concat(
      permutationsWithRepetitions(
        str,
        accumulator + str[i],
        r,
       
      ) 
    );

  }

  return results;

}

function permutationWithoutRepetitions(str, accumulator, r) {
  if (accumulator.length >= r) {
    return [accumulator];
  }

  let results = [];

  for (let i = 0;i < str.length;i++) {
    results = results.concat(
      permutationWithoutRepetitions(
        str.slice(0, i) + str.slice(i + 1),
        accumulator + str[i],
        r,
       
      ) 
    );

  }

  return results;

}

function combinationWithRepetitions(str, accumulator, r) {
  if (accumulator.length >= r) {
    return [accumulator];
  }

  let results = [];

  for (let i = 0;i < str.length;i++) {
    results = results.concat(
      combinationWithRepetitions(
        str.slice(i),
        accumulator + str[i],
        r,
       
      ) 
    );

  }

  return results;

}


function combinationWithoutRepetitions(str, accumulator, r) {
  if (accumulator.length >= r) {
    return [accumulator];
  }

  let results = [];

  for (let i = 0;i < str.length;i++) {
    results = results.concat(
      combinationWithoutRepetitions(
        str.slice(i +1),
        accumulator + str[i],
        r,
       
      ) 
    );

  }

  return results;

}


/*
	
Permutations with repetitions


(27) ["hhh", "hhe", "hhy", "heh", "hee", "hey", "hyh", "hye", "hyy", "ehh", "ehe", "ehy", "eeh", "eee", "eey", "eyh", "eye", "eyy", "yhh", "yhe", "yhy", "yeh", "yee", "yey", "yyh", "yye", "yyy"]0: "hhh"1: "hhe"2: "hhy"3: "heh"4: "hee"5: "hey"6: "hyh"7: "hye"8: "hyy"9: "ehh"10: "ehe"11: "ehy"12: "eeh"13: "eee"14: "eey"15: "eyh"16: "eye"17: "eyy"18: "yhh"19: "yhe"20: "yhy"21: "yeh"22: "yee"23: "yey"24: "yyh"25: "yye"26: "yyy"length: 27__proto__: Array(0)


Permutations without repetitions

(6) ["hey", "hye", "ehy", "eyh", "yhe", "yeh"]


Combination with repetitions

(10) ["hhh", "hhe", "hhy", "hee", "hey", "hyy", "eee", "eey", "eyy", "yyy"]


Combinations without repetitions

["hey"]


Both combination/permutation and repition/no-repitition are a matter of duplicates.

Thq difference though is - what is being duplicating.

In combination vs permutation, it is a matter of word duplication

In repition vs non-repitition, it is a matter of letter duplication

Repetition - any given word can have duplicates of the same letter

Permutation - the entire dataset can have duplicates of the same set of words.

combination - the entire dataset can have no duplicate sets of words

--------------------------------------
Permutation - set duplication allowed
Repitition - word duplication allowed


*/
