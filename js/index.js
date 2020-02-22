latin_alphabets = ["a", "◌̃", "ä", "ǎ", "b", "b́", "b̌", "ç", "ç̌", "d", "d̈", "d̬", "ḍ", "d̤", "e", "ë", "f", "g", "ǧ", "ǵ", "g̈", "h", "i", "j", "ǰ", "j́", "j̈", "k", "ǩ", "l", "m", "n", "ň", "o", "p", "p̌", "r", "ř", "s", "š", "ẗ", "t̑", "t", "t̆", "u", "w", "y", "z"]
perso_arabic_alphabets = ["اَ", "آ", "اَي", "ع", "ب", "ٻ", "ڀ", "چ", "ڇ", "د", "ڌ", "ڏ", "ڊ", "ڍ", "اے", "ئي", "ف", "گ", "گھ", "ڳ", "ڱ", "ھ/ح", "آئَي / اِ", "ج", "جھ", "ڄ", "ڃ", "ق/ڪ", "ک/خ", "ل", "م", "ن", "ڻ", "او", "پ", "ڦ", "ر", "ڙ", "س/ص/ث", "ش", "ت/ط", "ٿ", "ٽ", "ٺ", "اُو / اُ", "و", "ي", "ز/ذ/ض/ظ"]

cols = 8
rows = ((latin_alphabets.length + perso_arabic_alphabets.length) / cols) - 1;

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
        $(".alphabets-chart>tbody").append('<tr></tr>');
        

        for (let i = 0; i <= cols - 1; i++) {

            
            if (isEven(row)) {
                if(current_latin_alphabet < latin_alphabets.length){
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<th>'+latin_alphabets[current_latin_alphabet]+'</th>')

                    current_latin_alphabet++;
                } else{
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<th rowspan="2" colspan="1"></th>');
                }
            } else {
                if(current_perso_arabic_alphabet < perso_arabic_alphabets.length){
                    $(".alphabets-chart>tbody").find("tr:last-child").append('<td lang="sd" dir="ltr">'+perso_arabic_alphabets[current_perso_arabic_alphabet]+'</td>')
                    
                    current_perso_arabic_alphabet++;
                }
            }
        }
    }
    
    // for (let row = 0; row <= rows; row++) {
    //     for (let i = 0; i <= cols - 1; i++) {
    //         if (i == 0) {
    //             $(".alphabets-chart>tbody").append('<tr></tr>');
    //         }

    //         if (isEven(row)){
                
    //             if (current_latin_alphabet >= latin_alphabets.length) {
    //                 $(".alphabets-chart>tbody").find("tr:last-child").append('<th rowspan="2" colspan="1"></th>');
    //             } else {
    //                 $(".alphabets-chart>tbody").find("tr:last-child").append('<th>'+latin_alphabets[current_latin_alphabet]+'</th>');

    //                 current_latin_alphabet++;
    //             }
    //         } else {
    //             if (current_perso_arabic_alphabet <= perso_arabic_alphabets.length) {
    //                 $(".alphabets-chart>tbody").find("tr:last-child").append('<td lang="sd" dir="ltr">'+perso_arabic_alphabets[current_perso_arabic_alphabet]+'</td>');
    //                 console.log(perso_arabic_alphabets[current_perso_arabic_alphabet])
    //                 current_perso_arabic_alphabet++;
    //             }
    //         }
    //     }
    //}
});