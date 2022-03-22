// JavaScript Document
const post_listData = [
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  },
  {
    name: "Mingala Saung Fatesar",
	description: "For Wedding Cover Design",
	img: "https://raw.githubusercontent.com/tinnaingoo/psddownload/Page/img/post_item.jpg",
	type: "Photoshop File",
	size: "12x8",
	pas: "tc-myaing",
	credit: "Original Creator",
	dLink1: "mediafire link",
	dLink2: "mega link",
	dLink3: "pcloud link",
	dLink4: "google drive"
  }
];

function postTemplate(post_item) {
	return`
	<div class="item_frame">
	<div class="item_background">
    <img class="img" src="${post_item.img}"><img/>
    <p class="name"> <strong>${post_item.name}</strong> </p>
	<p class="des"> - ${post_item.description}</p>
	<p class="type"> - ${post_item.type} </p>
	<p class="credit"> - Credit to ${post_item.credit} </p>
	<p class="pas"> - Password is "${post_item.pas}". </p>
	<p class="link">
	<a class="a" href="${post_item.dLink1}" target="_blank">Mediafire</a>,
	<a class="a" href="${post_item.dLink2}" target="_blank">Mega</a>,
	<a class="a" href="${post_item.dLink3}" target="_blank">Pcloud</a>,
	<a class="a" href="${post_item.dLink4}" target="_blank">Google Drive</a>
	</p>

	</div>
	</div>
`;
}

document.getElementById("main").innerHTML = `
<H1 class="H1"> PSD Download </H1>
<p class="post_count"> Total Post ( ${post_listData.length}) </p>

${post_listData.map(postTemplate).join("")}


<p class="footer"> Web Design by Tin Naing Oo </p>
`;
