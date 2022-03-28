// JavaScript Document
				var arr = 	[
							{
							"title": "Photoshp File (1)",
							"description":"This file use to easy in Photoshop",
							"post_type":"Wedding or Birthday etc...",
							"file_type":"PSD or PNG or JPG",
							"url_1":"Link1",
							"url_2":"Link2"
							},							
														{
							"title": "Photoshp File (2)",
							"description":"This file use to easy in Photoshop",
							"post_type":"Wedding or Birthday etc...",
							"file_type":"PSD or PNG or JPG",
							"url_1":"Link1",
							"url_2":"Link2"
							},
														{
							"title": "Photoshp File (3)",
							"description":"This file use to easy in Photoshop",
							"post_type":"Wedding or Birthday etc...",
							"file_type":"PSD or PNG or JPG",
							"url_1":"Link1",
							"url_2":"Link2"
							},
														{
							"title": "Photoshp File (4)",
							"description":"This file use to easy in Photoshop",
							"post_type":"Wedding or Birthday etc...",
							"file_type":"PSD or PNG or JPG",
							"url_1":"Link1",
							"url_2":"Link2"
							},
							{
							"title": "Photoshp File (5)",
							"description":"This file use to easy in Photoshop",
							"post_type":"Wedding or Birthday etc...",
							"file_type":"PSD or PNG or JPG",
							"url_1":"Link1",
							"url_2":"Link2"
							}
						]

document.getElementById("main").innerHTML =

    <!-- Navigation bar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">PSD Free Download</a>
        </div>
        <nav role="navigation" class="collapse navbar-collapse navbar-right">
          <ul class="navbar-nav nav">
            <li class="active"><a href="#">Home</a></li>
            <li class="dropdown">
              <a data-toggle="dropdown" href="#" class="dropdown-toggle">Yachts <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li class="active"><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li class="divider"></li>
                <li><a href="#">All Items</a></li>
              </ul>
            </li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </div><!-- End Navigation bar -->




    <!-- Slide gallery -->

        <div class="col-xs-12">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="img/carousel1.jpg" alt="">
              <div class="carousel-caption">
              </div>
            </div>
            <div class="item">
              <img src="img/carousel2.jpg" alt="">
              <div class="carousel-caption">
              </div>
            </div>
            <div class="item">
              <img src="img/carousel3.jpg" alt="">
              <div class="carousel-caption">
              </div>
            </div>
          </div>
          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
        </div>
      </div>
      </div>
     <!-- End Slide gallery -->
	
	<!-- Thumbnails -->
    <div class="container thumbs">
    
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="img/pic1.jpg" alt="" class="img-responsive">
          <div class="caption">
            <h3 class="">Motor</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div class="btn-toolbar text-center">
              <a href="#" role="button" class="btn btn-primary pull-right">Details</a>
            </div>
          </div>
        </div>
      </div>
     
</div>

;
      