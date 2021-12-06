function datefunc(){
    let x = document.getElementById("date_id").value;
    //console.log(x);
    let res = x.split("-");
    //console.log(res[1], res[0],res[2]);
    if(res[0] == undefined || res[1] == undefined || res[2] == undefined){
        document.getElementById('show').innerHTML = "Empty Value :( Try Again!!"
    }
    else{
        age_calculator(res[0],res[1],res[2]);
    }
}
function age_calculator(year,month, date){
    let OddDays = [1, 2, 4, 6, 8, 9, 11];
    let today = new Date();
    let totaldays;
    let today_month = today.getMonth()+1;
    if(OddDays.indexOf(today_month) > -1){
        totaldays = 31;
    }
    else{
        totaldays = 30;
    }
    let today_date = today.getDate();
    let today_year = today.getFullYear();
    //console.log(today_month + " " + today_date + " " + today_year);
    if((date > today_date && month >= today_month && year >= today_year) || (month > today_month && year > today_year) || year > today_year){
        document.getElementById('show').innerHTML = "Hello Friend , You can't be Earlier than today :)"
    }
    else if(date == today_date && month == today_month && year == today_year){
        document.getElementById('greet').innerHTML = "Congratulations to your Parents,"
        document.getElementById('show').innerHTML = "You born today :)"
    }
    else{
        let age_month , age_date = 0;
        let birth_year = year;
        let birth_month = month;
        let birth_date = date;
        let age_year = today_year - birth_year;
        if(today_month < birth_month){
            age_year--;
            age_month = 12 - (birth_month - today_month);
            if(today_date < birth_date ){
                age_month--;
                age_date = totaldays - (birth_date - today_date);
            }
            else{
                age_date = today_date - birth_date;
            }
        }
        else if(today_month == birth_month){
            if(today_date < birth_date){
                age_month = 11;
                age_year--;
                age_date = totaldays - (birth_date - today_date);
            }
            else{
                age_month = 0;
                age_date = today_date - birth_date;
            }
        }
        else{
            age_month = today_month - birth_month;
            if(today_date < birth_date ){
                age_month--;
                age_date = totaldays - (birth_date - today_date);
            }
            else{
                age_date = today_date - birth_date;
            }
        }
        document.getElementById('greet').innerHTML = "Hello Friend, You are";
        let age = age_year + " years " + age_month + " months " + age_date + " days Old. :)";
        document.getElementById("show").innerHTML = age;
    //console.log(age_year + " " + age_month + " " + age_date);
    }
}
