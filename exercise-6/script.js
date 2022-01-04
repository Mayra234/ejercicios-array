const sentence = 'Mi nombre es Juan';

let text = sentence.split([' ']);
console.log(text);

// Separado por la a -> ['My n', 'me is Ju', "n"]
// Separado por la n -> ["My", "ame is Jua"]
// Separado por la J -> ['My name is', 'uan']
