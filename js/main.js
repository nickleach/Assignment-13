
$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done( function(data){
  var stuff = data.timelines;
    stuff.forEach( function(x){
    var dates = x.timestamp;
    var m = moment(new Date(dates));
          x.date= m.format('M/DD/YY');
          x.times= m.format('hh:mm');
    });
  $('.container').html(template.timelines(data));
});

