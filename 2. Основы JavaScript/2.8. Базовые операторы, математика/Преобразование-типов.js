'' + 1 + 0; // "10" - конкатенация строки с числом т.к. знак +
'' - 1 + 0; // -1 - строка приводится к числу т.к. знак -
true + false; // 1 - два булевых - оба приводятся к числу
6 / '3'; // 2 - при делении и умножении строка приводится к числу
'2' * '3'; //  6 - при делении и умножении строка приводится к числу
4 + 5 + 'px'; // 9px - сначала сложение чисел, а потомконкатенация строки с числом
'$' + 4 + 5; // "$45" - конкатенация строки с числом дважды
'4' - 2; // 2 - строка приводится к числу т.к. знак -
'4px' - 2; // NaN - нельзя вычитать из строки, которую нельзя привести к числу
'  -9  ' + 5; // "  -9  5" - конкатенация строки с числом т.к. знак +
'  -9  ' - 5; // -14 - строка приводится к числу т.к. знак -
null + 1; // 1 - null приводится к 0
undefined + 1; // NaN - undefined приводится к NaN
' \t \n' - 2; // -2 - пробельные символы игнорируются, строка становится числом
