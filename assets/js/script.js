$(document).ready (()=>{
    let idNumber = $('#idInput')
    $('#submit').on('click', () => {

        //Check if the input is empty
        if (idNumber.val() == '') {

            idNumber.addClass('is-invalid').removeClass('is-valid')
            
            $('#idInput+div').html('Input cannot be empty').addClass('invalid-feedback').removeClass('valid-feedback')
            $('#answer').html('')

        //check if the input is a valid id number
        } else if (!validCheck(idNumber.val())){
            idNumber.addClass('is-invalid').removeClass('is-valid')
            $('#idInput+div').html('Invalid input').addClass('invalid-feedback').removeClass('valid-feedback')
            $('#answer').html('')

        //Generating the answer
        } else {
            idNumber.addClass('is-valid').removeClass('is-invalid')
            $('#answer').html('Your birthday is '+ birthDate(idNumber.val()))
            $('#idInput+div').html('').addClass('valid-feedback').removeClass('invalid-feedback')
        }
    })

    //Checking the validity of the input

    function validCheck(inputNumber){
        index = inputNumber.length-1

        //check if the length of the input is 10, contains V or X at the end, others are digits and the date component has more than number of days in a year
        if (inputNumber.length==10) {
            if ((inputNumber.charAt(index) == 'V' || inputNumber.charAt(index) == 'v' || inputNumber.charAt(index) == 'X' || inputNumber.charAt(index) == 'x')&& !isNaN(inputNumber.substr(0,index))) {
                if (leapYear(parseInt('19'+inputNumber.substr(0,2)))){ //Checking leap years
                    if (parseInt(inputNumber.substr(2,3))<=366){
                        return true
                    } else {
                        return false
                    }
                }else {
                    if (parseInt(inputNumber.substr(2,3))<=365){
                        return true
                    } else {
                        return false
                    }
                }

            } else {
                return false
            }
        //check if the length of the input is 12, others are digits and the date component has more than number of days in a year
        } else if (inputNumber.length==12 && !isNaN(inputNumber)) {
            if (leapYear(parseInt('19'+inputNumber.substr(0,4)))){ //Checking leap years
                if (parseInt(inputNumber.substr(4,3))<=366){
                    return true
                } else {
                    return false
                }
            } else {
                if (parseInt(inputNumber.substr(4,3))<=365){
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }

    //Forming the birthday string
    function birthDate(inputNumber) {
        let year, birthday, days
        if (inputNumber.length==10) {
            year = '19'+inputNumber.substr(0,2)
            days = inputNumber.substr(2,3)
            birthday = monthDays(parseInt(year), parseInt(days))
        } else {
            year = inputNumber.substr(0,4)
            days = inputNumber.substr(4,3)
            birthday = monthDays(parseInt(year), parseInt(days))
        }
        return year + ' ' + birthday
    }

    //Generating birth month and day
    function monthDays (year, days){
        if (days>=500){
            days = days-500
        }
        if (days<=31){
            return 'January' + ' ' +days.toString()
        }
        days = days-31
        if (days<=29){
            return 'February' + ' ' +days.toString()
        }
        if (leapYear(year)){
            days = days-29
        } else {
            days = days-28
        }
        
        if (days<=31){
            return 'March' + ' ' +days.toString()
        }
        days = days-31
        if (days<=30){
            return 'April' + ' ' +days.toString()
        }
        days = days-30
        if (days<=31){
            return 'May' + ' ' +days.toString()
        }
        days = days-31
        if (days<=30){
            return 'June' + ' ' +days.toString()
        }
        days = days-30
        if (days<=31){
            return 'July' + ' ' +days.toString()
        }
        days = days-31
        if (days<=31){
            return 'August' + ' ' +days.toString()
        }
        days = days-31
        if (days<=30){
            return 'September' + ' ' +days.toString()
        }
        days = days-30
        if (days<=31){
            return 'October' + ' ' +days.toString()
        }
        days = days-31
        if (days<=30){
            return 'November' + ' ' +days.toString()
        }
        days = days-30
        if (days>31){
            return 'December' + ' ' +days.toString()
        }
        else {

        }
        return 'December' + ' ' +days.toString()
        
    }

    //Checking the year is a leap year or not
    function leapYear(year){
        if (year%100==0){
            if (year%400==0) {
                return true
            } else {
                return false
            }
        } else {
            if (year%4 ==0) {
                return true
            } else {
                return false
            }
        }
    }
})