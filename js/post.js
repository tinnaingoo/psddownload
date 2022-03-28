/*Document Type Javascript */


//body Item////
function postTemplate(post_item) {
	return`
		<!-- Post Item Box --->
     <div id="${post_item.name}" class="col-sm-6 col-md-4 col-lg-3">
     	<!-- Thumnail Box --->
        <div class="thumbnail">
        <!-- Post Image -->
          <img src="${post_item.img}" alt="" class="img-responsive">
		<!-- Caption Box --->
          <div class="caption">
            <h3>${post_item.name}
			<br/><span class="small" style="color:blue;"> (${post_item.type} / ${post_item.size})</span> </h3>
			<br/>${post_item.desc}
			<br/>================

			<br/>Please don't return sale orther person.
			<br/>================

			<br/>Credit to ${post_item.credit}.
			<br/>================
			<br/><p style="color:red;"> Password is ${post_item.pas}</p>
    
            
			<div class="btn-toolbar text-center">
              <a style="margin-left: 0px; " href="${post_item.mdLink}" role="button" class="btn btn-primary pull-left">Download Now</a>
            </div> <!-- Btn Toolbar End --->
			
          </div> <!-- Caption Box end -->
        </div> <!-- Thumnail Box End --->
      </div> <!-- Post Item End --->

<!-- 	=========================================================================================================
		===========================================Creat by Tin Naing Oo ========================================
        ===========================================Post Number (1) ============================================== -->
`;
}
	document.getElementById("post").innerHTML = `
		<div class="wedding_posts">
			${wedding_post.map(postTemplate).join("")}
		</div>
		<div class="ahlu_posts">
			${ahlu_post.map(postTemplate).join("")}
		</div>
		<div class="birthday_posts">
			${birthday_post.map(postTemplate).join("")}
		</div>
		<div class="orther_posts">
			${orther_post.map(postTemplate).join("")}
		</div>
	`;
