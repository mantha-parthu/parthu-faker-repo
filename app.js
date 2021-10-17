var faker=require('faker');

var teamName = getIPLTeamName();
var captain = getIPLTeamCaptainName();
var viceCaptain = getIPLTeamViceCaptainName();
var mentor = getIPLTeamMentor();
var phoneNumber = getIPLTeamPhoneNumber();
var state = getIPLState();

for (i = 1; i <= 3; i++) {
    var suffix = getSuffix(i);
    console.log("This is "+i+suffix+" IPL Team");
    console.log("Team Name::"+teamName);
    console.log("Captain::"+captain);
    console.log("Vice Captain::"+viceCaptain);
    console.log("Mentor::"+mentor);
    console.log("Phone Number::"+phoneNumber);
    console.log("State::"+state);
    console.log("##########################\n");

}

function getSuffix(i){
    if(i%10 == 1){
       return  suffix = "st"
    }else if(i%10 == 2){
        return suffix = "nd"
    }else if(i%10 == 3){
        return  suffix = "rd"
    }else {
        return suffix = "th"
    }
}



function getIPLTeamName() {
    return faker.name.findName();
  }


  function getIPLTeamCaptainName() {
    return faker.name.findName();
  }  

  function getIPLTeamViceCaptainName() {
    return faker.name.findName();
  }  

  function getIPLTeamMentor() {
    return faker.name.findName();
  } 

  function getIPLState(){
      return faker.address.state();
  }

  function getIPLTeamPhoneNumber(){
      return faker.phone.phoneNumber()
  }
