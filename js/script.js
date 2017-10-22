// part 1
var APIURL = 'http://webdxd-student-api.herokuapp.com'
$.ajax({
	method: 'GET',
	url: APIURL + '/student',
})
.done(function( studentList ) {
	
	for (var i = 0; i < studentList.length;i++) {
		$('#sList').append($('<li class="showSkills" id="' + studentList[i]._id +  '">').html('<p>' + studentList[i].firstName + '</p>'))
	}
})

$('#sList').on('click', '.showSkills', function() {
	var sid = $(this).attr('id')
	debugger
	$.ajax({
		method: 'GET',
		url: APIURL + '/student/'+ sid

	})
	.done(function( studentDetail) {
		var skillList = studentDetail.skills
		for (var i = 0; i < skillList.length;i++) {
			$('#'+ studentDetail._id).append($('<span>').addClass('tag').text(skillList[i]))
		
		}
		$('#'+ studentDetail._id).removeClass('showSkills')
		
	})
})