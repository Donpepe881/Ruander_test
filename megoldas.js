// 1) feladat

document.write("Joó Péter");
document.write("#Team11 - Junior Frontend Fejlesztő + Webfejlesztő");
document.write("HTML 90")
document.write("CSS 80")
document.write("JavaScript 70")


// 2) feladat



/* Készíts egy olyan programot, mely bekér egy számot és a hatványozás mértékét, és kiírja annak 
 hatványát. pl.: 2 és 3, azaz kettő a harmadikon, azaz az eredmény 8 lesz */

let szam = prompt("Adj meg egy számot")
let hatvany = prompt("Add meg a szám hatványát")

let szamHatvanya = (szam ** hatvany);
document.write(`A megadott szám ${szam}, a megadott hatvány értékkel ${hatvany}: ${szamHatvanya}`);

// 3) feladat

/*Készíts egy programot, ami egy adott intervallumban generál ki páros számot, és írja ki az értékét, a 
határétéket te magad állíthatod be, bekérés, alapján */

let szam = Math.random() * 100;

document.write(`Random szám: ${szam}`);

// 4) feladat

/*Készíts egy programot, ami bekér egy életkort 1-120 között és ennek függvényében megjeleníti az 
illető besorolását. 120 kor felett vagy 0 alatt, pedig hibát kapjunk! 
• Kisgyermekkor: 0-6 év 
• Gyermekkor: 6-12 év 
• Serdülőkor: 12-16 év 
• Ifjúkor: 16-20 év 
• Fiatal felnőtt kor: 20-30 év 
• Felnőtt kor: 30-60 
• Aggkor: 60-tól */

let eletkor = prompt("Add meg az életkorod")

if (eletkor > 60 && eletkor < 120) {
    document.write(`A megadott életkor alapján ${eletkor}: aggkor`)
} else if (eletkor < 59 && eletkor > 30) {
    document.write(`A megadott életkor alapján ${eletkor}: Felnőtt kor`)
} else if (eletkor < 29 && eletkor > 20) {
    document.write(`A megadott életkor alapján ${eletkor}: Fiatal felnőtt kor`)
} else if (eletkor < 19 && eletkor > 16) {
    document.write(`A megadott életkor alapján ${eletkor}: Ifjúkor`)
} else if (eletkor < 15 && eletkor > 12) {
    document.write(`A megadott életkor alapján ${eletkor}: Serdülőkor`)
} else if (eletkor < 11 && eletkor > 6) {
    document.write(`A megadott életkor alapján ${eletkor}: Gyermekkor`)
} else if (eletkor < 5 && eletkor > 0) {
    document.write(`A megadott életkor alapján ${eletkor}: Kisgyermekkor`)
} else {
    document.write("A megadott életkor hibás")
}

// 5) feladat

/*Készíts egy olyan kódot, mely paraméterként bekér egy számot és egy osztót és kiírja szövegesen, 
hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla. */

let szam = prompt("Adj meg egy számot")
let oszto = prompt("Ajd meg egy osztót")

if (szam % oszto == 0) {
    document.write(`A megadott szám (${szam}) a megadott osztóval (${oszto}) osztható`)
} else {
    document.write(`A megadott szám (${szam}) a megadott osztóval (${oszto}) NEM osztható`)
}

// 6) feladat

// Készíts egy programot, ami kiírja az első 10 négyzetszámot! 


for (let i = 1; i <= 10; i++) {
    let szam = i * i;
    document.write(` ${szam} `)
}

