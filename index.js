/*Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

    Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. 
    Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
    Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. 
    Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. 
    Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/
    let urovenHTML = prompt ("Vyjadrete svou uroven znalosti HTML cislem od 0 do 100");
    let urovenCSS = prompt ("Vyjadrete svou uroven znalosti CSS cislem od 0 do 100");
    let urovenJS = prompt ("Vyjadrete svou uroven znalosti Java Sriptu cislem od 0 do 100");

    const updateSkill =(id,value) => {
        document.querySelector("#" +id+" .skill__progress").style.width = value + "%" ;
        document.querySelector("#" +id+" .skill__value").textContent = value + "/100";
        
    }
    
    
    if (urovenHTML >= 0 && urovenHTML <= 100) {
        updateSkill ("skill1",urovenHTML)
    }else {
        alert("Neplatná hodnota pro dovednost HTML.Zadejte prosím číslo v rozsahu 0-100");
    }

    if (urovenHTML >= 0 && urovenHTML <= 100) {
        updateSkill ("skill2",urovenCSS)
    }else {
        alert("Neplatná hodnota pro dovednost CSS.Zadejte prosím číslo v rozsahu 0-100");
    }


    if (urovenHTML >= 0 && urovenHTML <= 100) {
        updateSkill ("skill3",urovenJS)
    }else {
        alert("Neplatná hodnota pro dovednost JS.Zadejte prosím číslo v rozsahu 0-100");
    }

 
