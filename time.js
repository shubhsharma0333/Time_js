




function timeConversion(s) {
    function addMins(s1){                              //function to add 45 mins
      const mins = Number(s1.slice(2,4));
      const fHours = Number(s1.slice(0, 2));
      let newMins = mins + 45;
      if(newMins >= 60)
      {
        var num = fHours+1;
        var num_s = num.toString();
        let s2 = s1.replace(s.slice(0,2), num_s);
        var num1 = newMins-60;
        var num_s1 = num1.toString();
        return(s2.replace(s.slice(2,4), num_s1);
      }else{
        newMins_s = newMins.toString();
        return s1.replace(s.slice(2,4), newMins_s);
      }
    }

    function addSeconds(s1){                                      //function to add 45 Seconds
      const seconds = Number(s1.slice(4,6));
      const fMins = Number(s1.slice(2,4));
      let newSec = seconds + 45;
      if(newSec >= 60){
        var num = fMins+1;
        var num_s = num.toString();
        let s2 = s1.replace(s.slice(2,4), num_s )
        var num1 = newSec - 60;
        var num_s1 = num1.toString();
        return s2.replace(s.slice(4,6), num_s1);
      }else{
        newSec_s = newSec.toString();
        return s2.replace(s.slice(4,6), newSec_s)
      }
    }

    const hours = Number(s.slice(0, 2));                        //conversion of 12 hrs format to 12 hrs format
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) { // 12am edge-case
          let ans1 = addMins(time.replace(s.slice(0, 2), '00'));         //calling both the addMins, addSeconds functio to the result
          return addSeconds(ans1);
        }
        let ans2 = addMins(time);                                       //calling both the addMins, addSeconds functio to the result
        return addSeconds(ans2);
    } else if (ampm === 'PM') {
        if (hours !== 12) {
            let ans3 = addMins(time.replace(s.slice(0, 2), String(hours + 12))) ;//calling both the addMins, addSeconds functio to the result
            return addSeconds(ans3);
        }
        let ans4 = addMins(time); // 12pm edge-case              //calling both the addMins, addSeconds functio to the result
        return addSeconds(ans4);
    }
    return 'Error: AM/PM format is not valid';
}
