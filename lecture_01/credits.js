let credits = 39849;

function badgeAssigner(credits){
    if (credits<4500){
        return "Rising Star";
    }else if (credits>=4500 && credits<6000){
        return "Mega Leader";
    } else if (credits>=6000 && credits<7500){
        return "Gega Leader";
    } else if (credits>=7500){
        return "Tera Leader";
    }
}


console.log(badgeAssigner(1000));
console.log(badgeAssigner(5000));
console.log(badgeAssigner(6500));
console.log(badgeAssigner(credits));