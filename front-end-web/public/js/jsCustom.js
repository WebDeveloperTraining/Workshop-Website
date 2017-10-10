$(document).ready(function(){
	$("#btnmodel").click(function(){
		$(".modal").css("display","block");
		var name = $("#f-name").text(); 
		var sex = $("#f-sex").text(); 
		var mail = $("#f-mail").text(); 
		var province = $("#f-provice").text();
		var chuyenmon = $("#f-chuyenmon").text();
		var hocvan = $("#f-hocvan").text();
		var jobs = $("#f-jobs").text();
		var languages = $("#f-languages").text();
		$("#name").val(name);
		$("#sex").val(sex);
		$("#mail").val(mail);
		$("#address").val(province);
		$("#chuyenmon").val(chuyenmon);
		$("#hocvan").val(hocvan);
		$("#jobs").val(jobs);
		$("#languages").val(languages);
		
	});
	$("#changes").click(function(){
		var per=0;
		$(".modal").css("display","none");
		var name = $("#name").val(); 
		var sex = $("#sex").val(); 
		var mail = $("#mail").val(); 
		var province = $("#address").val();
		var chuyenmon = $("#chuyenmon").val();
		var hocvan = $("#hocvan").val();
		var jobs = $("#jobs").val();
		var languages = $("#languages").val();
	
		if(name==''||name=='Chưa cập nhật(*)'){
			$("#f-name").text("Chưa cập nhật(*)");
			$("#f-name").css("color","red");
			
		}
		else{
			$("#f-name").css("color","black");
			$("#f-name").text(name);
			per++;
		}

		if(sex==''||sex=='Chưa cập nhật(*)'){
			$("#f-sex").text("Chưa cập nhật(*)");
			$("#f-sex").css("color","red");
			
		}
		else{$("#f-sex").text(sex);
			$("#f-sex").css("color","black");
			per++;
		}

		if(mail==''||mail=='Chưa cập nhật(*)'){
			$("#f-mail").text("Chưa cập nhật(*)");
			$("#f-mail").css("color","red");
			
		}
		else{
			$("#f-mail").text(mail);
			$("#f-mail").css("color","black");
			per++;
		}

		if(province==''||province=='Chưa cập nhật(*)'){
			$("#f-provice").text("Chưa cập nhật(*)");
			$("#f-provice").css("color","red");
			
		}
		else{
			$("#f-provice").text(province);
			$("#f-provice").css("color","black");
			per++;
		}

		if(chuyenmon==''||chuyenmon=='Chưa cập nhật(*)'){
			$("#f-chuyenmon").text("Chưa cập nhật(*)");
			$("#f-chuyenmon").css("color","red");
			
		}
		else{
			$("#f-chuyenmon").text(chuyenmon);
			$("#f-chuyenmon").css("color","black");
			per++;
		}

		if(jobs==''||jobs=='Chưa cập nhật(*)'){
			$("#f-jobs").text("Chưa cập nhật(*)");
			$("#f-jobs").css("color","red");
			
		}
		else{
			$("#f-jobs").text(jobs);
			$("#f-jobs").css("color","black");
			per++;
		}
		if(languages==''||languages=='Chưa cập nhật(*)'){
			$("#f-languages").text("Chưa cập nhật(*)");
			$("#f-languages").css("color","red");
			
		}
		else{
				$("#f-languages").text(languages);
			$("#f-languages").css("color","black");
			per++;
		}
		if(hocvan==''||hocvan=='Chưa cập nhật(*)'){
			$("#f-hocvan").text("Chưa cập nhật(*)");
			$("#f-hocvan").css("color","red");
		
		}
		else{
				$("#f-hocvan").text(languages);
			$("#f-hocvan").css("color","black");
				per++;
		}
		var s = per*100/8;
		$("#probarr .progress-bar").css("width",s+"%");
		$("#probarr .progress-bar").html(s+"%");
		$("#perprog").text(s+"%");
	});
	$(".close").click(function(){
		$(".modal").css("display","none");
	});
});

$(document).ready(function () {
	
    $('.nav-tabs > li a[title]').tooltip();
    
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
$(document).ready(function(){
	$("#file").on("change",function(e){
		var files=$(this)[0].files;
		if(files.length>=2){
			$(".label-span").text(files.length +" file ready to upload");
		}
		else if(files.lenth==0){

		}else
			{
				var filename=e.target.value.split('\\').pop();
				$(".label-span").text(filename);
				
			}

	})
})

$(document).ready(function(){
	$("#sub-1").click(function(){
		$(".active-sub").removeClass();
		$("#sub-1").addClass("active-sub");
	})
	$("#sub-2").click(function(){
		$(".active-sub").removeClass();
		$("#sub-2").addClass("active-sub");
	})
	$("#sub-3").click(function(){
		$(".active-sub").removeClass();
		$("#sub-3").addClass("active-sub");
	})
	$("#sub-4").click(function(){
		$(".active-sub").removeClass();
	});
});