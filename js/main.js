var Sharp = String(prompt("1.Keskin savol javobga tayyormisiz#️⃣?"))
console.log(Sharp);

var Broken = Number(prompt("2.Nechtasi aldab ketgan?"))
console.log(Broken);

var Mother = String(prompt("3.Onangizni eng katta orzusi nima deb oylaysiz? (albatta sizga bog'liq)"))
console.log(Mother);

var Hobby = String(prompt("4.Shaxsiy rivojlanish ustida ishlaysizmi? (IT dan tashqari albatta/ ha bo'lsa misol bering)"))
console.log(Hobby);

var Quest = String(prompt("5.Odamlarni gapi siz uchun shunchalik muhimmi? (Bazi gaplariz sababli paydo bo'lgan savolim)"))
console.log(Quest);

var Pupil = String(prompt("6.O'quvchilar bilan do'stona bo'lgan yaxshimi? (ha / yo'q )"))
console.log(Pupil);

var Thouht = String(prompt("7.Siz uchun o'quvchilarning fikri muhimmi yoki oz bilganingizni qilaverasizmi? (o'quvchilarga tegishli qarorlarda albatta)"))
console.log(Thouht);

var Wait = String(prompt("8.IT dan kutganingiz va kutayotganlariz..."))
console.log(Wait);

var Family = String(prompt("9.Oila qurishga nima halaqit beryapti? (Yoshim,  Akam,  Qiz yoq, Shunchaki holi tayyor emasman, Boshqa sabablar)"))
console.log(Family);

var Present = String(prompt("10.Otangiz va onangizga qilgan eng yaxshi sovgangiz?"))
console.log(Present);


var result = [
    "Ready: " + " " + Sharp + " \n "+
    "Brokenheart:"+"" + Broken + "\n"+
    "Dream of your mother:"+"" + Mother + "\n"+
    "Extra activity:"+"" + Hobby + "\n"+
    "Attitudes of others for you:"+"" + Quest + "\n"+
    "Friendship among teacher and pupil:"+"" + Pupil + "\n"+
    "Thought of others:"+"" + Thouht + "\n"+
    "Goals in the future:"+"" + Wait + "\n"+
    "Problems in merry:"+"" + Family + "\n"+
    "The best prize:"+"" + Present + "\n"
]

alert (result)