const latin_alphabets = ["a", "ã", "ä", "ǎ", "b", "b́", "ç", "d", "d̬", "ḍ", "e", "ë", "f", "g", "ǵ", "g̈", "h", "i", "j", "j́", "j̈", "k", "l", "m", "n", "ň", "o", "p", "r", "ř", "s", "ẗ", "t", "u", "w", "y", "z"]
const perso_arabic_alphabets = ["اَ", "آ", "اَي", "ع", "ب", "ٻ", "چ", "د", "ڏ", "ڊ", "اے", "ئي", "ف", "گ", "ڳ", "ڱ", "ھ/ح", "آئَي / اِ", "ج", "ڄ", "ڃ", "ق/ڪ", "ل", "م", "ن", "ڻ", "او", "پ", "ر", "ڙ", "س/ص/ث", "ت/ط", "ٽ", "اُو / اُ", "و", "ي", "ز/ذ/ض/ظ"]


const latin_hard_alphabets = ["bh", "çh", "dh", "ḍh", "gh", "jh", "kh", "ph", "sh", "ẗh", "th"];
const perso_arabic_hard_alphabets = ["ڀ", "ڇ", "ڌ", "ڍ", "گھ", "جھ", "ک/خ", "ڦ", "ش", "ٿ", "ٺ"];


const cols = 8
const rows = Math.round(((latin_alphabets.length + perso_arabic_alphabets.length) / cols));

/**
 * Now dynamically writting alphabets in the table
 */
const isEven = function(n) {
    return n % 2 == 0;
}

const alphabets_chart = "#alphabets-chart";
current_latin_alphabet = 0;
current_perso_arabic_alphabet = 0;

$(alphabets_chart + ">tbody").html('');

for (let row = 0; row <= rows; row++) {
    $(alphabets_chart + ">tbody").append('<tr></tr>');
    

    for (let i = 0; i <= cols - 1; i++) {

        
        if (isEven(row)) {
            if(current_latin_alphabet < latin_alphabets.length){
                $(alphabets_chart + ">tbody").find("tr:last-child").append('<th>'+latin_alphabets[current_latin_alphabet]+'</th>')

                current_latin_alphabet++;
            } else{
                $(alphabets_chart + ">tbody").find("tr:last-child").append('<th rowspan="2" colspan="1"></th>');
            }
        } else {
            if(current_perso_arabic_alphabet < perso_arabic_alphabets.length){
                $(alphabets_chart + ">tbody").find("tr:last-child").append('<td lang="sd" dir="ltr">'+perso_arabic_alphabets[current_perso_arabic_alphabet]+'</td>')
                
                current_perso_arabic_alphabet++;
            }
        }
    }
}

// writing hard alphabets in the table
const hard_table = "#hard-alphabets-chart";
current_latin_hard_alphabet = 0;
current_perso_arabic_hard_alphabet = 0;


const hard_cols = 8
const hard_rows = Math.round(((latin_hard_alphabets.length + perso_arabic_hard_alphabets.length) / hard_cols));

$(hard_table + ">tbody").html('');

for (let row = 0; row <= hard_rows; row++) {
    $(hard_table + ">tbody").append('<tr></tr>');
    

    for (let i = 0; i <= hard_cols - 1; i++) {

        
        if (isEven(row)) {
            if(current_latin_hard_alphabet < latin_hard_alphabets.length){
                $(hard_table+">tbody").find("tr:last-child").append('<th>'+latin_hard_alphabets[current_latin_hard_alphabet]+'</th>')

                current_latin_hard_alphabet++;
            } else{
                $(hard_table + ">tbody").find("tr:last-child").append('<th rowspan="2" colspan="1"></th>');
            }
        } else {
            if(current_perso_arabic_hard_alphabet < perso_arabic_hard_alphabets.length){
                $(hard_table + ">tbody").find("tr:last-child").append('<td lang="sd" dir="ltr">'+perso_arabic_hard_alphabets[current_perso_arabic_hard_alphabet]+'</td>')
                
                current_perso_arabic_hard_alphabet++;
            }
        }
    }
}