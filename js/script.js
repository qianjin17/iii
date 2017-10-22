// part 1

$.ajax({
	method: 'GET',
	url:'http://webdxd-student-api.herokuapp.com/student/',
})
.done(function( studentList ) {
	
	for (var i = 0; i < studentList.length;i++) {
		$('#sList').append($('<li class="showSkills" id=" ' + studentList[i]._id +  ' ">').html('<p>' + studentList[i].firstName + '</p>'))
	}
})

$('#sList').on('click', '.showSkills', function() {
	var sid = ($(this).attr('id'))
	#.ajax({
		method: 'GET',
		url:'http://webdxd-student-api.herokuapp.com/student/'+ sid

	})
	.done(function(studentDetail) {
		var showSkills = studentDetail.skills
		for (var i = 0; i < studentList.length;i++) {
			$('#'+ studentDetail._id).append($('<span>').addClass('tag').text(skillList[i]))
		
		}
		

	})

}