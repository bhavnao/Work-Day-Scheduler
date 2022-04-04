var today = moment();
$("#currentDay").text(today.format("dddd,MMM Do, YYYY"));

var time = [8,9,10,11,12,1,2,3,4,5];
var hours= [8,9,10,11,12,13,14,15,16,17];
var container = $('.container');
var hour = moment().format('H');
console.log(hour);

function timeBlock(){
for(var i=0; i<time.length; i++){
    console.log(time[i]);
    var applicableClass = "future";
    if (hour > hours[i]) {
        applicableClass = "past";
    } else if (hour === hours[i]) {
        applicableClass = "present";
    } else {
        applicableClass = "future";
    }
    var template = `
        <div class="input-group mb-3" id="hour_schedule${time[i]}">
        <label class="input-group-text col-1" id="hour" for="inputGroupSelect01">${time[i]}:00</label>
        <textarea type="text" class="form-control col-10 editable ${applicableClass}"  ></textarea>
        <button class="btn btn-outline-secondary fas fa-save saveBtn col-1" type="button" id="button-addon2"></button>
      </div>`
container.append(template);
console.log(container);
}
}

timeBlock();



var saveBtn = $(".saveBtn");

saveBtn.on("click", function(event) {
   
   var time = $(this).parent().attr("id");
    var data = $(this).siblings(".editable").val();

    localStorage.setItem(time, data);   
});

function applyInput(hr) {
     var keyName = "hour_schedule"+hr; 

    $("#"+keyName).each(function() {        
        var currData = localStorage.getItem(keyName);

        if(currData !== null) {
            $(this).children(".editable").val(currData);
        }
    });
};

applyInput(8);
applyInput(9);
applyInput(10);
applyInput(11);
applyInput(12);
applyInput(1);
applyInput(2);
applyInput(3);
applyInput(4);
applyInput(5);