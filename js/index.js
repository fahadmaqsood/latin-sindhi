latin_alphabets = ["a", "ã", "ă", "à", "b", "b́", "b̌", "ç", "ç̌", "d", "d̄", "ḓ", "ḍ", "d̤", "e", "ë", "f", "g", "ǧ", "ǵ", "ḡ", "h", "ı", "i", "j", "ǰ", "j́", "j̈", "k", "ǩ", "l", "m", "n", "ǹ", "o", "ö", "p", "p̌", "r", "ř", "s", "ş", "ẗ", "t̑", "t", "t̆", "ù", "u", "ü", "w", "y", "z"]
perso_arabic_alphabets = ["اَ", "آ", "اَي", "ع", "ب", "ٻ", "ڀ", "چ", "ڇ", "د", "ڌ", "ڏ", "ڊ", "ڍ", "اے", "ئي", "ف", "گ", "گھ", "ڳ", "ڱ", "ھ/ح", "اِ", "آئَي", "ج", "جھ", "ڄ", "ڃ", "ق/ڪ", "ک/خ", "ل", "م", "ن", "ڻ", "او", "اَو", "پ", "ڦ", "ر", "ڙ", "س/ص/ث", "ش", "ت/ط", "ٿ", "ٽ", "ٺ", "اُ", "اُو", "يو", "و", "ي", "ز/ذ/ض/ظ"]

cols = 8
rows = (latin_alphabets.length + perso_arabic_alphabets.length) / cols;

/**
 * Now dynamically writting alphabets in the table
 */
function isEven(n) {
    return n % 2 == 0;
}

$(document).ready(function(){

    current_latin_alphabet = 0;
    current_perso_arabic_alphabet = 0;
    
    for (let row = 0; row <= rows; row++) {
        for (let i = 0; i <= cols - 1; i++) {
            if (i == 0) {
                $(".alphabets-chart>tbody").append('<tr></tr>');
            }

            if (isEven(row)){
                
                if (current_latin_alphabet >= 52) {
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<th rowspan="2" colspan="1"></th>');
                } else {
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<th>'+latin_alphabets[current_latin_alphabet]+'</th>');

                    current_latin_alphabet++;
                }
            } else {
                if (current_perso_arabic_alphabet >= 52) {

                } else {
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<td lang="sd" dir="ltr">'+perso_arabic_alphabets[current_perso_arabic_alphabet]+'</td>');
                    
                    current_perso_arabic_alphabet++;
                }
            }
        }
    }
});