var RadioChecked = [];// פתיחת מערך לשמירת השולחן הנבחרת

function load() {
    document.getElementById("textsum").innerHTML = ""; // מאפס את סיכום התשובות עם הטעינה
    var submitButton = document.getElementById("send"); // הגדרת משתנה של כפתור שליחת הטופס
    submitButton.disabled = true; // לא מאפשר לחיצה על הכפתור
}

function enableSend() {
    var username = document.getElementById("name").value.length; //משתנה לקליטת  אורך שם משתמש 
    var radios = document.getElementsByName("desk");// מערך לקליטת כלל ערכי הבחירת בשאלת רדיו
    

    for (var i = 0; i < radios.length; i++) { // לולאה שמטרתה לבדוק האם התבצעה בחירה של אחד מהאופציות ברדיו
        var lRadioChecked = RadioChecked.length;
        if (radios[i].checked) {
            RadioChecked[lRadioChecked] += radios[i]; // הכנסת האופציות שנבחרו למערך, בגלך שהבדיקה מתבצעת על שאלון רדיו המערך אמור להכיל משתנה אחד.
        }
    }


    if (lRadioChecked == 1 && username > 1) {// בדיקה האם מערך הרדיו שווה לאחד והוזן שם משתמש
        var submitButton = document.getElementById("send");
        submitButton.disabled = false; // מאפשר לחיצה על הכפתור
        submitButton.classList.add("selected"); // מוסיף לכפתור את הגדרות עיצוביות 
    } else {
        alert("הכנס את שמך ובחר את סוג השולחן והפריטים");
    }
}



function fullForm() {
    document.getElementById("textsum").innerHTML = ""; // מאפס את תשובות השאלון במידה וביצעת מילוי נוסף
    var username = document.getElementById("name").value; //משתנה לקליטת שם משתמש
    alert("תודה " + username + " בקרוב נראה לך את תוצאות השאלון "); // הודעת אישור של קליטת הנתונים
    document.getElementById("userName").innerHTML = username; // הכנסת השם לתוך התא בטבלה
    document.getElementById("textsum").innerHTML += "הנה ההמלצות שלנו לפריטים שבחרת:"
    imageDesk(); // קריאה לפונקצייה שאחראית על 
    itemsImages();
}

function imageDesk() {
  
    var deskImage = document.getElementById("deskImage");// יצירת משתנה להגדרת מקום לתמונה בהתאם לבחירת השולחן
    var yourdesk = "השולחן שבמשרדך הינו שולחן";// משתנה המגדיר את החלק הראשון של התיאור המילולי של השולחן הנבחר. חוזר על עצמו בכל פעם ולכן נמצא במשתנה. 

    if (RadioChecked == "שולחן מתכת") { // במידה ותיאור השולחן הוא שולחן מתכת התמונה תוצג בהתאם
        deskImage.src = "images/2x/metalDesk.png";
        document.getElementById("textsum").innerHTML += "<br/>" + yourdesk + " מתכת "; // הצגת תיאור מילולי של השולחן הנבחר
    } else {
        if (RadioChecked == "שולחן עץ") {
            deskImage.src = "images/2x/woodDesk.png";
            document.getElementById("textsum").innerHTML += "<br/>" + yourdesk + " עץ ";
        } else {
            if (RadioChecked == "שולחן פלסטיק") {
                deskImage.src = "images/2x/plasticDesk.png";
                document.getElementById("textsum").innerHTML += "<br/>" + yourdesk + " פלסטיק ";
            } else {
                deskImage.src = "images/2x/ironDesk.png";
                document.getElementById("textsum").innerHTML += "<br/>" + yourdesk + " ברזל ";
            }
        }
    }
}

function itemsImages() { // פונקצייה שבודקת את הפריטים שנבחרו 
    var CheckBoxces = document.getElementsByName("items"); // הגדרת משתנה של צ'קבוקס
    var images = document.getElementsByClassName("itemPic"); // הגדרת משתנה של התמונות

    for (var i = 0; i < CheckBoxces.length; i++) { // ביצוע ללואה לבדיקת הפריטים שנבחרו והשוואתם לתמונה 
        if (CheckBoxces[i].checked && CheckBoxces[i].value == images[i].alt) { // בדיקה האם הפריט נבחר והאם הערך שלו שווה לתיאור התמונה
            images[i].classList.add("selected"); // התמונה הנבחרת מקבלת שינוי בcss
            if (images[i].alt == "מחשב") { // בדיקת כל אחת מהאופציות והוספת טקסט מתאים בהתא לתמונות שנבחרו
                document.getElementById("textsum").innerHTML += "<br/>" + "מחשב: המחשב מייצג את המרכז של שולחן העבודה, ולכן מקומו בחזית או באמצע שולחן העבודה, כאשר המסך פונה ישירות אליך. מומלץ להניח אותו במרכז כך שיאפשר תחושת יציבות וריכוז, במיוחד אם הוא הכלי המרכזי שלך לעבודה.";
            } else {
                if (images[i].alt == "מנורה") {
                    document.getElementById("textsum").innerHTML += "<br/>" +  "מנורה: את המנורה כדאי למקם בפינה שמאלית עליונה של השולחן (או ימנית אם אתה שמאלי), כדי להאיר על סביבת העבודה בצורה שמונעת צללים. אור נעים ותאורה טבעית יכולים להגביר את הפרודוקטיביות.";
                } else {
                    if (images[i].alt == "צמח") {
                        document.getElementById("textsum").innerHTML += "<br/>" + "צמח: הצמח מסמל אנרגיה טבעית, רעננות וצמיחה. מיקום מומלץ הוא בפינה השמאלית העליונה של השולחן, הנקרא פינת העושר בפנג שווי, כדי להזמין שפע והתחדשות.";
                    } else {
                        if (images[i].alt == "כלי לעטים") {
                            document.getElementById("textsum").innerHTML += "<br/>" + "כלי לעטים: כדי לשמור על סדר ולהוסיף ארגון, מיקום הכלי לעטים כדאי להיות בצד ימין של השולחן, קרוב ליד הדומיננטית שלך, כך שיהיה נגיש לשימוש.";
                        } else {
                            if (images[i].alt == "ספרים") {
                                document.getElementById("textsum").innerHTML += "<br/>" + "ספרים: אם יש לך ספרים רלוונטיים לעבודה, הנח אותם בצד שמאל של השולחן, קרוב לצמח אם אפשר. מיקום זה מעודד למידה וחכמה לפי הפנג שווי.";
                            } else {
                                if (images[i].alt == "שעון") {
                                    document.getElementById("textsum").innerHTML += "<br/>" + "שעון: שעון ממקמים במרכז עליון של השולחן או קרוב לעין המבט. אם יש שעון עומד או קיר, מומלץ לשמור על קו מבט ישיר כדי לעקוב אחר הזמן בקלות.";
                                } else {
                                    document.getElementById("textsum").innerHTML += "מומלץ להכניס פריטים על מנת שנוכל להמליץ לך על הסידור הטוב ביותר"
                                }
                                
                            }

                        }
                    }
                }
            }
        }
    }
}