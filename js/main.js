var visitCL = false,
		visitCD = false,
		visitST = false,

    chrNum     = 0,
		clsNum     = 0,
		dteNum     = 0,
		stuNum     = 0,
    reaNum     = 0,
		yearPeriod = '',

		currpage = '',

    curcid   = '',
    curdid   = '',
    cursid   = '',

    curclindex   = '',
    curcldtindex = '';
    curdtstindex = '',

    chrNmShort    = '',
		churchName    = '',
		churchSite    = '',
		churchPage    = '',
		churchAddr    = '',
		churchPh      = '',
		churchEm      = '',

    catechistName = '',
    serverGUI     = '',
    appFormId     = '',
    teaId         = '',

		dataEdited  = false,
    testLock   = true,
    ismobile    = false,
    slideStr    = '',
		doslide     = true,
		safariDesk  = false,
		ieBrowser   = false,
    browserName = '',

    clLtDLoaded  = false,
    reasonLoaded = false,

    showSpin    = false,
    devbox      = false,
    loginAni    = '',
    loginOK     = '',
    sn          = '',
    un          = '',
    pw          = '',
    pn          = '',
    sx          = '',
    sk          = '',
    ky          = '',
    idleMax     = 10, // = 10; Logout after 10 minutes of IDLE
		idleTime    = 0,
    tout        = 0,
    interval    = null,
    serviceOK   = false,
    serviceResp = '',
    serviceMsg  = '',
    encStr      = '',
    ppdata      = '',

    saveFor     = '',
    saveMsg     = '',
    isLocked    = false,

    newReason   = '',
    newelm      = '',
    newwhat     = '',
    newidx      = '',

		winW = 0,
		winH = 0,

    churchArray   = [],
    calDateArray  = [],
		clLtArray     = [],

    reasonArray   = [],
    thReasonArray = [],

    stArrayOrg     = [],
	  thReasonArrayOrg = [],

		// inspired by http://fgnass.github.io/spin.js/#v1.2.6
		opts = {
			lines: 12,             // The number of lines to draw
			length: 7,             // The length of each line
			width: 5,              // The line thickness
			radius: 10,            // The radius of the inner circle
			scale: 1.0,            // Scales overall size of the spinner
			corners: 1,            // Roundness (0..1)
			color: '#000',         // #rgb or #rrggbb
			opacity: 1/4,          // Opacity of the lines
			rotate: 0,             // Rotation offset
			direction: 1,          // 1: clockwise, -1: counterclockwise
			speed: 1,              // Rounds per second
			trail: 100,            // Afterglow percentage
			fps: 20,               // Frames per second when using setTimeout()
			zIndex: 2e9,           // Use a high z-index by default
			className: 'spinner',  // CSS class to assign to the element
			top: '25%',            // center vertically '50%',
			left: '50%',           // center horizontally
			shadow: false,         // Whether to render a shadow
			hwaccel: false,        // Whether to use hardware acceleration (might be buggy)
			position: 'absolute'  // Element positioning
		};

function LoadMockChurchList() {
  var c = 0,
      s = "",
      objCH = {};

  c++;
  s = "Parish 1";
  objCH = {};
  objCH.chSite = '333333';
  objCH.chName = s;
  objCH.chAddr = '10210 N. 25th Avenue, Ste. 230';
  objCH.chAddr1 = '';
  objCH.chCity = 'Phoenix';
  objCH.chState = 'AZ';
  objCH.chZIP = '85021';
  objCH.chPhone = '6025679000';
  objCH.chEmail = 'church1@pdsdemo.com';
  churchArray.push(objCH);

  c++;
  s = "Parish 2";
  objCH = {};
  objCH.chSite = '333333';
  objCH.chName = s;
  objCH.chAddr = '180 N. Dunbarton Drive';
  objCH.chAddr1 = '';
  objCH.chCity = 'Florence';
  objCH.chState = 'SC';
  objCH.chZIP = '29501';
  objCH.chPhone = '8434139001';
  objCH.chEmail = 'church2@pdsdemo.com';
  churchArray.push(objCH);
}

function LoadMockClassList() {
  var c = 0,
      s = "",
      objCL = {};

  c++;
  s = "First Communion";
  objCL = {};
  objCL.clOrderNum = c;
  objCL.clRec = 0;
  objCL.clName = s;
  objCL.dtArray = [];
  clLtArray.push(objCL);

  c++;
  s = "Bible Study";
  objCL = {};
  objCL.clOrderNum = c;
  objCL.clRec = 0;
  objCL.clName = s;
  objCL.dtArray = [];
  clLtArray.push(objCL);

  c++;
  s = "Jr. High Formation";
  objCL = {};
  objCL.clOrderNum = c;
  objCL.clRec = 0;
  objCL.clName = s;
  objCL.dtArray = [];
  clLtArray.push(objCL);

  c++;
  s = "Reconciliation";
  objCL = {};
  objCL.clOrderNum = c;
  objCL.clRec = 0;
  objCL.clName = s;
  objCL.dtArray = [];
  clLtArray.push(objCL);
}

function LoadMockClassDate() {
  var s = "",
  objDate = {};

  s = "10/02/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "10/10/2016";
  objDate = {};
  objDate.date = s;
  //objDate.desc = "note of "+s;
  objDate.desc =
    "Did Eva Longoria Forget Her Pants "+
    "Lauren Tuck 2 hours 1 minute ago Comments  Sign in to like  Reblog on Tumblr  Share  Tweet  Email"+
    "Eva Longoria wearing a white blazer as a dress at Paley Center's tribute to Hispanic achievement."+
    "Eva Longoria wears a white blazer as a dress at the Paley Center for Media's Hollywood Tribute to "+
    "Hispanic Achievements in Television in Beverly Hills, Calif., Oct. 24, 2016. (Photo: Araya Diaz/Getty Images for the Paley Center for Media)"+
    "Coco Chanel once famously said, Eva Longoria seemed to heed the famed fashion designer's advice before heading out on Monday night - and took off her pants."+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "10/14/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "10/22/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "11/12/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "11/25/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "12/04/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);

  s = "12/19/2016";
  objDate = {};
  objDate.date = s;
  objDate.desc = "note of "+s;
  objDate.stat = s;
  objCL.stArray = [];
  clLtArray[1].dtArray.push(objDate);
}

function LoadMockStudentList() {
  thReasonArray = [];
  thReasonArray.length = 0;
  thReasonArray.push("Family Matter");
  thReasonArray.push("Out of Town");
  thReasonArray.push("Sick");
  thReasonArray.push("Tardy");
  thReasonArray.push("Doctor Appointment");
  thReasonArray.push("Dentist");
  thReasonArray.push("Vacation");

  if (window.sessionStorage) {
    curclindex = sessionStorage.getItem("curclindex");
    curcldtindex = sessionStorage.getItem("curcldtindex");
  }

  var c = 0,
      s = '',
      cln = '',
      cld = '',
      objST = {};

  if ((clLtArray[Number(curclindex)-1] !== null) && (clLtArray[Number(curclindex)-1] !== undefined)) {
    cln = clLtArray[Number(curclindex)-1].clName;
  }
  if ((clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1] !== null) && (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1] !== undefined)) {
    cln = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].clDate;
  }

  c++;
  s = "Freeman,Valerie";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = true;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = thReasonArray[2];
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Hamilton,Jordan";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = true;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = thReasonArray[0];
  objST.sNote = 'travel with parents';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Johnson,Cujo";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Kautz,Jason";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Lindberg,Mary";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "McCain,Joseph";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Meyers,Brad";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Necerro,David";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Owens,Max";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Pickerton,Courtney";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Ruiz,Vanessa";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Sanchez,Juan";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Schmid,George";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Sebastian,Bianca";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Tripp,Justin";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Underwood,James";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Van Loon,Kaylee";
  objST = {};
  objST.stOrderNum = c;
  objST.stRec = 0;
  objST.stName = s;
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Waltham,Natalie";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "West,Peter";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = false;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = '';
  objST.sNote = '';
  clLtArray[1].dtArray[2].stArray.push(objST);

  c++;
  s = "Alvarez,Alfred";
  objST = {};
  objST.clRec = Number(curclindex);
  objST.clName = cln;
  objST.clDate = cld;
  objST.clStuNum = 0;
  objST.stOrderNum = c;
  objST.stuRec = c;
  objST.stuName = s;
  objST.sPresent = false;
  objST.sAbsent = false;
  objST.sTardy = true;
  objST.sAbExc = false;
  objST.sAbUnExc = false;
  objST.sReasonRec = 0;
  objST.sReason = thReasonArray[4];
  objST.sNote = 'came in late';
  clLtArray[1].dtArray[2].stArray.push(objST);
}

var GetIEversion = function () {
  var sAgent = window.navigator.userAgent;
  var aidx = sAgent.indexOf("MSIE");

  // Condition Check IF IE 11 and or MS Edge
  if (!!navigator.userAgent.match(/Trident\/7\./)
      || window.navigator.userAgent.indexOf("Edge") > -1 ) {
    return 11;
  }
  // If IE, return version number.
  else if (aidx > 0) {
    return parseInt(sAgent.substring(aidx+ 5, sAgent.indexOf(".", aidx)));
  }
  else {
    return 0; //It is not IE
  }
};

window.onload = function() {
  devbox = false;
  pn = window.location.href;
	if ((pn.search('://tungt/') > 0) ||
      (pn.search('://localhost/') > 0)) {
    devbox = true;  
  }
    
  var ieb = GetIEversion();
  if (ieb > 0) {
    ieBrowser = true;
    browserName = 'IE';
  }
  else if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) {
    browserName = 'Opera';
  }
  else if (navigator.userAgent.indexOf("Chrome") !== -1 ) {
    browserName = 'Chrome';
  }
  else if (navigator.userAgent.indexOf("Safari") !== -1) {
    safariDesk = true;
    ismobile = false;
    browserName = 'Safari';
  }
  else if (navigator.userAgent.indexOf("Firefox") !== -1 ) {
    browserName = 'Firefox';
  }

  if ((navigator.userAgent.match(/(mobile)/i)) ||
      (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/BlackBerry/i)) ||
      (navigator.userAgent.match(/Windows Phone/i))) {
    ismobile = true;
    safariDesk = false;
  }

  //alert(winH);
  //alert(navigator.userAgent+'\n\n'+browserName)

  DocResize();
}

function CallGoogleGA(ec, ea) {
  // for debugging
  //return true;

  //https://developers.google.com/analytics/devguides/collection/analyticsjs/events#overview
	//ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
  //ga('send', 'event', 'login page', 'DoLogOut', churchName, churchSite, {'nonInteraction': 1});

	if (ga === null) {
			ga('create', 'UA-70644644-1', 'auto');
      ga('send', {
        'hitType': 'event',
        'eventCategory': ec,
        'eventAction': ea,
        'eventLabel': churchName,
        'eventValue': churchSite,
        'nonInteraction': true,
        'hitCallback': function() {
          console.log('Event '+ea+' posted');
        }
      });
  }
}

function ShowTimeOut() {
	if (dataEdited === true) {
    saveFor = 'ShowTimeOut';
    saveMsg = 'NoMessage';
    DoSave();
  }
  else {
    if ((serviceOK === true) && (loginOK === 'Yes')) {
      if ((IsBlank(churchSite)) && (window.localStorage))
        churchSite = localStorage.getItem("churchsite");
      if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
        CallGoogleGA('main page', 'ShowTimeOut');
      }

      showSpin = false;
      if (document.getElementById("showspin") !== null)
        document.getElementById("showspin").style.display = "none";

      if (window.sessionStorage) {
        sessionStorage.setItem("savecurrpage", "");

        sessionStorage.setItem("curclindex", "");
        sessionStorage.setItem("curcldtindex", "");
        sessionStorage.setItem("curdtstindex", "");

        sessionStorage.setItem("curcid", "");
        sessionStorage.setItem("curdid", "");
        sessionStorage.setItem("cursid", "");

        sessionStorage.setItem("loginOK", "No");
        loginOK = 'No';
        serviceOK = false;
        ppdata = '';
      }

      $('#abtTimeup').modal('show');
    }
  }
}

function CalcMainContentHeight() {
  var heights = winH,
      hd = $(".contenthead-info").css('height'),
      h = hd.replace("px", ""),
      ft = $(".contentfooter-info1").css('height'),
      f = ft.replace("px", ""),
      outerHeights = 0;

  if (browserName === 'IE')
    outerHeights =(Number(h) + Number(f)) + 52
  else
    outerHeights = (Number(h) + Number(f)) + 50;
  document.getElementById('maincontent').setAttribute("style","height: "+(heights - outerHeights)+"px !important;");
};

function LogOut() {
	if ((IsBlank(churchSite)) && (window.localStorage))
		churchSite = localStorage.getItem("churchsite");
	if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
    CallGoogleGA('main page', 'DoLogOut');
	}

  if (window.localStorage) {
    localStorage.setItem("sessn", '');
    localStorage.setItem("sesun", '');
    localStorage.setItem("sespw", '');
    localStorage.setItem("sessx", '');
  }

  loginAni = 'fadeInRight';
  window.location = "login.html";
}

function DoLogIn() {
	var okay = true,
      str = '';
  if (IsBlank($('#inputSite').val())) {
     str = str + 'Please enter your church site number.';
     okay = false;
  }  
  if ((!IsBlank($('#inputSite').val())) && (okay === true) && (!IsNumeric($('#inputSite').val()))) { 
    str = 'Please enter numbers for the church site.';
    okay = false;
  }
  if ((!IsBlank($('#inputSite').val())) && (okay === true)) {
    var str1 = $('#inputSite').val();
		if (str1.length !== 6) {
			str = 'Please enter a valid site number.';
			okay = false;
		}
  }  
  if (IsBlank($('#inputEmail').val()) && (okay === true)) {
    str = 'Please enter your user name or your email address.';
    okay = false;
  }
  if ((!IsBlank($('#inputEmail').val())) && (okay === true) && (!IsValidEmail($('#inputEmail').val()))) {
    str = 'Please enter a valid email address.';
    okay = false;
  }
  if ((IsBlank($('#inputPassword').val())) && (okay === true)) {
    str = 'Please enter your password.';
    okay = false;
  }

	// for debugging
	//ismobile = true;

  if (okay === true)
  {
    sn = $('#inputSite').val();
    if (window.localStorage)
      localStorage.setItem("sessn", sn);

    un = $('#inputEmail').val();
    if (window.localStorage)
      localStorage.setItem("sesun", un);

    pw = $('#inputPassword').val();
    if (window.localStorage)
      localStorage.setItem("sespw", pw);

    if (window.localStorage) {
      if (document.getElementById("checkbox1").checked === true) {
        localStorage.setItem("sessx", "Yes");
        sx = "Yes";
      }
      else {
        localStorage.setItem("sessx", "No");
        sx = "No";
      }
    }

    GetCredential('DoLogIn');

    if ((IsBlank(sn)) || (sn === null)) {
      sn = $('#inputSite').val();
      if (window.localStorage)
        localStorage.setItem("sessn", sn);
    }

    if ((IsBlank(un)) || (un === null)) {
      un = $('#inputEmail').val();
      if (window.localStorage)
        localStorage.setItem("sesun", un);
    }

    if ((IsBlank(pw)) || (pw === null)) {
      pw = $('#inputPassword').val();
      if (window.localStorage)
        localStorage.setItem("sespw", pw);
    }

    if ((IsBlank(sx)) || (sx === null)) {
      if (window.localStorage) {
        if (document.getElementById("checkbox1").checked === true) {
          localStorage.setItem("sessx", "Yes");
          sx = "Yes";
        }
        else {
          localStorage.setItem("sessx", "No");
          sx = "No";
        }
      }
    }

    if ((!IsBlank(sn)) &&
        (!IsBlank(un)) &&
        (!IsBlank(pw)))
    {
      try {
        AjaxCall('DoLogIn');
      }
      catch (err) {
        //catchCode - Block of code to handle errors
      }
      finally {
        //finallyCode
      }
    }
  }
  else
  {
    var focsite = '',
		    focun = str.search('email'),
		    focpw = str.search('password');
    if (ismobile == true) {
			// for mobile it works nicer with popup, but causes losing the focus on the input field, need to research more.
			$('#warnmsg').html(str);
		  $('#abtWarn').modal('show');
      $('#abtWarn').on('hidden.bs.modal', function (e) {
				focsite = str.search('site');
				focun = str.search('email');
				focpw = str.search('password');
				if (Number(focsite) > 0)
					$('#inputSite').focus() //document.getElementById('inputSite').focus()
				else if (Number(focun) > 0)
					$('#inputEmail').focus() //document.getElementById('inputEmail').focus()
				else if (Number(focpw) > 0)
					$('#inputPassword').focus(); //document.getElementById('inputPassword').focus();
			});
		}
		else
		{
			var msg = '  <div class="row" style="border: 0px solid black;" id="msgvalidate" z-index: 1;>'+
								'    <div class="col-md-12">'+
								'      <div class="alert alert-danger">'+
								'        <button type="button" class="validclose" title="Close" data-dismiss="alert">x</button>'+
								'        '+str+
								'      </div>'+
								'    </div>'+
								'  </div>';
			$("#msgvalidate").html(msg);
      $("#msgvalidate").show();

      $("#msgvalidate").hide().fadeIn(function showAlert() {
          $("#msgvalidate").alert();
          $("#msgvalidate").fadeTo(6000, 500).slideUp(500, function(){
         $("#msgvalidate").alert('close');
          });
      });

      focsite = str.search('site');
			focun = str.search('email');
			focpw = str.search('password');
			if (Number(focsite) > 0)
				$('#inputSite').focus() //document.getElementById('inputPassword').focus()
			else if (Number(focun) > 0)
				$('#inputEmail').focus() //document.getElementById('inputEmail').focus()
			else if (Number(focpw) > 0)
				$('#inputPassword').focus(); //document.getElementById('inputPassword').focus();
		}
  }

	return okay;
}

function ClearHelp() {
	$("#churchlist").html('');
  $('#helpModal').find('#myModalLabel').html('<h4 class="modal-title" id="myModalLabel">Contact Church</h4>');
}

function ShowForgot() {
  document.getElementById('servicelbl').innerHTML = '<p style="text-align: center;">Please contact your church administrator to get this information.</p>';
  $('#abtAjax').modal('show');
  $('#abtAjax').on('hidden.bs.modal', function (e) {
    $('#inputSite').focus();    
  });
  //$('#helpModal').modal('show');
  //document.getElementById('inputSiteNameHelp').focus();
  //$('#helpModal').find('#myModalLabel').html('<h4 class="modal-title" id="myModalLabel">Cannot log in - Please contact your church</h4>');
}

function NameToLong(aNm) {
	var nm = aNm,
      len = nm.length,
      charnum = Number(winW) / Number(len);

  if (Number(charnum) < Number(len)) {
    if (winW <= 400) {
      ep = Math.round(charnum) * 2
      nm = nm.substr(0, ep) + '...';
    }
    else if ((winW > 768) && (winW < 992)) {
      ep = Math.round(charnum);
      nm = nm.substr(0, ep) + '...';
    }
  }

	return nm;
}

function SortArrayObjEle(e1, e2, cmp) {
  if (e1[cmp[0]] === e2[cmp[0]]) { // compare the values of the first attribute
    if (cmp.length > 1) { // if EQ proceed with the next attributes
        return SortArrayObjEle(e1, e2, cmp.slice(1));
    } else { // if no more attributes then return EQ
        return 0;
    }
  }
  else { // return less or great
    return (e1[cmp[0]] < e2[cmp[0]] ? -1 : 1);
  }
}

function AjaxCall (cmd) {
  isLocked = false;
  serviceOK = false;
  serviceResp = '';
  serviceMsg = '';

  var ajaxType = '',
      ajaxURL = '',
      ajaxData = '',
      ajaxHeader = '',
      backtologin = false;

  // spinning (hourglass)
  if (showSpin === false) {
    showSpin = true;
    var target = document.getElementById('myspin');

    var spinner = new Spinner({color:'lightgreen', lines: 11, showdow: true, top: '25%', width: 6, scale: 1.2, corners: 0.5, length: 8, radius: 11, speed: 0.8}).spin(target);

    target.appendChild(spinner.el);
    document.getElementById("showspin").style.display = "block";
  }

  // for debugging MichaelH server    
  if (devbox === true)
    ajaxURL = 'http://tungt';

  // for other servers
  //ajaxURL = '';

  if (cmd == 'CheckLock') {
    ajaxType = 'GET';
    ajaxData = '';
    ajaxURL = ajaxURL + '/PDSRESTFormation/v1/Form/Lock/'+appFormId;

    encStr = "SiteNumber="+sn+'\n\r'+
             "AjaxCaller=5";
    ajaxHeader = Base64.encode(encStr.trim());

    // for debugging
    //DisplayRespData(cmd);
    //return true;

    // for debugging
    //ajaxURL = ajaxURL+'?Debug=1';
  }
  else {
    // double check
    if ((cmd !== 'DoLogIn') && ((IsBlank(sn)) || (IsBlank(un)) || (IsBlank(pw)))) {
      GetCredential('');

      if (window.sessionStorage) {
        loginOK = sessionStorage.getItem("loginOK");
        if ((String(loginOK) === 'null') && (String(loginOK) !== 'Yes')) {
          loginOK = 'No';
        }
        else {
          loginOK = 'Yes';
        }
      }

      if ((loginOK === 'No') || (IsBlank(sn)) || (IsBlank(un)) || (IsBlank(pw))) {
        serviceMsg = 'Please log in.';

        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        document.getElementById('loginlbl').innerHTML = '<p style="text-align: center;">'+serviceMsg+'</p>';
        $('#abtLogin').modal('show');
        $('#abtLogin').on('hidden.bs.modal', function (e) {
          loginAni = 'fadeInRight';
          window.location = "login.html";
          return false;
        });
      }
    }

    encStr = "SiteNumber="+sn+'\n\r'+
             "UserName="+un+'\n\r'+
             "PWD="+pw+'\n\r'+
             "AjaxCaller=4"+'\n\r'+
             "TeacherId="+teaId.trim();

    ajaxHeader = Base64.encode(encStr.trim());

    if (cmd === 'SendNotification') {
      ajaxType = 'POST';
      ajaxData = '';

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/SendFormationAttendanceWatingNotification/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'DoSave') {
      ajaxType = 'POST';
      ajaxData = '';

      // Body data
      //Attendance=<%AttendanceId%>||<%MemberId%>||<%ClassId%>||<%Date%>||<%ReasonId%><%AttendanceTypeId%>||<%Notes%>||<%ClassDateId%>~~

      // for debugging
      //ppdata = attnId + '||' + memId + '||' + clId + '||' + dt + '||' + reId + '||' + reaTypeId + '||' + snt + '||' + dateId + '~~';
      //ppdata = '4311' + '||' + '36094' + '||' + '48023' + '||' + '11-11-2011' + '||' + '48379' + '||' + '4'+ '||' + 'updateonemoretime11' + '||' + '47931' + '~~' +
      //         + '0' + '||' + '36094' + '||' + '48023' + '||' + '11-11-2011' + '||' + '48732' + '||' + '1'+ '||' + 'insertnew11' + '||' + '47931' + '~~';

      ajaxData = 'Attendance=' + ppdata;

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/Attendance/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if ((cmd === 'DoLogIn') || (cmd === 'MainLogIn')) {
      ajaxType = 'GET';
      ajaxData = '';

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/Login';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'GetChurchInfo') {
      ajaxType = 'GET';
      ajaxData = '';

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/SiteInfo/';

      if ((IsBlank(appFormId)) && (window.sessionStorage)) {
        appFormId = sessionStorage.getItem("appFormId");
      }
      
      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if ((String(cmd) === 'Add1NewReason') && (!IsBlank(newReason))) {
      ajaxType = 'POST';
      ajaxData = 'ReasonType='+newReason;

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/NewReasonType/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'GetReasonType') {
      ajaxType = 'GET';
      ajaxData = '';

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/ReasonTypes/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'GetClassList') {
      ajaxType = 'GET';
      ajaxData = '';

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/TeacherRoster/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'GetClassDate') {
      ajaxType = 'GET';
      ajaxData = '';

      if (window.sessionStorage) {
        curcid = sessionStorage.getItem("curcid");
      }

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/ClassDate/'+curcid+'/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
    else if (cmd === 'GetStudentList') {
      ajaxType = 'GET';
      ajaxData = '';

      if (window.sessionStorage) {
        curcid = sessionStorage.getItem("curcid");
        curclindex = sessionStorage.getItem("curclindex");
        curdid = sessionStorage.getItem("curdid");
        curcldtindex = sessionStorage.getItem("curcldtindex");
      }

      // use curdid instead of date
      /* var fdt = '',
          find = "/",
          reg = new RegExp(find, 'g'),
          tdt = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date;
      fdt = tdt.replace(reg, "-"); */

      // for other servers
      ajaxURL = ajaxURL + '/PDSRESTFormation/v1/PDSAttendance/Roster/'+curcid+'/'+curdid+'/';

      // for debugging
      //ajaxURL = ajaxURL+'?Debug=1';
    }
  }

  // for debugging
  /* serviceOK = true;
  loginOK = 'Yes';
  DisplayRespData(cmd);
  return true; */

  ajaxURL.replace(/\n|\r/g, "");
  ajaxURL.trim();

  $.support.cors = true;
  $.ajax({
    beforeSend: function(xhrObj)
    {
      xhrObj.setRequestHeader("SiteInfo", ajaxHeader);

      var todayD = new Date(),
          dd = todayD.getDate(),
          mm = todayD.getMonth()+1, //January is 0!
          yyyy = todayD.getFullYear(),
          hh = todayD.getHours(),
          min = todayD.getMinutes(),
          ss = todayD.getSeconds();

      xhrObj.setRequestHeader("LocalDate", mm+'/'+dd+'/'+yyyy+' '+hh+':'+min+':'+ss);
      xhrObj.setRequestHeader("Cache-Control", 'no-cache, no-store, must-revalidate');
      xhrObj.setRequestHeader("Pragma", 'no-cache');
      xhrObj.setRequestHeader("Expires", 0);

      if (((cmd === 'SendNotification') || (cmd === 'GetChurchInfo')) && (!IsBlank(appFormId))) {
        var aid = Base64.encode(appFormId.trim());
        xhrObj.setRequestHeader("ConfigFormId", aid);
      }
    },
    type: ajaxType,
    //async: false, //jquery-3.1.1.min.js:4 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.
    //cache: false, //DON'T SET THIS... THE SERVER WILL TAKE CARE OF THIS      for Chrome and IE8 --> http://develissimo.com/blog/2013/ajax-not-working-chrome-ie8/
    url: ajaxURL,
    crossDomain: true,
    contentType: "text/plain",
    dataType: "text",
    data: ajaxData,
    success: function (resp, status, xhr) {
      // for debugging
      //alert(resp + " - STATUS: " + xhr.status + " " + xhr.statusText);
      //alert(xhr.getAllResponseHeaders());

      var tmp = resp;
      if (cmd === 'CheckLock') {
        if (tmp === 'True') {
          isLocked = true;
          tmp = 'Form is Locked';
          testLock = false;
          if (dataEdited === true)
            serviceMsg = 'Your church needs to update the data and has temporarily locked the site. '+
                         'This process may take some time.<br><br>'+
                         'If you\'d like to save your changes later, keep your browser open and active.<br>'+
                         'The app will automatically log out after 10 minutes of inactivity.<br><br>'+
                         'If your browser is closed or becomes inactive, your changes will be lost.'
          else 
            serviceMsg = 'Your church is updating the data.<br><br>Please try again later.';
        }
      }

      if (tmp !== 'Form is Locked') {
        if ((!IsBlank(tmp)) || (xhr.status === 200) || (xhr.status === 201)) {
          // for debugging
          //alert(resp);

          serviceResp = resp;
          serviceOK = true;
          serviceMsg = '';

          //DisplayRespData(cmd);
        }
        else {
          serviceMsg = 'No data found.';
        }
      }

      if ((serviceOK === false) && (!IsBlank(serviceMsg))) {
        if (cmd === 'DoLogIn') {
          if (window.localStorage) {
            localStorage.setItem("sessn", '');
            localStorage.setItem("sesun", '');
            localStorage.setItem("sespw", '');
            localStorage.setItem("sessx", '');
          }
        }

        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        document.getElementById('servicelbl').innerHTML = '<p style="text-align: center;">'+serviceMsg+'</p>';
        $('#abtAjax').modal('show');
        $('#abtAjax').on('hidden.bs.modal', function (e) {
          if (cmd === 'DoLogIn') {
            loginAni = 'fadeInRight';
            window.location = "login.html";
            $('#inputSite').focus();
          }
        });
      }
    },
    error: function (request, exception, error) {
      if (request.status === 0)
      {
        serviceMsg = 'Please contact your church.<br><br>Not connect. Verify Network.';
      }
      else if (request.status === 400)
      {
        serviceMsg = 'Please contact your church.<br><br>Bad request.';
      }
      else if (request.status === 401)
      {
        serviceMsg = 'The site number, user name or password is invalid.<br><br>'+
                     'Please try again, or contact your church.';
        if (cmd !== 'DoLogIn')
          backtologin = true;
      }
      else if (request.status === 404)
      {
        serviceMsg = 'Please contact your church.<br><br>Requested page not found.';
      }
      else if (request.status === 500)
      {
        serviceMsg = 'Please contact your church.<br><br>Server error.';
      }
      else if (exception === 'timeout')
      {
        ShowTimeOut();
      }
      else
      {
        serviceMsg = 'Please contact your church.<br><br>Unhandled Error.<br>' + request.responseText;
      }

      if ((serviceOK === false) && (!IsBlank(serviceMsg))) {
        console.log('Error on AjaxCall: '+serviceMsg+' ['+request.status+']');
        if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
          CallGoogleGA('error', 'AjaxCall: '+serviceMsg+' ['+request.status+']');
        }

        if (cmd === 'DoLogIn') {
          if (window.localStorage) {
            localStorage.setItem("sessn", '');
            localStorage.setItem("sesun", '');
            localStorage.setItem("sespw", '');
            localStorage.setItem("sessx", '');
          }
        }

        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        document.getElementById('servicelbl').innerHTML = '<p style="text-align: center;">'+serviceMsg+'</p>';
        $('#abtAjax').modal('show');
        $('#abtAjax').on('hidden.bs.modal', function (e) {
          if (backtologin === true) {
            loginAni = 'fadeInRight';
            window.location = "login.html";
            $('#inputSite').focus();
          }
        });
      }
    }
  })
  .done (function (data, status, xhr) {
    var tmp = serviceResp;
    if (cmd === 'CheckLock') {
      if (tmp === 'True') {
        isLocked = true;
        tmp = 'Form is Locked';
        testLock = false;
        if (dataEdited === true)
          serviceMsg = 'Your church needs to update the data and has temporarily locked the site. '+
                       'This process may take some time.<br><br>'+
                       'If you\'d like to save your changes later, keep your browser open and active. '+
                       'The app will automatically log out after 10 minutes of inactivity.<br><br>'+
                       'If your browser is closed or becomes inactive, your changes will be lost.'
        else
          serviceMsg = 'Your church is updating the data.<br><br>Please try again later.';
      }
    }

    if (tmp !== 'Form is Locked') {
      if ((!IsBlank(tmp)) || (xhr.status === 200) || (xhr.status === 201)) {
        DisplayRespData(cmd);
      }
    }

    if (isLocked === true) {
      //DoCancel('NoMessage');
      testLock = true;
    }
    else if (((cmd === 'DoSave') || (cmd === 'CheckLock')) && (saveFor === 'DocResize')){
      ppdata = '';
      if (dataEdited === true)
        dataEdited = false;
    }
    else if ((cmd === 'MainLogIn') || (cmd === 'DoLogIn')) {
      var r = 0,
          each = 0,
          eachLine = data.split('\n');
      for (var i = 0, L = eachLine.length; i < L; i++) {
        r++;
        each = eachLine[i];
        var keyValuePair = each.split(': ');
        if ((r === 1) && (IsBlank(catechistName)))
          catechistName = keyValuePair[1];
        if ((r === 2) && (IsBlank(serverGUI))) {
          serverGUI = keyValuePair[1];
          if (!IsBlank(serverGUI))
            SaveLogin();
        }
        if ((r === 3) && (IsBlank(teaId)))
          teaId = keyValuePair[1];
        if ((r === 4) && (IsBlank(appFormId)))
          appFormId = keyValuePair[1];
      } //for
      
      if (window.sessionStorage) {
        sessionStorage.setItem("appFormId", appFormId);
      }

      if ((!IsBlank(catechistName)) && (document.getElementById("catechistrow") !== null) && (document.getElementById("catechistrow") !== undefined)) {
        document.getElementById("catechistrow").innerHTML = 'Hello, '+catechistName;
      }
    }
  });
}

function ShowClassList(sld) {
  if (document.getElementById("msgvalidate") !== null)
	  $("#msgvalidate").html('');

  try {
    BuildNav('');

    if (loginOK === 'Yes') {
      if (window.sessionStorage) {
        currpage='ClassList';
        sessionStorage.setItem("savecurrpage", "ClassList");
      }

      var hDiv = document.getElementById("headcontent");

      var n = '';
      if (clsNum > 0)
        n = ' - Total: '+clsNum;
      var divHeadRow1 = document.createElement("div");
      divHeadRow1.setAttribute("class", "row");
      divHeadRow1.setAttribute("id", "catrow1");
      hDiv.appendChild(divHeadRow1);
      document.getElementById("catrow1").style.display = "block";
      document.getElementById("catrow1").innerHTML =
      '<div class="col-md-12">'+
      ' 	<div class="row" id="headerdiv">'+
      '			<div class="col-md-12 headdiv" id="headrow"><p>Class List '+yearPeriod+n+'</p></div>'+
      '		</div>'+
      '</div>';

      var sty = '',
          tmp = '';
      document.getElementById("maincontent").innerHTML = '';

      $('body, html, #maincontent').scrollTop(0);
      if ((clsNum > 0) && (clLtArray.length > 0)) {
        for (var i=1; i<=clsNum; i++) {
          if (document.getElementById("maindiv"+i) !== null)
            document.getElementById("maindiv"+i).remove();
          if (document.getElementById("maindivEX"+i) !== null)
            document.getElementById("maindivEX"+i).remove();
        } //for
        if (document.getElementById("maindivEX"+Number(stuNum)+9999999) !== null)
          document.getElementById("maindivEX"+Number(stuNum)+9999999).remove();

        for (var i=1; i<=clsNum; i++) {
          if ((winW > 992) && (browserName === 'Safari') && (safariDesk === true) && (ismobile === false)) {
            if ((i % 2) === 0)
              sty = '		  <div class="col-md-12 rowdiv5" style="background-color: #BDBDBD;" id="maindivchild'+i+'">'
            else
              sty = '		  <div class="col-md-12 rowdiv5" style="background-color: #E6E6E6;" id="maindivchild'+i+'">';
          }
          else {
            if ((i % 2) === 0)
              sty = '		  <div class="col-md-12 rowdiv4" style="background-color: #BDBDBD;">'
            else
              sty = '		  <div class="col-md-12 rowdiv4" style="background-color: #E6E6E6">';
          }

          tmp = '				  <a onclick="GetClassDate(\''+clLtArray[i-1].clId+'\', \''+i+'\', \'\')"><span class="glyphicon glyphicon-chevron-right" style="float: right; cursor: pointer;" title="Go to '+clLtArray[i-1].clName+' dates list"></span></a>';

          var mDiv = document.getElementById("maincontent");
          var divMainRow = document.createElement("div");
          divMainRow.setAttribute("class", "row");
          divMainRow.setAttribute("id", "maindiv"+i);
          divMainRow.setAttribute('onclick', 'GetClassDate("'+clLtArray[i-1].clId+'", "'+i+'", \'\')');
          mDiv.appendChild(divMainRow);
          document.getElementById("maindiv"+i).style.display = "block";
          document.getElementById("maindiv"+i).innerHTML =
          '  <div class="col-md-12">'+
          '	   <div class="row" style="border: 1px solid silver; background-color: white;" id="gridclass'+i+'">'+
          '      '+sty+
          '			   <p>'+

          '				   '+clLtArray[i-1].clName+

          '          '+tmp+
          '			   </p>'+
          '		   </div>'+
          '		 </div>'+
          '  </div>';

          if ((winW > 992) && (browserName === 'Safari') && (safariDesk === true) && (ismobile === false)) {
            if ((i % 2) === 0)
              document.getElementById('maindivchild'+i).setAttribute('style','width:'+($('#gridclass'+i).width()-10)+'px; background-color: #BDBDBD;')
            else
              document.getElementById('maindivchild'+i).setAttribute('style','width:'+($('#gridclass'+i).width()-10)+'px; background-color: #E6E6E6;');
          }

          // a break in between
          var mDivEX = document.getElementById("maincontent");
          var divMainRowEX = document.createElement("div");
          divMainRowEX.setAttribute("class", "row");
          divMainRowEX.setAttribute("id", "maindivEX"+i);
          mDivEX.appendChild(divMainRowEX);
          document.getElementById("maindivEX"+i).style.display = "block";
          document.getElementById("maindivEX"+i).innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row" style="height: 5px!important; background-color: #E6FFCC!important;" >'+
          '	 </div>'+
          '</div>';
        } //for

        // a break at the bottom list
        // var rhi = 20, dexid = Number(stuNum)+9999999;
        // var mDivEX = document.getElementById("maincontent");
        // var divMainRowEX = document.createElement("div");
        // divMainRowEX.setAttribute("class", "row");
        // divMainRowEX.setAttribute("id", "maindivEX"+dexid);
        // mDivEX.appendChild(divMainRowEX);
        // document.getElementById("maindivEX"+dexid).style.display = "block";
        // document.getElementById("maindivEX"+dexid).innerHTML =
        // '<div class="col-md-12">'+
        // '  <div class="row" style="height: '+rhi+'px; background-color: #E6FFCC;" >'+
        // '	 </div>'+
        // '</div>';

        if (visitCL === true) {
          if (!IsBlank(curclindex))
            GoToClass(curclindex)
          else
            GoToClass("1");
        }
        else { // if visitCL === false then set to true.
          visitCL = true;

          $('body, html, #maincontent').scrollTop(0);

          if (window.sessionStorage) {
            // first time blank out
            sessionStorage.setItem("curclindex", "");
            sessionStorage.setItem("curcldtindex", "");
            sessionStorage.setItem("curdtstindex", "");

            sessionStorage.setItem("curcid", "");
            sessionStorage.setItem("curdid", "");
            sessionStorage.setItem("cursid", "");
          }
        }
      }
      else {
        sty = '		  <div class="col-md-12 rowdiv" style="background-color: white;">';

        var mDiv = document.getElementById("maincontent");
        var divMainRow = document.createElement("div");
        divMainRow.setAttribute("class", "row");
        divMainRow.setAttribute("id", "maindiv"+i);
        mDiv.appendChild(divMainRow);
        document.getElementById("maindiv"+i).style.display = "block";
        document.getElementById("maindiv"+i).innerHTML =
        '<div class="col-md-12">'+
        '  <div class="row" style="border: 0px solid #2E2E2E; background-color: white; text-align: center;" id="maindiv">'+
        '    <div class="col-md-12">'+
        '	     <div class="row rowdiv1">'+
        '      '+sty+
        '			   <p>'+
        '				   Class list is empty.'+
        '			   </p>'+
        '		   </div>'+
        '	   </div>'+
        '	 </div>'+
        '</div>';
      }

      if (sld === 'SlideLeft')
        document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInLeft")
      else
        document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInRight");

      CalcMainContentHeight();
    }
  }
  catch (err) {
    //catchCode - Block of code to handle errors
  }
  finally {
    showSpin = false;
    if (document.getElementById("showspin") !== null)
      document.getElementById("showspin").style.display = "none";
  }
} //ShowClassList(sld)

function GetClassDate(cid, clIndex, frm) {
  slideStr = frm;
  if (window.sessionStorage) {
    currpage = sessionStorage.getItem("savecurrpage");

    if (Number(curclindex) !== Number(clIndex)) {
      sessionStorage.setItem("curcldtindex", "");
      sessionStorage.setItem("curdtstindex", "");

      sessionStorage.setItem("curdid", "");
      sessionStorage.setItem("cursid", "");
    }

	  sessionStorage.setItem("curclindex", clIndex);
    sessionStorage.setItem("curcid", cid);

    curcldtindex = sessionStorage.getItem("curcldtindex");
    curdid = sessionStorage.getItem("curdid");
  }

  dl = false;
  if ((clLtArray[Number(clIndex)-1] !== null) &&
      (clLtArray[Number(clIndex)-1] !== undefined) &&
      (clLtArray[Number(clIndex)-1].dtArray.length > 0)) {
    if (window.sessionStorage) {
      curcldtindex = sessionStorage.getItem("curcldtindex");
    }

    if (frm === 'FromStudent') {
      if (window.sessionStorage) {
        sessionStorage.setItem("savecurrpage", "ClassDate");
        currpage = 'ClassDate';
      }
    }

    if ((clLtArray[Number(clIndex)-1] !== null) && (clLtArray[Number(clIndex)-1] !== undefined)) {
      dl = clLtArray[Number(clIndex)-1].clDtDloaded;
    }
  }

  if ((dl === false) || (IsBlank(curcldtindex))) {
    try {
      AjaxCall('GetClassDate');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
  else if ((frm === 'FromStudent') && (currpage === 'ClassDate')) {
    ShowClassDate('SlideRight');
  }
  else if (currpage === 'ClassList'){
    ShowClassDate('SlideLeft');
  }
  else {
    try {
      AjaxCall('GetReasonType');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
}

function ShowClassDate(sld) {
  if (dataEdited === true) {
    saveFor = 'ShowClassDate';
    saveMsg = sld;
    DoSave();
  }
  else if ((slideStr === 'FromStudent') && (sld === 'SlideRight')) {
    try {
      AjaxCall('GetClassDate');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
  else {
    try {
      if (window.sessionStorage) {
        sessionStorage.setItem("savecurrpage", "ClassDate");
        currpage = 'ClassDate';

        curclindex = sessionStorage.getItem("curclindex");
        curcldtindex = sessionStorage.getItem("curcldtindex");
      }

      if (document.getElementById("msgvalidate") !== null)
        $("#msgvalidate").html('');
      if (($('#mydatepicker') !== null) && ($('#mydatepicker') !== undefined))
        $('#mydatepicker').datepicker('hide');

      BuildNav('');

      if (loginOK === 'Yes') {
        if (window.sessionStorage) {
          sessionStorage.setItem("savecurrpage", "ClassDate");
        }

        if (document.getElementById("catrow1") !== null)
          document.getElementById("catrow1").innerHTML = '';
        var hDiv = document.getElementById("headcontent");
        var divHeadRow = document.createElement("div");
        divHeadRow.setAttribute("class", "row");
        divHeadRow.setAttribute("id", "catrow1");
        hDiv.appendChild(divHeadRow);
        document.getElementById("catrow1").style.display = "block";

        var n = '',
            tmp = '';
        if (dteNum > 0)
          n = ' - Total: '+dteNum;
        if (winH < 425) {
          document.getElementById("catrow1").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row">'+
          '    <div class="col-md-12 headdiv" id="headrow1">'+
          '	 	   <p>'+
          '			   <a onclick="ShowClassList(\'SlideRight\')" title="Back to class list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'+
          '			   &nbsp;&nbsp;'+
          '		     '+clLtArray[Number(curclindex)-1].clName+' Date List'+n+
          '			 </p>'+
          '		 </div>'+
          '  </div>'+
          '</div>';
        }
        else if (winW <= 290) {
          document.getElementById("catrow1").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row">'+
          '    <div class="col-md-12 headdiv" id="headrow1">'+
          '	 	   <p>'+
          '			   <a onclick="ShowClassList(\'SlideRight\')" title="Back to class list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'+
          '			   &nbsp;&nbsp;'+

          '				 <input type="text" id="mydatepicker" name="mydatepicker" placeholder="mm/dd/yyyy" style="width: 160px!important; height: 20px; color: #2E2E2E;" onchange="GoToDate(this.value, \'\')" readonly>'+
          '				 <i id="fa-cal" title="Click to select a date"><span id="fa-cal" class="icon icon-calendar icon-1x" style="font-size: 18px;"></span></i>'+
          '			 </p>'+
          '		 </div>'+
          '  </div>'+

          '  <div class="row" style="border-bottom: 1px solid silver;">'+
          '	 	   <p style="padding: 0px 0px 0px 10px; font-size: 12px">'+
          '		     '+clLtArray[Number(curclindex)-1].clName+' Date List'+n+
          '			 </p>'+
          '  </div>'+

          '</div>';
        }
        else if (winW < 480) {
          document.getElementById("catrow1").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row">'+
          '    <div class="col-md-12 headdiv" id="headrow1">'+
          '	 	   <p>'+
          '			   <a onclick="ShowClassList(\'SlideRight\')" title="Back to class list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'+
          '			   &nbsp;&nbsp;'+

          '				 <input type="text" id="mydatepicker" name="mydatepicker" placeholder="mm/dd/yyyy" style="width: 200px!important; height: 20px; color: #2E2E2E;" onchange="GoToDate(this.value, \'\')" readonly>'+
          '				 <i id="fa-cal" title="Click to select a date"><span id="fa-cal" class="icon icon-calendar icon-1x" style="font-size: 18px;"></span></i>'+
          '			 </p>'+
          '		 </div>'+
          '  </div>'+

          '  <div class="row" style="border-bottom: 1px solid silver;" id="titlerowmobile">'+
          '	 	   <p style="padding: 0px 0px 0px 10px; font-size: 12px">'+
          '		     '+clLtArray[Number(curclindex)-1].clName+' Date List'+n+
          '			 </p>'+
          '  </div>'+

          '</div>';
        }
        else if (winW < 992) {
          document.getElementById("catrow1").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row">'+
          '    <div class="col-md-12 headdiv" id="headrow1">'+
          '	 	   <p>'+
          '			   <a onclick="ShowClassList(\'SlideRight\')" title="Back to class list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'+
          '			   &nbsp;&nbsp;'+

          '		     '+clLtArray[Number(curclindex)-1].clName+' Date List'+n+'&nbsp;&nbsp;&nbsp;&nbsp;'+

          '				 <input type="text" id="mydatepicker" name="mydatepicker" placeholder="mm/dd/yyyy" style="width: 200px; height: 20px; color: #2E2E2E;" onchange="GoToDate(this.value, \'\')" readonly>'+
          '				 <i id="fa-cal" title="Click to select a date"><span class="icon icon-calendar icon-1x"  style="font-size: 18px;"></span></i>'+

          '			 </p>'+
          '		 </div>'+
          '  </div>'+
          '</div>';
        }
        else {
          tmp = '';
          if (winH < 750)
            tmp = '				 <input type="text" id="mydatepicker" name="mydatepicker" placeholder="mm/dd/yyyy" style="width: 200px; height: 20px; color: #2E2E2E;" onchange="GoToDate(this.value, \'From Calendar\')" readonly>'
          else
            tmp = '				 <input type="text" id="mydatepicker" name="mydatepicker" placeholder="mm/dd/yyyy" style="width: 200px; height: 20px; color: #2E2E2E;" onchange="GoToDate(this.value, \'From Calendar\')">';
          document.getElementById("catrow1").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row">'+
          '    <div class="col-md-3 headdiv" id="headrow1">'+
          '	 	   <p>'+
          '			   <a onclick="ShowClassList(\'SlideRight\')" title="Back to class list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'+
          '			   &nbsp;<a onclick="ShowClassList(\'SlideRight\')" style="color: white; cursor: pointer;" title="Back to class list">Back</a>'+
          '			 </p>'+
          '		 </div>'+
          '		 <div class="col-md-5 headdiv" id="headrow2">'+
          '		   <p>'+clLtArray[Number(curclindex)-1].clName+' Date List'+n+'</p>'+
          '		 </div>'+
          '		 <div class="col-md-4 headdiv" id="headrow3">'+
          '		   <p>'+
          '				 Select a Date:&nbsp;'+

          '        '+tmp+
          '				 <i id="fa-cal" title="Click to select a date"><span class="icon icon-calendar icon-1x"  style="font-size: 18px;"></span></i>'+

          '			 </p>'+
          '		 </div>'+
          '  </div>'+
          '</div>';
        }

        //http://eonasdan.github.io/bootstrap-datetimepicker/version3/
        //http://codepen.io/mohitbhansali/pen/NPxzYq/
        calDateArray = [];
        calDateArray.length = 0;
        calDateArray = JSON.parse(JSON.stringify(clLtArray[Number(curclindex)-1].dtArray));
        $('#mydatepicker').datepicker({
          format: 'mm/dd/yyyy',
          autoclose: true,
          todayBtn: "linked",
          todayHighlight: true,
          clearBtn: true,
          disableTouchKeyboard: true,
        }).on('changeDate', function mydate(e) {
          $(this).datepicker('hide');
          GoToDate(this.value, 'From Calendar');
        });

        $('#fa-cal').on('click', function() {
          $('#mydatepicker').trigger('focus');
        });

        var sty = '',
            sty8 = '',
            stybg = '';
        document.getElementById("maincontent").innerHTML =  '';
        $('body, html, #maincontent').scrollTop(0); //$('#maincontent').animate({scrollTop: 0}, 'fast');
        if ((dteNum > 0) && (clLtArray[Number(curclindex)-1].dtArray.length > 0)) {
          for (var i=1; i<=dteNum; i++) {
            if (document.getElementById("maindiv"+i) !== null)
              document.getElementById("maindiv"+i).remove();
            if (document.getElementById("maindivEX"+i) !== null)
              document.getElementById("maindivEX"+i).remove();
          } //for
          if (document.getElementById("maindivEX"+Number(stuNum)+9999999) !== null)
            document.getElementById("maindivEX"+Number(stuNum)+9999999).remove();

          var clDt = '',
              clNt = '',
              clDn = '',
              clStat = '',
              psty = '',
              glysty = '';

          if (winW > 992) {
            var mDiv = document.getElementById("maincontent");
            var divMainRow = document.createElement("div");
            divMainRow.setAttribute("class", "row");
            divMainRow.setAttribute("id", "titlerow");
            mDiv.appendChild(divMainRow);
            document.getElementById("titlerow").style.display = "block";
            document.getElementById("titlerow").innerHTML =
            '<div class="col-md-12">'+
            '  <div class="row" style="border: 1px solid silver; background-color: white;">'+
            '    <div class="col-md-12">'+
            '		   <div class="row rowdiv1">'+
            '			   <div class="col-md-3 titlediv" style="background-color: lightblue;"><p>Class Date</p></div>'+
            '				 <div class="col-md-6 titlediv" style="background-color: lightblue;"><p>Note</p></div>'+
            '			   <div class="col-md-3 titlediv" style="background-color: lightblue;"><p>Last Changed</p></div>'+
            '			 </div>'+
            '    </div>'+
            '	 </div>'+
            '</div>';

            for (var i=1; i<=dteNum; i++)
            {
              // parser values from server after ajax call
              clDt = clLtArray[Number(curclindex)-1].dtArray[i-1].date;
              clNt = clLtArray[Number(curclindex)-1].dtArray[i-1].note;
              clStat = clLtArray[Number(curclindex)-1].dtArray[i-1].stat;              

              clDn = i;

              var d1 = 0,
                  d2 = 0,
                  d3 = 0;

              d1 = Number(i)+Number(1);
              d2 = Number(i)+Number(9999);
              d3 = Number(i)+Number(99999);

              if ((i % 2) === 0) {
                sty =  '		  <div id="dv'+d1.toString()+'" class="col-md-3 rowdiv" style="background-color: #BDBDBD;">';
                sty6 = '		  <div id="dv'+d2.toString()+'" class="col-md-6 rowdiv" style="background-color: #BDBDBD;">';
                sty3 = '		  <div id="dv'+d3.toString()+'" class="col-md-3 rowdiv" style="background-color: #BDBDBD;">';

                if (winW < 992)
                  stybg = '  <div class="row" style="border: 1px solid gray; background-color: #BDBDBD;" >'
                else
                  stybg = '  <div class="row" style="border: 1px solid gray; background-color: white;" >';
              }
              else {
                sty =  '		  <div id="dv'+d1.toString()+'" class="col-md-3 rowdiv" style="background-color: #E6E6E6;">';
                sty6 = '		  <div id="dv'+d2.toString()+'" class="col-md-6 rowdiv" style="background-color: #E6E6E6;">';
                sty3 = '		  <div id="dv'+d3.toString()+'" class="col-md-3 rowdiv" style="background-color: #E6E6E6;">';

                if (winW < 992)
                  stybg = '  <div class="row" style="border: 1px solid gray; background-color: #E6E6E6;" >'
                else
                  stybg = '  <div class="row" style="border: 1px solid gray; background-color: white;" >';
              }

              var mDiv = document.getElementById("maincontent");
              var divMainRow = document.createElement("div");
              divMainRow.setAttribute("class", "row");
              divMainRow.setAttribute("id", "maindiv"+i);
              divMainRow.setAttribute("onclick", "GetStudentList("+clLtArray[Number(curclindex)-1].dtArray[i-1].dateId+", "+i+")");
              mDiv.appendChild(divMainRow);
              document.getElementById("maindiv"+i).style.display = "block";
              document.getElementById("maindiv"+i).innerHTML =
              '<div class="col-md-12">'+
              '  <div class="row" style="border: 1px solid silver; background-color: white;" id="griddate'+i+'">'+ //stybg+
              '    <div class="col-md-12">'+
              '	     <div class="row rowdiv1">'+
              '        '+sty+
              '			     <p>'+clDt+'</p>'+
              '			   </div>'+ // close of sty div
              '        '+sty6+
              '			     <p style="font-weight: normal;">'+
              '				     '+clNt+
              '				   </p>'+
              '			   </div>'+ // close of sty6 div
              '        '+sty3+
              '			     <p style="font-weight: normal;">'+clStat+
              '					   <a><span class="glyphicon glyphicon-chevron-right" style="float: right; cursor: pointer;" title="Go to date '+clDt+' student list"></span></a>'+
              '          </p>'+
              '			   </div>'+ // close of sty3 div
              '	    </div>'+
              '	  </div>'+
              '	</div>'+
              '</div>';

              if ((IsBlank(clNt) && IsBlank(clStat)) || (!IsBlank(clStat))) {
                var dh = $('#dv'+d1.toString()).height();
                $('#dv'+d2.toString()).height(dh);
                $('#dv'+d3.toString()).height(dh);
              }
              else {
                var dh = $('#dv'+d2.toString()).height();
                $('#dv'+d1.toString()).height(dh);
                $('#dv'+d3.toString()).height(dh);
              }

              // a break in between
              var mDivEX = document.getElementById("maincontent");
              var divMainRowEX = document.createElement("div");
              divMainRowEX.setAttribute("class", "row");
              divMainRowEX.setAttribute("id", "maindivEX"+i);
              mDivEX.appendChild(divMainRowEX);
              document.getElementById("maindivEX"+i).style.display = "block";
              document.getElementById("maindivEX"+i).innerHTML =
              '<div class="col-md-12">'+
              '  <div class="row" style="height: 5px!important; background-color: #E6FFCC!important;" >'+
              '	 </div>'+
              '</div>';
            } //for
          }
          else {
            for (var i=1; i<=dteNum; i++)
            {
              // parser values from server after ajax call
              clDt = clLtArray[Number(curclindex)-1].dtArray[i-1].date;
              clNt = clLtArray[Number(curclindex)-1].dtArray[i-1].note;
              clStat = clLtArray[Number(curclindex)-1].dtArray[i-1].stat;
              
              clDn = i;

              if ((i % 2) === 0) {
                sty =  '<div id="dv'+i+'" class="rowdiv3" style="background-color: #BDBDBD;">';
              }
              else {
                sty =  '<div id="dv'+i+'" class="rowdiv3" style="background-color: #E6E6E6;">';
              }

              if (IsBlank(clNt) && IsBlank(clStat)) {
                glysty = 'padding-top: 5px!important;';
              }

              var mDiv = document.getElementById("maincontent");
              var divMainRow = document.createElement("div");
              divMainRow.setAttribute("class", "row");
              divMainRow.setAttribute("id", "maindiv"+i);
              divMainRow.setAttribute("onclick", "GetStudentList("+clLtArray[Number(curclindex)-1].dtArray[i-1].dateId+", "+i+")");
              mDiv.appendChild(divMainRow);
              document.getElementById("maindiv"+i).style.display = "block";
              document.getElementById("maindiv"+i).innerHTML =
              '<div class="col-md-12">'+
              '  <div class="row" style="border: 1px solid silver; background-color: white;" id="griddate'+i+'">'+ //stybg+
              '    <div class="col-md-12">'+
              '      '+sty+
              '		     <p style="'+glysty+'">'+clDt+
              '			     <a><span id="gly'+i+'" class="glyphicon glyphicon-chevron-right" style="float: right; cursor: pointer;" title="Go to date '+clDt+' student list"></span></a>'+
              '        </p>'+
              '		     <p style="font-weight: normal; padding-right: 30px;">'+
              '		       '+clNt+
              '		     </p>'+
              '		     <p style="font-weight: normal;">'+
              '		       '+clStat+
              '		     </p>'+
              '	     </div>'+
              '	   </div>'+
              '	 </div>'+
              '</div>';

              var dh = $('#dv'+i).height();
              $('#gly'+i).css("padding-top", (dh/3.5)+"px");

              // a break in between
              var mDivEX = document.getElementById("maincontent");
              var divMainRowEX = document.createElement("div");
              divMainRowEX.setAttribute("class", "row");
              divMainRowEX.setAttribute("id", "maindivEX"+i);
              mDivEX.appendChild(divMainRowEX);
              document.getElementById("maindivEX"+i).style.display = "block";
              document.getElementById("maindivEX"+i).innerHTML =
              '<div class="col-md-12">'+
              '  <div class="row" style="height: 5px!important; background-color: #E6FFCC!important;" >'+
              '	 </div>'+
              '</div>';
            } //for
          }

          // a break at the bottom list
          // var rhi =20, dexid = Number(stuNum)+9999999;
          // var mDivEX = document.getElementById("maincontent");
          // var divMainRowEX = document.createElement("div");
          // divMainRowEX.setAttribute("class", "row");
          // divMainRowEX.setAttribute("id", "maindivEX"+dexid);
          // mDivEX.appendChild(divMainRowEX);
          // document.getElementById("maindivEX"+dexid).style.display = "block";
          // document.getElementById("maindivEX"+dexid).innerHTML =
          // '<div class="col-md-12">'+
          // '  <div class="row" style="height: '+rhi+'px; background-color: #E6FFCC;" >'+
          // '	 </div>'+
          // '</div>';

          if (visitCD === true) {
            if (!IsBlank(curcldtindex))
              GoToDate(curcldtindex, '')
            else
              GoToDate("1", '');
          }
          else { //if visitCD === false, then set to true.
            visitCD = true;

            $('body, html, #maincontent').scrollTop(0);

            if (window.sessionStorage) {
              // first time, so blank currdtstindex
              sessionStorage.setItem("curcldtindex", "");
              sessionStorage.setItem("curdtstindex", "");

              sessionStorage.setItem("curdid", "");
              sessionStorage.setItem("cursid", "");
            }
          }
        }
        else
        {
          sty = '		  <div class="col-md-12 rowdiv" style="background-color: white;">';
          if (!IsBlank(clLtArray[Number(curclindex)-1].clName)) {
            sty1 = clLtArray[Number(curclindex)-1].clName+' Date List is Empty.';
          }
          else {
            sty1 = 'Class date is empty.';
          }

          var mDiv = document.getElementById("maincontent");
          var divMainRow = document.createElement("div");
          divMainRow.setAttribute("class", "row");
          divMainRow.setAttribute("id", "maindiv"+i);
          mDiv.appendChild(divMainRow);
          document.getElementById("maindiv"+i).style.display = "block";
          document.getElementById("maindiv"+i).innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row" style="border: 0px solid #2E2E2E; background-color: white; text-align: center;" id="maindiv">'+
          '    <div class="col-md-12">'+
          '	     <div class="row rowdiv1">'+
          '      '+sty+
          '			   <p>'+
          '				   '+sty1+
          '			   </p>'+
          '		   </div>'+ // close of sty div
          '	   </div>'+
          '	 </div>'+
          '</div>';
        }

        if (sld === 'SlideLeft')
          document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInLeft")
        else
          document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInRight");

        CalcMainContentHeight();
      }
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      showSpin = false;
      if (document.getElementById("showspin") !== null)
        document.getElementById("showspin").style.display = "none";
    }
  }
} //ShowClassDate(sld)

function GetStudentList(did, dindex) {
  if (window.sessionStorage) {
    curclindex = sessionStorage.getItem("curclindex");
    curcid = sessionStorage.getItem("curcid");

    if (Number(curcldtindex) !== Number(dindex)) {
      sessionStorage.setItem("curdtstindex", "");
      sessionStorage.setItem("cursid", "");
    }

    sessionStorage.setItem("curcldtindex", dindex);
		sessionStorage.setItem("curdid", did);
  }

  dld = false;
  if ((clLtArray[Number(curclindex)-1].dtArray !== null) &&
      (clLtArray[Number(curclindex)-1].dtArray !== undefined) &&
      (Number(clLtArray[Number(curclindex)-1].dtArray.length) > 0)) {
    if (window.sessionStorage) {
      curdtstindex = sessionStorage.getItem("curdtstindex");
    }

    if ((clLtArray[Number(curclindex)-1] !== null) &&
        (clLtArray[Number(curclindex)-1] !== undefined)) {
      // set to false to always refresh class date list
       dld = clLtArray[Number(curclindex)-1].clDtDloaded;
    }
  }

  dl = false;
  if ((clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1].stArray !== null) &&
      (clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1].stArray !== undefined) &&
      (clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1].stArray.length > 0)) {
    if (window.sessionStorage) {
      curdtstindex = sessionStorage.getItem("curdtstindex");
    }

    if ((clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1] !== null) &&
        (clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1] !== undefined)) {
      dl = clLtArray[Number(curclindex)-1].dtArray[Number(dindex)-1].dateStDLoaded;
    }
  }

  if (reasonLoaded == false) {
    try {
      AjaxCall('GetReasonType');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
  else if (dld == false) {
    try {
      AjaxCall('GetClassDate');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
  else if (dl == false) {
    try {
      AjaxCall('GetStudentList');
    }
    catch (err) {
      //catchCode - Block of code to handle errors
    }
    finally {
      //finallyCode - Block of code to be executed regardless of the try / catch result
    }
  }
  else {
    if (serviceOK == false)
      serviceOK = true;
    if (String(loginOK) === 'No')
      loginOK = 'Yes';
    if (window.sessionStorage)
      sessionStorage.setItem("loginOK", loginOK);

    ShowStudentList('SlideLeft');
  }
}

function ShowStudentList(sld) {
	try {
    if (document.getElementById("msgvalidate") !== null)
      $("#msgvalidate").html('');
    if (($('#mydatepicker') !== null) && ($('#mydatepicker') !== undefined))
      $('#mydatepicker').datepicker('hide');

    BuildNav('ShowSCButtons');

    if (loginOK === 'Yes') {
      var scl = '',
          sdt = '';
      if (window.sessionStorage) {
        currpage='StudentList';
        sessionStorage.setItem("savecurrpage", "StudentList");

        curclindex = sessionStorage.getItem("curclindex");
        curcldtindex = sessionStorage.getItem("curcldtindex");
        curdtstindex = sessionStorage.getItem("curdtstindex");
      }

      stArrayOrg = [];
      stArrayOrg.length = 0;
      if ((clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray !== null) &&
          (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray !== undefined) &&
          (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray.length > 0)) {
        stArrayOrg = JSON.parse(JSON.stringify(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray));
      }

      if ((clLtArray[Number(curclindex)-1].clName !== null) || (clLtArray[Number(curclindex)-1].clName !== undefined)) {
        scl = clLtArray[Number(curclindex)-1].clName;
      }

      if ((clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date !== null) ||
          (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date !== undefined)) {
        sdt = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date;
          }

      selectList = '';
      for (var i=1; i<=stuNum; i++) {
        selectList = selectList+
        '					 <option value="'+i+'">'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].stuName+'</option>';
      } //for

      if (document.getElementById("catrow1") !== null)
        document.getElementById("catrow1").innerHTML = '';
      var hDiv = document.getElementById("headcontent");
      var divHeadRow = document.createElement("div");
      divHeadRow.setAttribute("class", "row");
      divHeadRow.setAttribute("id", "catrow1");
      hDiv.appendChild(divHeadRow);
      document.getElementById("catrow1").style.display = "block";

      var n = '',
          tmp = '';
      if (stuNum > 0)
        n = ' - Total: '+stuNum;
      if (winW < 640) {
        tmp = '			   <a onclick="GetClassDate(\''+clLtArray[Number(curclindex)-1].clId+'\', \''+Number(curclindex)+'\', \'FromStudent\')" title="Back to '+scl+' date list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>';

        document.getElementById("catrow1").innerHTML =
        '<div class="col-md-12">'+

        '  <div class="row">'+
        '    <div class="col-md-12 headdiv" id="headrow1">'+
        '	 	   <p>'+
        '        '+tmp+
        '        &nbsp;&nbsp;<select id="cls'+curcldtindex+'Stu" class="pulldownstyle" style="" onchange="GoToStudent(this.value)" title="Go to a Student">'+
        '					 <option value=""></option>'+
        '					 '+selectList+
        '			   </select>'+
        '			 </p>'+
        '		 </div>'+
        '  </div>'+

        '  <div class="row" style="border-bottom: 1px solid silver;">'+
        '	 	   <p style="padding: 0px 0px 0px 10px; font-size: 12px" id="debugging">'+
        '		     '+scl+' '+sdt+' Student List'+n+
        '			 </p>'+
        '  </div>'+

        '</div>';
      }
      else if (winW < 992) {
        tmp = '			   <a onclick="GetClassDate(\''+clLtArray[Number(curclindex)-1].clId+'\', \''+Number(curclindex)+'\', \'FromStudent\')" title="Back to '+scl+' date list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>';

        document.getElementById("catrow1").innerHTML =
        '<div class="col-md-12">'+
        '  <div class="row">'+
        '    <div class="col-md-12 headdiv" id="headrow1">'+
        '	 	   <p>'+
        '        '+tmp+
        '        &nbsp;&nbsp;'+
        '		     '+scl+' '+sdt+' Student List'+n+'&nbsp;&nbsp;&nbsp;&nbsp;'+ //'		     Date '+dt+' Student List'+n+'&nbsp;&nbsp;&nbsp;&nbsp;'+
        '        <select id="cls'+curcldtindex+'Stu" class="pulldownstyle" style="" onchange="GoToStudent(this.value)" title="Go to a Student">'+
        '					 <option value=""></option>'+
        '					 '+selectList+
        '			   </select>'+
        '			 </p>'+
        '		 </div>'+
        '  </div>'+
        '</div>';
      }
      else {
        tmp  = '<a onclick="GetClassDate(\''+clLtArray[Number(curclindex)-1].clId+'\', \''+Number(curclindex)+'\', \'FromStudent\')" title="Back to '+scl+' date list"><span class="glyphicon glyphicon-chevron-left" style="cursor: pointer;"></a>'
        tmp1 = '			   &nbsp;<a onclick="GetClassDate(\''+clLtArray[Number(curclindex)-1].clId+'\', \''+Number(curclindex)+'\', \'FromStudent\')" style="color: white; cursor: pointer;" title="Back to '+scl+' date list">Back</a>';

        document.getElementById("catrow1").innerHTML =
        '<div class="col-md-12">'+
        '  <div class="row">'+
        '    <div class="col-md-2 headdiv" id="headrow1">'+
        '	 	   <p>'+
        '        '+tmp+
        '        '+tmp1+
        '			 </p>'+
        '		 </div>'+
        '		 <div class="col-md-6 headdiv" id="headrow2">'+
        '		     <p>'+scl+' '+sdt+' Student List'+n+'</p>'+
        '		 </div>'+
        '		 <div class="col-md-4 headdiv" id="headrow3">'+
        '				 Go to a Student:&nbsp;'+
        '        <select id="cls'+curcldtindex+'Stu" class="pulldownstyle" style="" title="Go to a student" onchange="GoToStudent(this.value)" title="Go to a Student">'+
        '					 <option value=""></option>'+
        '					 '+selectList+
        '			   </select>'+
        '		 </div>'+
        '  </div>'+
        '</div>';
      }

      if ((document.getElementById('cls'+curcldtindex+'Stu') !== null) && (safariDesk === true))
        document.getElementById('cls'+curcldtindex+'Stu').style.height = "20px";

      var sty1 = '',
          sty2 = '',
          sty3 = '',
          sty4 = '',
          rbtnIdx = 0,
          keyBoardStr = '';

      document.getElementById("maincontent").innerHTML =  '';
      $('body, html, #maincontent').scrollTop(0);
      if ((stuNum > 0) && (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray.length > 0)) {
        for (var i=1; i<=stuNum; i++) {
          if (document.getElementById("maindiv"+i) !== null)
            document.getElementById("maindiv"+i).remove();
          if (document.getElementById("maindivEX"+i) !== null)
            document.getElementById("maindivEX"+i).remove();
        } //for
        if (document.getElementById("maindivEX"+Number(stuNum)+9999999) !== null)
          document.getElementById("maindivEX"+Number(stuNum)+9999999).remove();

        var abStr = 'Absent Unexcused';
        if (winW > 992) {
          var mDiv = document.getElementById("maincontent");
          var divMainRow = document.createElement("div");
          divMainRow.setAttribute("class", "row");
          divMainRow.setAttribute("id", "titlerow");
          mDiv.appendChild(divMainRow);
          document.getElementById("titlerow").style.display = "block";
          document.getElementById("titlerow").innerHTML =
          '<div class="col-md-12">'+
          '  <div class="row" style="border: 1px solid silver; background-color: white;" >'+
          '    <div class="col-md-12">'+
          '		   <div class="row rowdiv1">'+
          '			   <div class="col-md-3 titlediv" style="background-color: lightblue;"><p>Student</p></div>'+
          '			   <div class="col-md-4 titlediv" style="background-color: lightblue;"><p>Attendance</p></div>'+
          '			   <div class="col-md-3 titlediv" style="background-color: lightblue;"><p>Reason</p></div>'+
          '			   <div class="col-md-2 titlediv" style="background-color: lightblue;"><p>Note</p></div>'+
          '			 </div>'+
          '    </div>'+
          '	 </div>'+
          '</div>';

          for (var i=1; i<=stuNum; i++) {
            var ds1 = Number(i)+Number(1),
                ds2 = Number(i)+Number(9999)
                ds3 = Number(i)+Number(99999),
                ds4 = Number(i)+Number(999999),
                stnm = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].stuName,
                charnum = stnm.length;

            if (browserName === 'IE') {
              if ((i % 2) === 0) {
                if (charnum>35)
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 0px 0px 0px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 20px 0px 0px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 5px 0px 15px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 20px 0px 0px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 0px 0px 20px 0px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #BDBDBD; border: 0px solid black; ">';
              }
              else {
                if (charnum>35)                  
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 0px 0px 0px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 20px 0px 0px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 5px 0px 15px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 20px 0px 0px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 0px 0px 20px 0px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #E6E6E6; border: 0px solid black; ">';
              }
            }
            else if (browserName === 'Firefox') {
              if ((i % 2) === 0) {
                if (charnum>35)
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 40px 0px 60px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 60px 0px 60px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 5px 0px 5px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 60px 0px 60px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 0px 0px 10px 20px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #BDBDBD; border: 0px solid black; ">';
              }
              else {
                if (charnum>35)
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 40px 0px 60px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 60px 0px 60px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 5px 0px 5px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 60px 0px 60px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 0px 0px 10px 20px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #E6E6E6; border: 0px solid black; ">';
              }
            }
            else {              
              if ((i % 2) === 0) {
                if (charnum>35)
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 40px 0px 60px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 60px 0px 60px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 5px 0px 5px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 60px 0px 60px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #BDBDBD; padding: 0px 0px 9px 20px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #BDBDBD; border: 0px solid black; ">';
              }
              else {
                if (charnum>35)
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 40px 0px 60px 20px;"><p>'+stnm+'</p>'
                else
                  sty1 = '     <div id="dsv'+ds1.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 60px 0px 60px 20px;"><p>'+stnm+'</p>';
                sty2 = '     <div id="dsv'+ds2.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 5px 0px 5px 0px;">';
                sty3 = '     <div id="dsv'+ds3.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 60px 0px 60px 0px;">';
                sty4 = '     <div id="dsv'+ds4.toString()+'" class="col-md-3 rowdiv2" style="background-color: #E6E6E6; padding: 0px 0px 9px 20px;">';

                styr = '     <div class="col-md-12" style="min-height: 10px; line-Height: 15px; background-color: #E6E6E6; border: 0px solid black; ">';
              }
            }

            // if (ieBrowser) {
              // $(".txtArea").css('height',131);
            // }

            if (ismobile) {
              keyBoardStr = '          <div class="input-group">'+
                              '            <input class="form-control myinput typeahead" data-provide="typeahead" id="theinput'+i+'" autocomplete="off" onclick="ElementClick(this)" placeholder="Enter or select a reason" readonly onblur="ReasonOnBlur(this, '+i+')" onchange="" maxlength="30" title="Max 30 characters">'+
                              '            <div class="input-group-btn">'+
                              '              <button type="button" class="btn btn-default form-control-1 mydropdown" id="thelist'+i+'" onclick="InputOnClick(\'thelist'+i+'\', \'theinput'+i+'\')"><span class="caret"></span></button>'+
                              '              </div>'+
                              '          </div><!-- /input-group -->';
            }
            else {
              keyBoardStr = '          <div class="input-group">'+
                              '            <input class="form-control myinput typeahead" data-provide="typeahead" id="theinput'+i+'" autocomplete="off" onclick="ElementClick(this)" placeholder="Enter or select a reason" onblur="ReasonOnBlur(this, '+i+')" maxlength="30" title="Max 30 characters" typeahead-select-on-blur="true" typeahead-select-on-exact="true">'+
                              '            <div class="input-group-btn">'+
                              '              <button type="button" class="btn btn-default form-control-1 mydropdown" id="thelist'+i+'" onclick="InputOnClick(\'thelist'+i+'\', \'theinput'+i+'\')"><span class="caret"></span></button>'+
                              '              </div>'+
                              '          </div><!-- /input-group -->';
            }

            var mDiv = document.getElementById("maincontent");
            var divMainRow = document.createElement("div");
            divMainRow.setAttribute("class", "row");
            divMainRow.setAttribute("id", "maindiv"+i);
            divMainRow.setAttribute("onclick", "StuGridFocused("+i+")");
            mDiv.appendChild(divMainRow);
            document.getElementById("maindiv"+i).style.display = "block";
            document.getElementById("maindiv"+i).innerHTML =
            '<div class="col-md-12">'+
            '  <div class="row" style="border: 1px solid silver; background-color: white;" id="student'+i+'">'+
            '  <div class="col-md-12">'+
            '	   <div class="row rowdiv1">'+

            '      '+sty1+
            '      </div>'+ // close sty1 div

            ' 		 '+sty2+
            '				   '+styr+

            '					   <div class="radio radio-primary myradio" style="padding: 0px 20px 0px 20px; border: 0px solid black;" >'+
            '						   <input type="radio" style="styled" onclick="DataChanged(this, \'radiopresent\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+1)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent+'"/>'+
            '						   <label class="mylabel" for="attd'+(rbtnIdx+1)+'Opt">Present</label>'+
            '					   </div>'+

            '					   <div class="radio radio-primary myradio" style="padding: 0px 20px 0px 20px; border: 0px solid black;" >'+
            '						   <input type="radio" style="styled" onclick="DataChanged(this, \'radioabsent\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+2)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent+'"/>'+
            '						   <label class="mylabel" for="attd'+(rbtnIdx+2)+'Opt">Absent</label>'+
            '					   </div>'+

            '					   <div class="radio radio-primary myradio" style="padding: 0px 20px 0px 20px; border: 0px solid black;" >'+
            '						   <input type="radio" style="styled" onclick="DataChanged(this, \'radioabexc\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+3)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc+'"/>'+
            '						   <label class="mylabel" for="attd'+(rbtnIdx+3)+'Opt">Absent Excused</label>'+
            '					   </div>'+

            '					   <div class="radio radio-primary myradio" style="padding: 0px 20px 0px 20px; border: 0px solid black;" >'+
            '						   <input type="radio" style="styled" onclick="DataChanged(this, \'radioabunexc\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+4)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc+'"/>'+
            '						   <label class="mylabel" for="attd'+(rbtnIdx+4)+'Opt">'+abStr+'</label>'+
            '					   </div>'+

            '					   <div class="radio radio-primary myradio" style="padding: 0px 20px 0px 20px; border: 0px solid black;" >'+
            '						   <input type="radio" style="styled" onclick="DataChanged(this, \'radiotardy\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+5)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy+'"/>'+
            '						   <label class="mylabel" for="attd'+(rbtnIdx+5)+'Opt">Tardy</label>'+
            '					   </div>'+

            '					 </div>'+
            '      </div>'+ // close sty2 div

            '			 '+sty3+
            '			   <div class="row">'+
            '				   <div class="col-md-12">'+

            '         '+keyBoardStr+

            '				   </div>'+
            '			   </div>'+
            '			 </div>'+ // close sty3 div

            '			 '+sty4+
            '			   <div class="row">'+
            '				   <div class="col-md-12">'+
            '					   <p>'+
            '						   <textarea rows="6" id="stu'+i+'note" onclick="ElementClick(this)" onkeyup="DataChanged(this, \'txtarea\', '+i+')" class="txtArea" placeholder="Enter a note"></textarea>'+
            '					   </p>'+
            '					 </div>'+
            '			   </div>'+
            '			 </div>'+ // close sty4 div

            '	   </div>'+
            '	   </div>'+
            '	 </div>'+
            '</div>';

            var tinput = $('#theinput'+i);
            tinput.typeahead('destroy');
            tinput.val(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sReason);
            tinput = $('.typeahead');
            tinput.typeahead({
                              source: thReasonArray,
                              minLength: 0,
                              addItem: false,
                              showHintOnFocus: true
            });

            var tradio1 = document.getElementById('attd'+(rbtnIdx+1)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent === true)
              tradio1.checked = true;

            var tradio2 = document.getElementById('attd'+(rbtnIdx+2)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent === true)
              tradio2.checked = true;

            var tradio3 = document.getElementById('attd'+(rbtnIdx+3)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc === true)
              tradio3.checked = true;

            var tradio4 = document.getElementById('attd'+(rbtnIdx+4)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc === true)
              tradio4.checked = true;

            var tradio5 = document.getElementById('attd'+(rbtnIdx+5)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy === true)
              tradio5.checked = true;

            var ttxtarea = 'stu'+i+'note';
            document.getElementById(ttxtarea).value = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sNote;
            if (browserName === 'Firefox') {
              $("#"+ttxtarea).css('height',126);
            }

            if (browserName === 'IE') {
              // var dh = $('#dv'+Number(i)+9999).height();
              // $('#dv'+Number(i)+1).height(dh);
              // $('#dv'+Number(i)+99999).height(dh);
              // $('#dv'+Number(i)+999999).height(dh);
              // $('#dv'+Number(i)+99999).height(dh);

              var dh = $('#dsv'+ds2.toString()).height();
              $('#dsv'+ds1.toString()).height(dh);
              $('#dsv'+ds3.toString()).height(dh);
              $('#dsv'+ds4.toString()).height(dh);
            }

            // a break in between
            var mDivEX = document.getElementById("maincontent");
            var divMainRowEX = document.createElement("div");
            divMainRowEX.setAttribute("class", "row");
            divMainRowEX.setAttribute("id", "maindivEX"+i);
            mDivEX.appendChild(divMainRowEX);
            document.getElementById("maindivEX"+i).style.display = "block";
            document.getElementById("maindivEX"+i).innerHTML =
            '<div class="col-md-12">'+
            '  <div class="row" style="height: 5px!important; background-color: #E6FFCC!important;" >'+
            '	 </div>'+
            '</div>';

            rbtnIdx = rbtnIdx + 5;
          } //for
        }
        else {
          for (var i=1; i<=stuNum; i++) {
             if ((i % 2) === 0) {
              sty =  '<div class="rowdiv3" style="background-color: #BDBDBD;">';
            }
            else {
              sty =  '<div class="rowdiv3" style="background-color: #E6E6E6;">';
            }

            if (browserName === 'IE') {
              sty1 =
              '        <p style="padding-bottom: 10px">'+
              '				   <textarea rows="4" id="stu'+i+'note" onclick="ElementClick(this)" onkeyup="DataChanged(this, \'txtarea\', '+i+')" class="txtArea" placeholder="Enter a note"></textarea>'+
              '        </p>';

            }
            else {
              sty1 =
              '        <p>'+
              '				   <textarea rows="4" id="stu'+i+'note" onclick="ElementClick(this)" onkeyup="DataChanged(this, \'txtarea\', '+i+')" class="txtArea" placeholder="Enter a note"></textarea>'+
              '        </p>';
            }

            if (ismobile) {
              keyBoardStr = '          <div class="input-group">'+
                              '            <input class="form-control myinput typeahead" data-provide="typeahead" id="theinput'+i+'" autocomplete="off" onclick="ElementClick(this)" placeholder="Enter or select a reason" readonly onblur="ReasonOnBlur(this, '+i+')" maxlength="30" title="Max 30 characters" typeahead-select-on-blur="true" typeahead-select-on-exact="true">'+
                              '            <div class="input-group-btn">'+
                              '              <button type="button" class="btn btn-default form-control-1 mydropdown" id="thelist'+i+'" onclick="InputOnClick(\'thelist'+i+'\', \'theinput'+i+'\')"><span class="caret"></span></button>'+
                              '              </div>'+
                              '          </div><!-- /input-group -->';
            }
            else {
              keyBoardStr = '          <div class="input-group">'+
                              '            <input class="form-control myinput typeahead" data-provide="typeahead" id="theinput'+i+'" autocomplete="off" onclick="ElementClick(this)" placeholder="Enter or select a reason" onblur="ReasonOnBlur(this, '+i+')" maxlength="30" title="Max 30 characters" typeahead-select-on-blur="true" typeahead-select-on-exact="true">'+
                              '            <div class="input-group-btn">'+
                              '              <button type="button" class="btn btn-default form-control-1 mydropdown" id="thelist'+i+'" onclick="InputOnClick(\'thelist'+i+'\', \'theinput'+i+'\')"><span class="caret"></span></button>'+
                              '              </div>'+
                              '          </div><!-- /input-group -->';
            }

            var mDiv = document.getElementById("maincontent");
            var divMainRow = document.createElement("div");
            divMainRow.setAttribute("class", "row");
            divMainRow.setAttribute("id", "maindiv"+i);
            divMainRow.setAttribute("onclick", "StuGridFocused("+i+")");
            mDiv.appendChild(divMainRow);
            document.getElementById("maindiv"+i).style.display = "block";
            document.getElementById("maindiv"+i).innerHTML =
            '<div class="col-md-12">'+
            '  <div class="row" style="border: 1px solid gray; background-color: white;" id="student'+i+'">'+
            '    <div class="col-md-12">'+
            '      '+sty+

            '        <p style="font-size: 15px;">'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].stuName+'</p>'+

            '        <p>'+
            '			     <div class="radio radio-primary myradio" style="" >'+
            '				     <input type="radio" style="styled" onclick="DataChanged(this, \'radiopresent\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+1)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent+'"/>'+
            '					   <label class="mylabel" for="attd'+(rbtnIdx+1)+'Opt">Present</label>'+
            '				   </div>'+
            '        </p>'+

            '        <p>'+
            '			     <div class="radio radio-primary myradio" style="" >'+
            '				     <input type="radio" style="styled" onclick="DataChanged(this, \'radioabsent\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+2)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent+'"/>'+
            '					   <label class="mylabel" for="attd'+(rbtnIdx+2)+'Opt">Absent</label>'+
            '				   </div>'+
            '        </p>'+

            '        <p>'+
            '			     <div class="radio radio-primary myradio" style="" >'+
            '			  	   <input type="radio" style="styled" onclick="DataChanged(this, \'radioabexc\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+3)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc+'"/>'+
            '			  		 <label class="mylabel" for="attd'+(rbtnIdx+3)+'Opt">Absent Excused</label>'+
            '			  	 </div>'+
            '        </p>'+

            '        <p>'+
            '			     <div class="radio radio-primary myradio" style="" >'+
            '			  	   <input type="radio" style="styled" onclick="DataChanged(this, \'radioabunexc\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+4)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc+'"/>'+
            '		  			 <label class="mylabel" for="attd'+(rbtnIdx+4)+'Opt">'+abStr+'</label>'+
            '		  		 </div>'+
            '        </p>'+

            '        <p>'+
            '			     <div class="radio radio-primary myradio" style="" >'+
            '			  	   <input type="radio" style="styled" onchange="DataChanged(this, \'radiotardy\', '+i+')" onclick="EnableSaveCancel()" name="attd'+i+'Opt" id="attd'+(rbtnIdx+5)+'Opt" value="'+clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy+'"/>'+
            '			  		 <label class="mylabel" for="attd'+(rbtnIdx+5)+'Opt">Tardy</label>'+
            '			  	 </div>'+
            '        </p>'+

            '        '+keyBoardStr+

            '        '+sty1+
            '	     </div>'+
            '	   </div>'+
            '	 </div>'+
            '</div>';

            var tinput = $('#theinput'+i);
            tinput.typeahead('destroy');
            tinput.val(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sReason);
            tinput = $('.typeahead');
            tinput.typeahead({
                              source: thReasonArray,
                              minLength: 0,
                              addItem: false,
                              showHintOnFocus: true
            });

            var tradio1 = document.getElementById('attd'+(rbtnIdx+1)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent === true)
              tradio1.checked = true;

            var tradio2 = document.getElementById('attd'+(rbtnIdx+2)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent === true)
              tradio2.checked = true;

            var tradio3 = document.getElementById('attd'+(rbtnIdx+3)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc === true)
              tradio3.checked = true;

            var tradio4 = document.getElementById('attd'+(rbtnIdx+4)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc === true)
              tradio4.checked = true;

            var tradio5 = document.getElementById('attd'+(rbtnIdx+5)+'Opt');
            if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy === true)
              tradio5.checked = true;

            var ttxtarea = 'stu'+i+'note';
            document.getElementById(ttxtarea).value = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sNote;

            // a break in between
            var mDivEX = document.getElementById("maincontent");
            var divMainRowEX = document.createElement("div");
            divMainRowEX.setAttribute("class", "row");
            divMainRowEX.setAttribute("id", "maindivEX"+i);
            mDivEX.appendChild(divMainRowEX);
            document.getElementById("maindivEX"+i).style.display = "block";
            document.getElementById("maindivEX"+i).innerHTML =
            '<div class="col-md-12">'+
            '  <div class="row" style="height: 5px!important; background-color: #E6FFCC!important;" >'+
            '	 </div>'+
            '</div>';

            rbtnIdx = rbtnIdx + 5;
          } //for
        }

        // a break at the bottom list to make sure having enough of room for the reason pulldown list shows up.
        var rhi =Number(8) * 18, dexid = Number(stuNum)+9999999; //Number(reaNum)
        var mDivEX = document.getElementById("maincontent");
        var divMainRowEX = document.createElement("div");
        divMainRowEX.setAttribute("class", "row");
        divMainRowEX.setAttribute("id", "maindivEX"+dexid);
        mDivEX.appendChild(divMainRowEX);
        document.getElementById("maindivEX"+dexid).style.display = "block";
        document.getElementById("maindivEX"+dexid).innerHTML =
        '<div class="col-md-12">'+
        '  <div class="row" style="height: '+rhi+'px; background-color: #E6FFCC;" >'+
        '	 </div>'+
        '</div>';

        if (visitST === true) {
          if (!IsBlank(curdtstindex))
            GoToStudent(curdtstindex)
          else
            GoToStudent("1");
        }
        else { // if visitST === false, then set to true.
          $('body, html, #maincontent').scrollTop(0);
          visitST = true;
        }
      }
      else
      {
        sty = '		  <div class="col-md-12 rowdiv" style="background-color: white;">';
        if (!IsBlank(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date)) {
          sty1 = clLtArray[Number(curclindex)-1].clName + ' '  +
                 clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date +' Student List is Empty.';
        }
        else {
          sty1 = 'Class student list is empty.';
        }

        var mDiv = document.getElementById("maincontent");
        var divMainRow = document.createElement("div");
        divMainRow.setAttribute("class", "row");
        divMainRow.setAttribute("id", "maindiv"+i);
        mDiv.appendChild(divMainRow);
        document.getElementById("maindiv"+i).style.display = "block";
        document.getElementById("maindiv"+i).innerHTML =
        '<div class="col-md-12">'+
        '  <div class="row" style="border: 0px solid #2E2E2E; background-color: white; text-align: center;" id="maindiv">'+
        '    <div class="col-md-12">'+
        '	     <div class="row rowdiv1">'+
        '      '+sty+
        '			   <p>'+
        '				   '+sty1+
        '			   </p>'+
        '		   </div>'+
        '	   </div>'+
        '	 </div>'+
        '</div>';
      }

      if (doslide === true) {
        if (sld === 'SlideLeft')
          document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInLeft")
        else
          document.getElementById("maincontent").setAttribute("class", "container contentbody-info animated fadeInRight");
      }

      CalcMainContentHeight();
    }
  }
  catch (err) {
    //catchCode - Block of code to handle errors
  }
  finally {
    showSpin = false;
    if (document.getElementById("showspin") !== null)
      document.getElementById("showspin").style.display = "none";
  }
} //ShowStudentList(sld)

function GoToClass(cl) {
  var savei = 0;
  if (clsNum > 0) {
    var sc = '';
    for (var i=1; i<=clsNum; i++) {
      if (i === Number(cl)) {
				savei = i;
				$("#gridclass"+i).css("background-color", "#e1a95f");
      }
      else
        $("#gridclass"+i).css("background-color", "white");
    } //for
  }

	if (savei > 0) {
	  var eh = $('#gridclass'+savei).height(),
      et = $('#gridclass'+savei).offset().top,
      main = $("#maincontent:not(:animated)"),
      destination = (et + main.scrollTop()) - (eh*2);
    if (($('#titlerow') !== null) && ($('#titlerow').height() !== undefined)) {
      var th = $('#titlerow').height();
      destination = destination - th;
    }
    else if (($('#titlerowmobile') !== null) && ($('#titlerowmobile').height() !== undefined)) {
      var th = $('#titlerowmobile').height();
      destination = destination - th;
    }
    main.animate({ scrollTop: destination},'fast', function(){} );
	}

	if (window.sessionStorage) {
		curclindex = sessionStorage.getItem("curclindex");
		if ((IsBlank(curclindex)) || (curclindex !== cl)) {
			sessionStorage.setItem("curcldtindex", "");
      sessionStorage.setItem("curdid", "");

			sessionStorage.setItem("curdtstindex", ""); //--> same class, but different date, should save student index
      sessionStorage.setItem("cursid", "");
		}
		sessionStorage.setItem("curclindex", cl);
	}
}

function GoToDate(dt, cmd) {
  document.calendarClicked = true;

  var savei = 0,
	    tdt1 = dt,
	    n = 0,
      gID = 0;

	try {
		var n = tdt1.search('/');
	}
    catch(err) {
  }

	if (n > 0) {
    if (window.sessionStorage) {
      curclindex = sessionStorage.getItem("curclindex");
      curcldtindex = sessionStorage.getItem("curcldtindex");
      curdtstindex = sessionStorage.getItem("curdtstindex");
    }

		for (var i = 0; i < dteNum; i++) {
				if (dt === clLtArray[Number(curclindex)-1].dtArray[i].date) {
          gID = i+1;
          break;
				}
		}
	}
  else gID = Number(dt);

  if (dteNum > 0) {
    var sc = '';
    for (var i=1; i<=dteNum; i++) {
      if (i === gID) {
				savei = i;
				$("#griddate"+i).css("background-color", "#e1a95f");
      }
      else
        $("#griddate"+i).css("background-color", "white");
    } //for
  }

	if (savei > 0) {
    var eh = $('#griddate'+savei).height(),
        et = $('#griddate'+savei).offset().top,
        main = $("#maincontent:not(:animated)"),
        destination = (et + main.scrollTop()) - (eh*4);
    if (($('#titlerow') !== null) && ($('#titlerow').height() !== undefined)) {
      var th = $('#titlerow').height();
      destination = destination - th;
    }
    main.animate({ scrollTop: destination},'fast', function(){} );

		if (($('#mydatepicker') !== null) && ($('#mydatepicker') !== undefined))
      $('#mydatepicker').datepicker('hide');
	}
	else {
	  if ((cmd === 'From Calendar') && (!IsBlank(dt))) {
		  document.getElementById('noclasslbl').innerHTML = '<p style="text-align: center;">There is no class on '+dt+'.'+'<br><br>Please select a highlight date on the calendar.'+'<br>OR<br>Select a date on the grid.</p>';
		  document.getElementById('mydatepicker').value = '';
		  $('#abtNoClass').modal('show');
			$('#abtNoClass').on('hidden.bs.modal', function (e) {
				$('#mydatepicker').focus();
			});
		}
	}

	if (window.sessionStorage) {
    tdt1 = dt;

    n = 0;
		try {
			var n = tdt1.search('/');
		}
			catch(err) {
		}

		if (n > 0) {
      if (window.sessionStorage) {
        curclindex = sessionStorage.getItem("curclindex");
        curcldtindex = sessionStorage.getItem("curcldtindex");
        curdtstindex = sessionStorage.getItem("curdtstindex");
      }

			gID = 0;
			for (var i = 0; i < dteNum; i++) {
				if (dt === clLtArray[Number(curclindex)-1].dtArray[i].date) {
						gID = i+1;
						curcldtindex = sessionStorage.getItem("curcldtindex");
						if ((IsBlank(curcldtindex)) || (curcldtindex !== gID)) {
							sessionStorage.setItem("curdtstindex", "");
              sessionStorage.setItem("curdid", "");
            }

						sessionStorage.setItem("curcldtindex", gID);
            sessionStorage.setItem("curdid", clLtArray[Number(curclindex)-1].dtArray[i].dateId);

						curcldtindex = sessionStorage.getItem("curcldtindex");
            curdid = sessionStorage.getItem("curdid");

						break;
				}
			}
		}
	}
}

function GoToStudent(st) {
  var savei = 0
      sc = '';
  if (stuNum > 0) {
    for (var i=1; i<=stuNum; i++) {
      if (i === Number(st))
      {
				savei = i;
				$("#student"+i).css("background-color", "#e1a95f");
      }
      else
        $("#student"+i).css("background-color", "white");
    } //for
  }

	if (savei > 0) {
	  var eh = $('#student'+savei).height(),
        et = $('#student'+savei).offset().top,
        main = $("#maincontent:not(:animated)"),
        destination = (et + main.scrollTop()) - (eh);
    if (($('#titlerow') !== null) && ($('#titlerow').height() !== undefined)) {
      var th = $('#titlerow').height();
      destination = destination - th;
    }
    main.animate({ scrollTop: destination},'fast', function(){} );
	}

	if (window.sessionStorage) {
    sessionStorage.setItem("curdtstindex", st);
    curdtstindex = sessionStorage.getItem("curdtstindex");
	}
}

function StuGridFocused(gID) {
  for (var i=1; i<=stuNum; i++) {
		if (i === gID) {
			$("#student"+i).css("background-color", "#e1a95f");
			if (window.sessionStorage) {
				sessionStorage.setItem("curdtstindex", i);
				if ((IsBlank(curdtstindex)) || (curdtstindex !== i))
					curdtstindex = i;
			}
		}
		else {
		  $("#student"+i).css("background-color", "white");
    }
	} //for
}

function EnableSaveCancel() {
  if (document.getElementById("savebtn") !== null)
		document.getElementById("savebtn").disabled = false;
  if (document.getElementById("cancelbtn") !== null)
		document.getElementById("cancelbtn").disabled = false;

	dataEdited = true;
}

function DisableSaveCancel(cmd) {
	if (cmd === 'DoCancel') {
		doslide = false;

		if (window.sessionStorage) {
      curclindex = sessionStorage.getItem("curclindex");
		  curcldtindex = sessionStorage.getItem("curcldtindex");
		  curdtstindex = sessionStorage.getItem("curdtstindex");
		}

		try {
      if ((stArrayOrg != undefined) &&
          (stArrayOrg != null) &&
          (stArrayOrg.length > 0) &&
          (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray != null) &&
          (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray != undefined)) {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray = [];
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray.length = 0;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray = JSON.parse(JSON.stringify(stArrayOrg));
      }

      if ((thReasonArrayOrg != undefined) &&
          (thReasonArrayOrg != null) &&
          (thReasonArrayOrg.length > 0)) {
        thReasonArray = [];
        thReasonArray.length = 0;
        thReasonArray = JSON.parse(JSON.stringify(thReasonArrayOrg));
      }

			ShowStudentList('SlideLeft');
		}
		catch(err) {
		}
		finally {
			doslide = true;
		}
	}

  if (document.getElementById("savebtn") !== null)
		document.getElementById("savebtn").disabled = true;
  if (document.getElementById("cancelbtn") !== null)
		document.getElementById("cancelbtn").disabled = true;

	dataEdited = false;
  ppdata = '';
}

function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function daysInMonth(anyDateInMonth) {
	return new Date(anyDateInMonth.getYear(),
									anyDateInMonth.getMonth()+1,
									0).getDate();
}

function DocResize() {
  winW = document.documentElement.clientWidth;
  winH = document.documentElement.clientHeight;

  pn = location.pathname;
	if (pn.search('main.html') > 0) {
    sn = '';
    un = '';
    pw = '';
    sx = '';
    loginOK = 'No';
    if (window.sessionStorage) {
        loginOK = sessionStorage.getItem("loginOK");
        if ((String(loginOK) === 'null') && (String(loginOK) !== 'Yes')) {
          loginOK = 'No';
        }
        else {
          loginOK = 'Yes';
          GetCredential('');
        }
      }

		if ((loginOK === 'Yes') && (!IsBlank(sn)) && (!IsBlank(un)) && (!IsBlank(pw))) {
      if (dataEdited === true) {
        saveFor = 'DocResize';
        saveMsg = 'NoMessage';
        DoSave();
      }
      else {
        StartTimer();

        ppdata = '';

        if (window.sessionStorage) {
          currpage = sessionStorage.getItem("savecurrpage");

          curclindex = sessionStorage.getItem("curclindex");
          curcldtindex = sessionStorage.getItem("curcldtindex");
          curdtstindex = sessionStorage.getItem("curdtstindex");

          curcid = sessionStorage.getItem("curcid");
          curdid = sessionStorage.getItem("curdid");
          cursid = sessionStorage.getItem("cursid");
        }

        try {
          AjaxCall('MainLogIn');
        }
        catch (err) {
          //catchCode - Block of code to handle errors
        }
        finally {
          //finallyCode - Block of code to be executed regardless of the try / catch result
        }
      }
    }
    else {
      if (window.localStorage) {
        localStorage.setItem("sessn", '');
        localStorage.setItem("sesun", '');
        localStorage.setItem("sespw", '');
        localStorage.setItem("sessx", '');
      }

      serviceMsg = 'Please log in.';

      showSpin = false;
      if (document.getElementById("showspin") !== null)
        document.getElementById("showspin").style.display = "none";

      document.getElementById('loginlbl').innerHTML = '<p style="text-align: center;">'+serviceMsg+'</p>';
      $('#abtLogin').modal('show');
      $('#abtLogin').on('hidden.bs.modal', function (e) {
        loginAni = 'fadeInRight';
        window.location = "login.html";
        $('#inputSite').focus();
      });
    }
	}
	else {
    ShowLogin();
	}
}

function Enc(val) {
  return Aes.Ctr.encrypt(val, ky, 256);
}

function Dec(val) {
  return Aes.Ctr.decrypt(val, ky, 256);
}

function GetCredential(frm) {
  sn = '';
  un = '';
  pw = '';
  sx = '';

  if (window.localStorage) {
    var values = [],
        checkval = [],
        expires = new Date();
    expires = expires.getFullYear();

    values = [];
    checkval = [];
    checkval = localStorage.getItem("sk");
    if (checkval !== null) {
      values = localStorage.getItem("sk").split("||");
      if (values[1] < expires) {
        localStorage.removeItem("sk");
        localStorage.removeItem("churchsite");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      else {
        sk = values[0];
        ky = sk;
      }
    }

    if ((!IsBlank(sk)) && (sk !== null)) {
      values = [];
      checkval = [];
      checkval = localStorage.getItem("churchsite");
      if (checkval !== null) {
        values = localStorage.getItem("churchsite").split("||");
        if (values[1] < expires) {
          localStorage.removeItem("churchsite");
          localStorage.removeItem("sk");
        }
        else {
          sn = values[0];
          sn = Dec(sn);
        }
      }

      values = [];
      checkval = [];
      checkval = localStorage.getItem("username");
      if (checkval !== null) {
        values = localStorage.getItem("username").split("||");
        if (values[1] < expires) {
          localStorage.removeItem("username");
          localStorage.removeItem("sk");
        }
        else {
          un = values[0];
          un = Dec(un);
        }
      }

      values = [];
      checkval = [];
      checkval = localStorage.getItem("password");
      if (checkval !== null) {
        values = localStorage.getItem("password").split("||");
        if (values[1] < expires) {
          localStorage.removeItem("password");
          localStorage.removeItem("sk");
        }
        else {
          pw = values[0];
          pw = Dec(pw);
        }
      }

      sx = localStorage.getItem("savepw");

      // do compare
      var sn1 = localStorage.getItem("sessn");
      if ((!IsBlank(sn1)) && (!IsBlank(sn)) && (sn1 !== null) && (sn !== null) && (MyStrCmp(sn1, sn) !== 0)) {
        localStorage.removeItem("churchsite");
        localStorage.removeItem("sk");
      }
      if ((!IsBlank(sn1)) && (sn1 !== null)) {
        sn = sn1;
      }

      var un1 = localStorage.getItem("sesun");
      if ((!IsBlank(un1)) && (!IsBlank(un)) && (un1 !== null) && (un !== null) && (MyStrCmp(un1, un) !== 0)) {
        localStorage.removeItem("username");
        localStorage.removeItem("sk");
      }
      if ((!IsBlank(un1)) && (un1 !== null)) {
        un = un1;
      }

      var pw1 = localStorage.getItem("sespw");
      if ((!IsBlank(pw1)) && (!IsBlank(pw)) && (pw1 !== null) && (pw !== null) && (MyStrCmp(pw1, pw) !== 0)) {
        localStorage.removeItem("password");
        localStorage.removeItem("sk");
      }
      if ((!IsBlank(pw1)) && (pw1 !== null)) {
        pw = pw1;
      }

      var sx1 = localStorage.getItem("sessx");
      if ((!IsBlank(sx1)) && (!IsBlank(sx)) && (sx1 !== null) && (sx !== null) && (MyStrCmp(sx1, sx) !== 0)) {
        localStorage.removeItem("savepw");
      }
      if ((!IsBlank(sx1)) && (sx1 !== null)) {
        sx = sx1;
      }
    }
    else {
      if (window.localStorage) {
        sn = localStorage.getItem("sessn");
        if (sn === null)
          sn = '';

        un = localStorage.getItem("sesun");
        if (un === null)
          un = '';

        pw = localStorage.getItem("sespw");
        if (pw === null)
          pw = '';

        sx = localStorage.getItem("sessx");
        if (sx === null)
          sx = '';
      }
    }
  }
}

function SaveLogin() {
  try {
    if (window.localStorage) {
      localStorage.setItem("sessn", sn);
      localStorage.setItem("sesun", un);
      localStorage.setItem("sespw", pw);
      localStorage.setItem("sessx", sx);

      if (!IsBlank(serverGUI)) {
        var values = [],
            expires = new Date();
        expires = expires.getFullYear() + 1;
        ky = serverGUI;

        values = [];
        values.push(serverGUI);
        values.push(expires);
        localStorage.setItem("sk", values.join("||"));

        values = [];
        values.push(Enc(sn));
        values.push(expires);
        localStorage.setItem("churchsite", values.join("||"));

        values = [];
        values.push(Enc(un));
        values.push(expires);
        localStorage.setItem("username", values.join("||"));

        if (sx === "Yes")	{
          localStorage.setItem("savepw", "Yes");

          values = [];
          values.push(Enc(pw));
          values.push(expires);
          localStorage.setItem("password", values.join("||"));

          if (IsBlank(churchSite))
            churchSite = localStorage.getItem("churchsite");
          if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
            CallGoogleGA('login page', 'SaveLogin');
          }
        }
        else {
          localStorage.setItem("password", "");
          localStorage.setItem("savepw", "");
        }
      }
    }
  }
  catch(err) {
    showSpin = false;
    if (document.getElementById("showspin") !== null)
      document.getElementById("showspin").style.display = "none";

    $('#warnmsg').html('Could not save login.<br><br>'+err);
    $('#abtWarn').modal('show');
    $('#abtWarn').on('hidden.bs.modal', function (e) {
      loginAni = 'fadeInRight';
      window.location = "login.html";
    });
  }
}

// check a string is blank or not
function IsBlank(str) {
  return (!str || /^\s*$/.test(str));
}

// email validation
function IsValidEmail(str) {
  //return (str.indexOf(".") > 0) && (str.indexOf("@") > 0);
	// always return true because the church can change the username instead of using the email address.
	return true;
}

// number validation
function IsNumeric(strString) { // check for valid numeric strings
  var strValidChars = "0123456789.-",
      strChar = '',
      blnResult = true;
  if (strString.length === 0) return false; // test strString consists of valid characters listed above
  for (i = 0; i < strString.length &&  blnResult === true; i++) {
	  strChar = strString.charAt(i);
	  if (strValidChars.indexOf(strChar) === -1) {
	    blnResult = false;
	  }
  } //for
  return blnResult;
}

function ShowLogin() {
  GetCredential('DoLogIn');

	document.getElementById("pds").style.display = "block";
  document.getElementById("achurch").style.display = "none";

  document.getElementById("liAbout").style.display = "block";
  document.getElementById("liAppHelp").style.display = "block";
  document.getElementById("liHelp").style.display = "none";

  if ((document.getElementById("intromessage") !== null) && (document.getElementById("intromessage") !== undefined))
    document.getElementById("intromessage").style.display = "block";

  if ((document.getElementById("form-forgot") !== null) && (document.getElementById("form-forgot") !== undefined))
    document.getElementById("form-forgot").style.display = "none";

  if ((document.getElementById("form-signin") !== null) && (document.getElementById("form-signin") !== undefined)) {
    document.getElementById("form-signin").style.display = "block";

    if (!IsBlank(loginAni))
      document.getElementById("form-signin").setAttribute("class", "form-signin animated "+loginAni);

    $('#inputSite').val(sn);
    $('#inputEmail').val(un);
    $('#inputPassword').val(pw);

    if (sx == "Yes") {
      document.getElementById("checkbox1").checked = true;
    }
    else {
      document.getElementById("checkbox1").checked = false;
    }
  }

  if (window.sessionStorage) {
    sessionStorage.setItem("savecurrpage", "");

    sessionStorage.setItem("curclindex", "");
    sessionStorage.setItem("curcldtindex", "");
    sessionStorage.setItem("curdtstindex", "");

    sessionStorage.setItem("curcid", "");
    sessionStorage.setItem("curdid", "");
    sessionStorage.setItem("cursid", "");

    sessionStorage.setItem("loginOK", "No");
    loginOK = 'No';
    serviceOK = false;
    ppdata = '';
  }
}

function ShowHelp() {
	document.getElementById("form-signin").style.display = "none";
  document.getElementById("form-forgot").style.display = "none";
  document.getElementById("form-help").style.display = "block";
}

function BuildNav(prm) {
  if (document.getElementById('contactcurrchurch') !== null)
		document.getElementById('contactcurrchurch').innerHTML = churchName;
	if (document.getElementById('confirmcurrchurch') !== null)
		document.getElementById('confirmcurrchurch').innerHTML = churchName;
	if (document.getElementById('timeupcurrchurch') !== null)
		document.getElementById('timeupcurrchurch').innerHTML = churchName;
	if (document.getElementById('leavecurrchurch') !== null)
		document.getElementById('leavecurrchurch').innerHTML = churchName;
	if (document.getElementById('noclasscurrchurch') !== null)
		document.getElementById('noclasscurrchurch').innerHTML = churchName;
  if (document.getElementById('ajaxcurrchurch') !== null)
		document.getElementById('ajaxcurrchurch').innerHTML = churchName;

	var cp = churchPh;
	if (!IsBlank(churchPh))
	{
	  cp = churchPh.replace('(', '');
		cp = churchPh.replace(')', '');
		cp = churchPh.replace('-', '');
		cp = churchPh.replace(' ', '');
	}
  /* var chrinfo =
  '  <div class="row">'+
  '    <div class="col-sm-2">'+
  '      <span style="font-weight: normal">Address: </span>'+
  '    </div>'+    
  '    <div class="col-sm-10">'+
  '      <span style="font-weight: normal"><a target="_blank" href="https://www.google.com/maps/place/'+churchAddr+'">'+churchAddr+'</a></span>'+
  '     </div>'+
  '  </div>'+
  '  <div class="row">'+
  '    <div class="col-sm-2">'+
  '      <span style="font-weight: normal">Phone: </span>'+
  '    </div>'+    
  '    <div class="col-sm-10">'+
  '      <span style="font-weight: normal"><a href="tel:+'+cp+'" title="call '+churchPh+'">'+churchPh+'</a></span>'+
  '     </div>'+
  '  </div>'+
  '  <div class="row">'+
  '    <div class="col-sm-2">'+
  '      <span style="font-weight: normal">Email: </span>'+
  '    </div>'+    
  '    <div class="col-sm-10">'+
  '      <span style="font-weight: normal"><a href="mailto:'+churchEm+'" title="send email to '+churchEm+'">'+churchEm+'</a></span>'+
  '     </div>'+
  '  </div>'; */
    
  // old way
	var chinfo =
	'  <div class="row">'+
	'    <div class="col-md-12">'+
	'      <div class="row">'+
	'        <div class="col-md-12">'+
  '          <span style="font-weight: normal">Address: <a target="_blank" href="https://www.google.com/maps/place/'+churchAddr+'">'+churchAddr+'</a>'+
	'          </span>'+
	'        </div>'+
	'      </div>'+
	'      <div class="row">'+
	'        <div class="col-md-12"><span style="font-weight: normal">Phone: <a href="tel:+'+cp+'" title="call '+churchPh+'">'+churchPh+'</a></span></div>'+
	'      </div>'+
	'      <div class="row">'+
	'        <div class="col-md-12"><span style="font-weight: normal">Email: <a href="mailto:'+churchEm+'" title="send email to '+churchEm+'">'+churchEm+'</a></span></div>'+
	'      </div>'+
	'    </div>'+
	'  </div>';
  
	if (document.getElementById('contactcurrchurchbody') !== null)
		document.getElementById('contactcurrchurchbody').innerHTML = chinfo;

	document.getElementById("pds").style.display = "none";
	document.getElementById("achurch").style.display = "block";
  chrNmShort = NameToLong(churchName);
	document.getElementById('achurch').innerHTML = chrNmShort; //churchName;
  document.getElementById('achurch').setAttribute('title', churchName);
  if (!IsBlank(churchPage)) {
    document.getElementById('achurch').setAttribute('href', churchPage);
    document.getElementById('achurch').setAttribute('title', 'Go to '+churchPage);
    document.getElementById('achurch').setAttribute('target', '_blank');
	}

	document.getElementById("liAbout").style.display = "none";
  document.getElementById("liAppHelp").style.display = "none";
	document.getElementById("liHelp").style.display = "none";
	document.getElementById("liConfirm").style.display = "block";
  document.getElementById("liNotify").style.display = "block";
	document.getElementById("liContact").style.display = "block";
  document.getElementById('liContact').setAttribute('title', churchName+' Contact Information');
  document.getElementById("limAbout").style.display = "block";
  document.getElementById("limAppHelp").style.display = "block";

  if ((document.getElementById("liDel") !== null) && (document.getElementById("liDel") !== undefined)) {
    document.getElementById("liDel").style.display = "block";
  }

	if ((document.getElementById("maincontent") !== null) && (document.getElementById("maincontent") !== undefined)) {
    document.getElementById("maincontent").setAttribute("class", "container contentbody-info");
  }
  if ((document.getElementById("headcontent") !== null) && (document.getElementById("headcontent") !== undefined)) {
    document.getElementById("headcontent").setAttribute("class", "container contenthead-info");
  }

	var str = '';
	if (prm === 'ShowSCButtons') {
		str = '		     <div class="col-md-9 catdiv dropdown" id="catechistrow" onclick="CountForTimeOut()">Hello, '+catechistName+
          '        </div>'+
          '		     <div class="col-md-3 catdivbtn" id="scbtn" >'+
          '				     <div class="btn-group">'+
					'				       <button tabindex="-1" type="button" id="markbtn" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="ElementClick(this)">'+
          '                Mark All&nbsp;&nbsp;&nbsp<span class="caret"></span>'+
          '              </button>'+
          '				       <ul class="dropdown-menu">'+
          '				         <li><a id="mark-1" onclick="MarkAllItemClick(this)">As Present</a></li>'+
          '				         <li><a id="mark-2" onclick="MarkAllItemClick(this)">As Absent</a></li>'+
          '				         <li><a id="mark-3" onclick="MarkAllItemClick(this)">As Absent Excused</a></li>'+
          '				         <li><a id="mark-4" onclick="MarkAllItemClick(this)">As Absent Unexcused</a></li>'+
          '				         <li><a id="mark-5" onclick="MarkAllItemClick(this)">As Tardy</a></li>'+
          '				       </ul>'+
					'		         </div>'+
          '				     <button tabindex="-1" type="button" id="savebtn" class="btn btn-sm btn-primary" onclick="DoSave()" disabled>Save</button>'+
					'				     <button tabindex="-1" type="button" id="cancelbtn" class="btn btn-sm btn-primary" onclick="DoCancel(\'\')" disabled>Cancel</button>'+
					'		     </div>';
	}
	else {
		str = '		     <div class="col-md-12 catdiv" id="catechistrow" onclick="CountForTimeOut()">Hello, '+catechistName+
          '        </div>';
	}

	// for debugging - mock data - display class list
	/* var today = new Date(),
	    yyyy = today.getFullYear(),
	    currYear = yyyy;
	yyyy = today.getFullYear()+1;

	var nextYear = yyyy;
	yearPeriod = currYear+'/'+nextYear; */

	var hDiv = document.getElementById("headcontent");
	var divHeadRow = document.createElement("div");
	divHeadRow.setAttribute("class", "row");
	divHeadRow.setAttribute("id", "catrow");
	hDiv.appendChild(divHeadRow);
	document.getElementById("catrow").style.display = "block";
	document.getElementById("catrow").innerHTML =
	'<div class="col-md-12">'+
	'  <div class="row">'+
	'    <div class="col-md-12">'+
	'	     <div class="row" id="catechistdiv">'+
	'		     '+str+
	'	     </div>'+
	'	     <div class="row">'+
	'		     <div class="headinfo-header-line" ></div>'+
	'	     </div>'+
	'	   </div>'+
	'  </div>'+
	'</div>';
}

function DoSave() {
  try {
    AjaxCall('CheckLock');
  }
  catch (err) {
    //catchCode
  }
  finally {
    //finallyCode
  }
}

function DoCancel(shmg) {
  try	{
    if (window.sessionStorage) {
      currpage = sessionStorage.getItem("savecurrpage");

      curclindex = sessionStorage.getItem("curclindex");
      curcldtindex = sessionStorage.getItem("curcldtindex");
      curdtstindex = sessionStorage.getItem("curdtstindex");
    }

    if (currpage === 'StudentList') {
      dataEdited = false;
      testLock = true;
      ppdata = '';

      doslide = false;
      DisableSaveCancel('DoCancel');

      if (shmg !== 'NoMessage') {
        var msg = '  <div class="row" style="border: 0px solid black;" id="msgvalidate" z-index: 1;>'+
                  '    <div class="col-md-12">'+
                  '      <div class="alert alert-info">'+
                  '        <button type="button" class="validclose" title="Close" data-dismiss="alert">x</button>'+
                  '        <p style="text-align: center;">Changes have been cancelled.</p>'+
                  '      </div>'+
                  '    </div>'+
                  '  </div>';
        $("#msgvalidate").html(msg);
        $("#msgvalidate").show();
        $("#msgvalidate").hide().fadeIn(function showAlert() {
          $("#msgvalidate").alert();
          $("#msgvalidate").fadeTo(6000, 500).slideUp(500, function(){
            $("#msgvalidate").alert('close');
          });
        });
      }
    }

    if ((IsBlank(churchSite)) && (window.localStorage))
      churchSite = localStorage.getItem("churchsite");
    if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
      CallGoogleGA('main page', 'DoCancel');
    }
  }
  catch (err) {
    //catchCode
  }
  finally {
    showSpin = false;
    if (document.getElementById("showspin") !== null)
      document.getElementById("showspin").style.display = "none";
    doslide = true;
  }
}

window.onbeforeunload = function() {
  // working but showing abtLeave after default dialog
	//return 'some message';

	// (function () {
		// if (dataEdied === true)
			// $('#abtLeave').modal('show');
  // });

  pn = location.pathname;
  if ((pn.search('main.html') > 0) && (dataEdited === true)) {
    saveFor = 'onbeforeunload';
    saveMsg = 'NoMessage';
	  DoSave();
  }
}

function MarkAllItemClick(e) {
  EnableSaveCancel();

  var rbtnIdx = 0;
  if (e.id === 'mark-1') {
    for (var i=1; i<=stuNum; i++) {
      document.getElementById("attd"+(rbtnIdx+1)+"Opt").checked = true;
      rbtnIdx = rbtnIdx +5;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent = true;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy = false;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited = true;
    } //for
  }
  else if (e.id === 'mark-2') {
    for (var i=1; i<=stuNum; i++) {
      document.getElementById("attd"+(rbtnIdx+2)+"Opt").checked = true;
      rbtnIdx = rbtnIdx +5;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent = true;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy = false;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited = true;
    } //for
  }
  else if (e.id === 'mark-3') {
    for (var i=1; i<=stuNum; i++) {
      document.getElementById("attd"+(rbtnIdx+3)+"Opt").checked = true;
      rbtnIdx = rbtnIdx +5;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc = true;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy = false;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited = true;
    } //for
  }
  else if (e.id === 'mark-4') {
    for (var i=1; i<=stuNum; i++) {
      document.getElementById("attd"+(rbtnIdx+4)+"Opt").checked = true;
      rbtnIdx = rbtnIdx +5;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc = true;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy = false;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited = true;
    } //for
  }
  else if (e.id === 'mark-5') {
    for (var i=1; i<=stuNum; i++) {
      document.getElementById("attd"+(rbtnIdx+5)+"Opt").checked = true;
      rbtnIdx = rbtnIdx +5;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc = false;
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy = true;

      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited = true;
    } //for
  };
}

function SendNotification() {
  if (dataEdited === true) {
    saveFor = 'SendNotification';
    saveMsg = 'NoMessage';
    DoSave();
  }
  else {
    try {
      AjaxCall('SendNotification');
    }
    catch (err) {
      //catchCode
    }
    finally {
      //finallyCode
    }
  }
}

function ReasonOnBlur(el, idx) {
  setTimeout(function() {
  var foundMatch = false,
      regexp = '',
      curVal = $(el).val(),
      orgVal = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sReason;

  if ((thReasonArray != undefined) &&
      (thReasonArray != null) &&
      (thReasonArray.length > 0)) {
    curVal = curVal.charAt(0).toUpperCase() + curVal.slice(1);
    foundMatch = false;
    regexp = '/' + curVal + '/i';
    for (var i=0; i < thReasonArray.length; i++) {
      var a = thReasonArray[i];
      if (MyStrCmp(a, curVal) == 0) {
          foundMatch = true;
          break;
      }
    }

    if (((IsBlank(curVal)) && (!IsBlank(orgVal)) && (curVal !== orgVal)) ||
        ((IsBlank(curVal)) && (IsBlank(orgVal)))) {
      foundMatch = true;
    }

    if (foundMatch == false) {
      newelm = el;
      newwhat = 'reasoninput';
      newidx = idx;
      newReason = curVal;
      $(el).val(curVal);

      $('#abtMsgDlg').modal('show');
      $('#abtMsgDlg').find('#messagedialog').html('<p style="text-align: center;">'+curVal+' is not in the list.</p><p style="text-align: center;">Do you want to add it?</p>');
      $('#mdYes').click(function() {
        $('#myModal').modal('hide');
        if ((!IsBlank(newReason)) && (newelm != null) && (!IsBlank(newwhat)) && (Number(newidx) > 0)) {
          foundMatch = false;
          regexp = '/' + curVal + '/i';
          for (var i=0; i < thReasonArray.length; i++) {
            var a = thReasonArray[i];
            if (MyStrCmp(a, newReason) == 0) {
                foundMatch = true;
                break;
            }
          }
          if (foundMatch === false) {
            thReasonArray.push(newReason);
            thReasonArray.sort(sortAlphaNum);

            try {
              AjaxCall('Add1NewReason');
            }
            catch (err) {
              //catchCode
            }
            finally {
              //finallyCode
            }
          }
        }
      });
      $('#mdNo').click(function() {
        $(el).val(orgVal);
        $('#myModal').modal('hide');
      });
    }
    else {
      DataChanged(el, 'reasoninput', idx);
    }
  }
  }, 10);
}

function ElementClick(e) {
  if (testLock === true) {
    saveFor = 'ElementClick';
    saveMsg = '';
    DoSave();
  }
}

function InputOnClick(el, ei) {
  if (testLock === true) {
    newelm = el;
    newwhat = '';
    newidx = ei;
    newReason = '';

    saveFor = 'InputOnClick';
    saveMsg = '';
    DoSave();
  }
  else {
    document.getElementById(ei).focus();
  }
}

function DataChanged(elm, what, idx) {
  if (testLock === true) {
    newelm = elm;
    newwhat = what;
    newidx = idx;
    newReason = '';

    saveFor = 'DataChanged';
    saveMsg = 'DataChanged';
    DoSave();
  }
  else {
    if (idx > 0) {
      var didchange = false;

      if (what === 'radiopresent') {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sPresent = true;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbsent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbUnExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sTardy = false;

        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        didchange = true;
      }
      else if (what === 'radioabsent') {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sPresent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbsent = true;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbUnExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sTardy = false;

        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        didchange = true;
      }
      else if (what === 'radioabexc') {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sPresent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbsent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbExc = true;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbUnExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sTardy = false;

        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        didchange = true;
      }
      else if (what === 'radioabunexc') {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sPresent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbsent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbUnExc = true;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sTardy = false;

        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        didchange = true;
      }
      else if (what === 'radiotardy') {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sPresent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbsent = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sAbUnExc = false;
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sTardy = true;

        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        didchange = true;
      }
      else if (what === 'reasoninput') {
        var cmp1 = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sReason,
            cmp2 = $(elm).val();
        cmp1.trim();
        cmp2.trim();
        if (MyStrCmp(String(cmp1), String(cmp2)) !== 0) {
          didchange = true;
          clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sReason = $(elm).val();
          clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        }
      }
      else if (what === 'txtarea') {
        var cmp1 = encodeURIComponent(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sNote),
            cmp2 = encodeURIComponent($(elm).val());
        cmp1.trim();
        cmp2.trim();
        if (MyStrCmp(String(cmp1), String(cmp2)) !== 0) {
          didchange = true;
          clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sNote = $(elm).val();
          clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[idx-1].sEdited = true;
        }
      }

      //if (didchange)
        EnableSaveCancel();
    }
  }
}

function DisplayRespData(cmd) {
  var respStr = serviceResp,
      eachLine = '',
      lenLine = 0,
      sp = 0,
      ep = 0,
      c = 0,
      tmp = '',
      each = '';
  
  if (cmd === 'SendNotification') {
    if (serviceOK === true) {
      showSpin = false;
      if (document.getElementById("showspin") !== null)
        document.getElementById("showspin").style.display = "none";

      var msg = '  <div class="row" style="border: 0px solid black;" id="msgvalidate" z-index: 1;>'+
                '    <div class="col-md-12">'+
                '      <div class="alert alert-success">'+
                '        <button type="button" class="validclose" title="Close" data-dismiss="alert">x</button>'+
                '        <p style="text-align: center;">Notification was sent successfully.</p>'+
                '      </div>'+
                '    </div>'+
                '  </div>';
      $("#msgvalidate").html(msg);
      $("#msgvalidate").show();
      $("#msgvalidate").hide().fadeIn(function showAlert() {
          $("#msgvalidate").alert();
          $("#msgvalidate").fadeTo(6000, 500).slideUp(500, function(){
         $("#msgvalidate").alert('close');
          });
      });
    }
  }
  else if (cmd === 'CheckLock') {
    if ((serviceOK === true) && (loginOK === 'Yes')) {
      if ((testLock === true) &&
          ((saveFor === 'DataChanged') ||
           (saveFor === 'InputOnClick') ||
           (saveFor === 'ElementClick'))) {
        testLock = false;
        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        if (saveFor === 'DataChanged') {
          DataChanged(newelm, newwhat, newidx);
        }
        else if (saveFor === 'InputOnClick') {
          InputOnClick(newelm, newidx);
        }
      }
      else {
        if ((Number(curclindex) > 0) && (Number(curcldtindex) > 0)) {
          ppdata = '';
          for (var i=1; i<=stuNum; i++) {
            if ((clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1] !== null) &&
                (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1] !== undefined) &&
                (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sEdited)) {
              clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].dateStDLoaded = false;
              //Attendance=<%AttendanceId%>||<%MemberId%>||<%ClassId%>||<%Date%>||<%ReasonId%><%AttendanceTypeId%>||<%Notes%>||<%ClassDateId%>~~
              var attnId = '0', // = 0 for new
                  memId = '',
                  clId = '',
                  dt = '',
                  reId = '',
                  reaTypeId = '0',
                  snt = '',
                  dateId = '',
                  nxr = '~~';

              if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAttendanceId > 0)
                attnId = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAttendanceId;
              if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].stuRec > 0)
                memId = String(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].stuRec);
              if (!IsBlank(clLtArray[Number(curclindex)-1].clId))
                clId = clLtArray[Number(curclindex)-1].clId;
              if (!IsBlank(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date))
                dt = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date;
              if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sReasonRec > 0)
                reId = String(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sReasonRec);
              if (!IsBlank(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sNote))
                snt = encodeURIComponent(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sNote);
              if (!IsBlank(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].dateId))
                dateId = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].dateId;

              // encode one more time
              if (!IsBlank(snt))
                snt = encodeURIComponent(snt);

              var ckre = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sReason;
              for (var j=0; j< reasonArray.length; j++) {
                var a = reasonArray[j].reasonDesc;
                if (MyStrCmp(String(a), String(ckre)) == 0) {
                    reId = reasonArray[j].reasonId;
                    break;
                }
              } //for

              var fdt = '',
                  find = "/",
                  reg = new RegExp(find, 'g');
              fdt = dt.replace(reg, "-");

              if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sPresent === true)
                reaTypeId = '0'
              else if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbsent === true)
                reaTypeId = '1'
              else if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbExc === true)
                reaTypeId = '2'
              else if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sAbUnExc === true)
                reaTypeId = '3'
              else if (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray[i-1].sTardy === true)
                reaTypeId = '4';

              var val = attnId.toString() + '||' +
                        memId.toString()  + '||' +
                        clId.toString()  + '||' +
                        fdt.toString()  + '||' +
                        reId.toString()  + '||' +
                        reaTypeId.toString()  + '||' +
                        snt.toString()  + '||' +
                        dateId.toString()  +
                        nxr.toString();

              if (ppdata.search(val) <= 0)
                ppdata = ppdata + val;
            }
          } //for

          if (!IsBlank(ppdata)) {
            try {
              AjaxCall('DoSave');
            }
            catch (err) {
              //catchCode
            }
            finally {
              //finallyCode
            }
          }
          else if (saveFor === 'ShowClassDate') {
            dataEdited = false;
            ShowClassDate(saveMsg);
          }
          else {
            testLock = false;
            showSpin = false;
            if (document.getElementById("showspin") !== null)
              document.getElementById("showspin").style.display = "none";
          }
        }
      }
    }
  }
  else if (cmd === 'DoSave') {
    if ((serviceOK === true) && (loginOK === 'Yes')) {
      doslide = false;
      DisableSaveCancel('DoSave');

      if ((IsBlank(churchSite)) && (window.localStorage))
        churchSite = localStorage.getItem("churchsite");
      if ((!IsBlank(churchSite)) && (!IsBlank(churchName))) {
        CallGoogleGA('main page', 'DoSave'+' '+saveFor);
      }

      ppdata = '';
      if (dataEdited === true)
        dataEdited = false;

      if (saveFor === 'ShowTimeOut') {
        ShowTimeOut();
      }
      else if ((saveFor === 'DocResize') ||
               (saveFor === 'DataChanged') ||
               (saveFor === 'InputOnClick') ||
               (saveFor === 'ElementClick') ||
               (saveFor === 'ShowStudentList')) {
        try {
          AjaxCall('GetStudentList');
        }
        catch (err) {
          //catchCode - Block of code to handle errors
        }
        finally {
          //finallyCode - Block of code to be executed regardless of the try / catch result
        }
      }
      else if (saveFor === 'ShowClassDate') {
        ShowClassDate(saveMsg);
        saveFor = '';
      }
      else if (saveFor === 'SendNotification') {
        try {
          AjaxCall('SendNotification');
        }
        catch (err) {
          //catchCode
        }
        finally {
          //finallyCode
        }
      }
      else if (saveMsg !== 'NoMessage') {
        if (window.sessionStorage) {
          curclindex = sessionStorage.getItem("curclindex");
          curcldtindex = sessionStorage.getItem("curcldtindex");
          curdtstindex = sessionStorage.getItem("curdtstindex");
        }

        stArrayOrg = [];
        stArrayOrg.length = 0;
        stArrayOrg = JSON.parse(JSON.stringify(clLtArray[curclindex-1].dtArray[curcldtindex-1].stArray));

        thReasonArrayOrg = [];
        thReasonArrayOrg.length = 0;
        thReasonArrayOrg = JSON.parse(JSON.stringify(thReasonArray)); // OR reasonArrayOrg = reasonArray.slice(0);

        doslide = true;
        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        var msg = '  <div class="row" style="border: 0px solid black;" id="msgvalidate" z-index: 1;>'+
                  '    <div class="col-md-12">'+
                  '      <div class="alert alert-success">'+
                  '        <button type="button" class="validclose" title="Close" data-dismiss="alert" >x</button>'+
                  '        <p style="text-align: center;">Changes have been saved.</p>'+
                  '      </div>'+
                  '    </div>'+
                  '  </div>';
        $("#msgvalidate").html(msg);
        $("#msgvalidate").show();
        $("#msgvalidate").hide().fadeIn(function showAlert() {
            $("#msgvalidate").alert();
            $("#msgvalidate").fadeTo(6000, 500).slideUp(500, function(){
           $("#msgvalidate").alert('close');
            });
        });
      }
      else {
        doslide = true;
        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";
      }
    }
  }
  else if (cmd === 'DoLogIn') {
    if (serviceOK === true) {
      if (window.localStorage) {
        sessionStorage.setItem("loginOK", 'Yes');
      }

      window.location = "main.html";
    }
    else {
      if (window.localStorage) {
        sessionStorage.setItem("loginOK", 'No');
      }
    }
  }
  else if (cmd === 'MainLogIn') {
    if ((serviceOK === true) && (loginOK === 'Yes')) {
      try {
        AjaxCall('GetChurchInfo');
      }
      catch (err) {
        //catchCode
      }
      finally {
        //finallyCode
      }
    }
  }
  else if (cmd === 'GetChurchInfo') {
    // 11 fields
    // SiteName~|~ProductName~|~AccountName~|~Email~|~Phone~|~Address1~|~Address2~|~City~|~State~|~PostalCode~|~Country
    //SiteContactInfo: 1
    //Support Site Administration Group~|~~|~Support Site Administration Group~|~training@acstechnologies.com~|~8436181167~|~180 Dunbarton Dr~|~~|~Florence~|~SC~|~29501-1991~|~US

    eachLine = respStr.split('\n');
    for (var i = 0, L = eachLine.length; i < L; i++) {
      //console.log(eachLine[i]);
      var objCH = {};
      objCH.chName = '';
      objCH.chAddr = '';
      objCH.chAddr1 = '';
      objCH.chCity = '';
      objCH.chState = '';
      objCH.chZIP = '';
      objCH.chPhone = '';
      objCH.chEmail = '';

      c = 0;
      tmp = eachLine[i];
      lenLine = tmp.length;
      if (tmp.indexOf('~|~') > 0) {
        while (c <= 11) { // 11 fields
          c++;
          sp = 0;
          ep = tmp.indexOf('~|~');
          each = tmp.substr(sp, ep-sp);

          if (ep > 0) {
            each = each.replace('~|~', '');
          }
          else if ((!IsBlank(tmp)) && (tmp.indexOf('~|~') < 0)) {
            each = tmp;
          }

          if ((!IsBlank(each)) && (each !== 'NULL')) {
            if ((c === 1) && (IsBlank(objCH.chName)))
              objCH.chName = each;
            if ((c === 4) && (IsBlank(objCH.chEmail)))
              objCH.chEmail = each;
            if ((c === 5) && (IsBlank(objCH.chPhone)))
              objCH.chPhone = each;
            if ((c === 6) && (IsBlank(objCH.chAddr)))
              objCH.chAddr = each;
            if ((c === 7) && (IsBlank(objCH.chAddr1)))
              objCH.chAddr1 = each;
            if ((c === 8) && (IsBlank(objCH.chCity)))
              objCH.chCity = each;
            if ((c === 9) && (IsBlank(objCH.chState)))
              objCH.chState = each;
            if ((c === 10) && (IsBlank(objCH.chZIP)))
              objCH.chZIP = each;
          }

          if (ep >= 0) {
            tmp = tmp.substr(ep+3, lenLine);
          }
          else if (tmp.indexOf('~|~') < 0) {
            tmp = '';
          }
        }
      }

      if (!IsBlank(objCH.chName)) {
        var fph = '',
        chrAddr = '',
        areacode = '',
        prefix = '',
        numb = '';

        //(123) 456-7890
        fph = objCH.chPhone;
        if (!IsBlank(fph)) {
          areacode = fph.slice(0, 3);
          prefix = fph.slice(3, 6);
          numb = fph.slice(6, 10);
          fph = '('+areacode+') '+prefix+'-'+numb;
        }

        chrAddr = '';
        if (!IsBlank(objCH.chAddr))
          chrAddr = chrAddr + objCH.chAddr;
        if (!IsBlank(objCH.chAddr1))
          chrAddr = chrAddr + ' ' + objCH.chAddr1;
        if (!IsBlank(objCH.chCity)) {
          if (!IsBlank(chrAddr))
            chrAddr = chrAddr + ', ' + objCH.chCity
          else
            chrAddr = objCH.chCity;
        }
        if (!IsBlank(objCH.chState)) {
          if (!IsBlank(chrAddr))
            chrAddr = chrAddr + ', ' + objCH.chState
          else
            chrAddr = objCH.chState;
        }
        if (!IsBlank(objCH.chZIP)) {
          if (!IsBlank(chrAddr))
            chrAddr = chrAddr + ' ' + objCH.chZIP
          else
            chrAddr = objCH.chZIP;
        }

        //churchName = 'St. Joseph Parish II abcdefghijklmnopqrstuvwxwz0123456789 and it is so long we need to test it';
        if ((!IsBlank(sn)) && (churchSite !== sn))
          churchSite = sn;
        churchName = objCH.chName;
        churchPage = ''; //'http://www.stjosephparish.org';
        churchAddr = chrAddr;
        churchPh = fph;
        churchEm = objCH.chEmail;
      }
    }

    try {
      AjaxCall('GetClassList');
    }
    catch (err) {
      //catchCode
    }
    finally {
      //finallyCode
    }
  }
  else if (cmd === 'GetClassList') {
    clsNum = 0;

    clLtArray = [];
    clLtArray.length = 0;

    // there are 5 fields each row
    // RosterId~|~ClassName~|~YearName~|~ClassId~|~Teacher
    // TeacherRoster: 3
    // 5082~|~4th Grade Formation~|~2013/2014~|~47931~|~Mrs. Baxter
    // 5083~|~Bible Study~|~2013/2014~|~48132~|~Mrs. Baxter
    // 5084~|~High School Formation - Wednesday~|~2013/2014~|~48069~|~Mrs. Baxter

    eachLine = respStr.split('\n');
    for (var i = 0, L = eachLine.length; i < L; i++) {
      var objCL = {};
      objCL.clOrderNum = 0;
      objCL.clDtDloaded = true,
      objCL.teaRosterId = '';
      objCL.clName = '';
      objCL.clYear = '';
      objCL.clId = '';
      objCL.teaName = '';
      objCL.dtArray = [];

      objCL.clOrderNum = Number(i+1);
      c = 0;
      tmp = eachLine[i];
      lenLine = tmp.length;
      if (tmp.indexOf('~|~') > 0) {
        while (c <= 5) { // 5 fields
          c++;
          sp = 0;
          ep = tmp.indexOf('~|~');
          each = tmp.substr(sp, ep-sp);

          if (ep > 0) {
            each = each.replace('~|~', '');
          }
          else if ((!IsBlank(tmp)) && (tmp.indexOf('~|~') < 0)) {
            each = tmp;
          }

          if ((!IsBlank(each)) && (each !== 'NULL')) {
            if ((c === 1) && (IsBlank(objCL.teaRosterId)))
              objCL.teaRosterId = each;
            if ((c === 2) && (IsBlank(objCL.clName)))
              objCL.clName = each;
            if ((c === 3) && (IsBlank(objCL.clYear))) {
              objCL.clYear = each;
              yearPeriod = each;
            }
            if ((c === 4) && (IsBlank(objCL.clId)))
              objCL.clId = each;
            if ((c === 5) && (IsBlank(objCL.teaName)))
              objCL.teaName = each;
          }

          if (ep >= 0) {
            tmp = tmp.substr(ep+3, lenLine);
          }
          else if (tmp.indexOf('~|~') < 0) {
            tmp = '';
          }
        }
      }

      if ((!IsBlank(objCL.teaRosterId)) &&
          (!IsBlank(objCL.clName)) &&
          (!IsBlank(objCL.clId)))
        clLtArray.push(objCL);
    }

    // for debugging
    //LoadMockClassList();

    var eleCount = 0;
    for (e in clLtArray) {
      if (clLtArray.hasOwnProperty(e))
        eleCount++;
    } //for
    clsNum = eleCount;

    if ((serviceOK === true) && (loginOK === 'Yes')) {
      if (window.localStorage)
      {
        currpage = sessionStorage.getItem("savecurrpage");

        curclindex = sessionStorage.getItem("curclindex");
        curcldtindex = sessionStorage.getItem("curcldtindex");
        curdtstindex = sessionStorage.getItem("curdtstindex");

        curcid = sessionStorage.getItem("curcid");
        curdid = sessionStorage.getItem("curdid");
        cursid = sessionStorage.getItem("cursid");
      }

      if (((currpage === 'ClassDate') && (Number(curcid) > 0) && (Number(curclindex) > 0)) ||
          (currpage === 'StudentList')) {
        try {
          AjaxCall('GetClassDate');
        }
        catch (err) {
          //catchCode - Block of code to handle errors
        }
        finally {
          //finallyCode - Block of code to be executed regardless of the try / catch result
        }
      }
      else {
        clLtDLoaded = true;
        ShowClassList('SlideLeft');
      }
    }
  }
  else if (cmd === 'GetClassDate') {
    if (window.sessionStorage) {
      curclindex = sessionStorage.getItem("curclindex");
    }

    dteNum = 0;
    clLtArray[Number(curclindex)-1].dtArray = [];
    clLtArray[Number(curclindex)-1].dtArray.length = 0;

    // there are 4 fields each row
    // ClassDate~|~ClassDateId~|~Note~|~DateModified
    /* ClassDates: 35
    4/15/2014~|~1090128~|~~|~
    4/22/2014~|~1090129~|~~|~
    4/29/2014~|~1090130~|~~|~
    5/6/2014~|~1090131~|~~|~
    5/13/2014~|~1090132~|~~|~
    5/20/2014~|~1090133~|~~|~
    5/27/2014~|~1090134~|~~|~
    10/1/2014~|~1090100~|~~|~
    10/8/2014~|~1090101~|~~|~ */

    var dd = '',
        mm = '',
        yyyy = '',
        dtstr = '';

    eachLine = respStr.split('\n');
    for (var i = 0, L = eachLine.length; i < L; i++) {
      var objDT = {};
      objDT.dateStDLoaded = true;
      objDT.date = '';
      objDT.dateId = '';
      objDT.note = '';
      objDT.stat = '';
      objDT.stArray = [];

      //objCL.clOrderNum = Number(i+1);
      c = 0;
      tmp = eachLine[i];
      lenLine = tmp.length;
      if (tmp.indexOf('~|~') > 0) {
        while (c <= 4) { // 3 fields
          c++;
          sp = 0;
          ep = tmp.indexOf('~|~');
          each = tmp.substr(sp, ep-sp);

          if (ep > 0) {
            each = each.replace('~|~', '');
          }
          else if ((!IsBlank(tmp)) && (tmp.indexOf('~|~') < 0)) {
            each = tmp;
          }

          if ((!IsBlank(each)) && (each !== 'NULL')) {
            if ((c === 1) && (IsBlank(objDT.date))) {              
              dtstr = each;
              dtstr = dtstr.replace(/\r/g, ""); // for IE
              objDT.date = dtstr;
            }  
            if ((c === 2) && (IsBlank(objDT.dateId)))
              objDT.dateId = each;
            if ((c === 3) && (IsBlank(objDT.note)))
              objDT.note = each;
            if ((c === 4) && (IsBlank(objDT.stat))) {
              dtstr = each;
              dtstr = dtstr.replace(/\r/g, "");  // for IE
              objDT.stat = dtstr;
            }
          }

          if (ep >= 0) {
            tmp = tmp.substr(ep+3, lenLine);
          }
          else if (tmp.indexOf('~|~') < 0) {
            tmp = '';
          }
        }
      }
      
      if ((objDT.date !== "") &&
          (objDT.dateId !== "")) {
        //10/16/2016
        //2016-10-05 00:00:00.0000000
        var tmpd = moment(objDT.date);
        objDT.date = tmpd.format('L');
        
        if (!IsBlank(objDT.stat)) {
          //2017-02-14 21:25:34.0900000
          //2/15/2017 1:41:20 PM          
          var tmps = moment(objDT.stat);
          dtstr = tmps.format('L') + ' ' + tmps.format('LT');          
          var dte = ConvertUTCDateToLocalDate(new Date(dtstr));
          dtstr = dte.toLocaleString(); // convert to current time zone          
          tmps = moment(dte);        
          dtstr = tmps.format('L') + ' '+ tmps.format('LT');          
          objDT.stat = dtstr;
        }
        
        clLtArray[Number(curclindex)-1].dtArray.push(objDT);
      }
    }

    // for debugging
    //LoadMockClassDate();

    var eleCount = 0;
    for (e in clLtArray[Number(curclindex)-1].dtArray) {
      if (clLtArray[Number(curclindex)-1].dtArray.hasOwnProperty(e))
        eleCount++;
    } //for
    dteNum = eleCount; //dteNum = 10;

    if ((serviceOK === true) && (loginOK === 'Yes')) {
      if (window.sessionStorage)
      {
        currpage = sessionStorage.getItem("savecurrpage");

        curclindex = sessionStorage.getItem("curclindex");
        curcldtindex = sessionStorage.getItem("curcldtindex");
        curdtstindex = sessionStorage.getItem("curdtstindex");

        curcid = sessionStorage.getItem("curcid");
        curdid = sessionStorage.getItem("curdid");
        cursid = sessionStorage.getItem("cursid");
      }

      if ((currpage === 'StudentList') &&
          (Number(curdid) > 0) &&
          (Number(curcldtindex) > 0) &&
          (Number(curcid) > 0) &&
          (Number(curclindex) > 0)) {
        try {
          AjaxCall('GetReasonType');
        }
        catch (err) {
          //catchCode
        }
        finally {
          //finallyCode
        }
      }
      else {
        if (slideStr === 'FromStudent') {
          slideStr = '';
          ShowClassDate('SlideRight');
        }
        else
          ShowClassDate('SlideLeft');
      }
    }
  }
  else if (cmd === 'GetStudentList') {
    if (window.sessionStorage) {
      curcid = sessionStorage.getItem("curcid");
      curclindex = sessionStorage.getItem("curclindex");

      curdid = sessionStorage.getItem("curdid");
      curcldtindex = sessionStorage.getItem("curcldtindex");
    }

    stuNum = 0;
    if ((clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1] !== null) &&
        (clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1] != undefined)) {
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray = [];
      clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray.length = 0;
    }

    // there are 6 fields each row
    //AttendanceId~|~MemberId~|~Student~|~AttendanceTypeId~|~ReasonId~|~Notes
    /* ClassStudentRoster: 6
    36108~|~Bakers,Brad{J.},Mr.~|~0~|~48732~|~
    36116~|~Bourbeau,Jasmine(Jazzy),Miss~|~~|~~|~
    36125~|~Cole,Laura{K.},Miss~|~~|~~|~
    36134~|~Earp,Siobhan{M.},Mr.~|~~|~~|~
    36142~|~Galindo,Melissa{J.},Miss~|~~|~~|~
    36163~|~Jones,Elizabeth(Liz){Suzanne}~|~~|~~|~
    36179~|~Lynch,Ivy{L.}~|~~|~~|~
    36180~|~Marquis,Gabriella(Gabe)~|~~|~~|~
    36186~|~McCain,Timothy{L.}(Tim)~|~~|~~|~
    36191~|~Montgomery,Caitlyn{Margaret}(Caytie),Miss~|~~|~~|~
    36194~|~Necerro,David{R.}~|~~|~~|~
    36228~|~Schmid,Megan{S}~|~~|~~|~
    36259~|~West,Denise{C.}~|~~|~~|~
    36261~|~Williams,Chad{Leo}~|~~|~~|~ */

    eachLine = respStr.split('\n');
    for (var i = 0, j = 0, L = eachLine.length; i < L; i++) {
      var objST = {};
      objST.clRec = Number(curcid);
      objST.clName = clLtArray[Number(curclindex)-1].clName;
      objST.clDateRec = Number(curdid);
      objST.clDate = clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].date;
      objST.clStuNum = 0;
      objST.stOrderNum = 0;
      objST.stuRec = 0;
      objST.stuName = '';
      objST.sAttendanceId = 0;
      objST.sPresent = false;
      objST.sAbsent = false;
      objST.sTardy = false;
      objST.sAbExc = false;
      objST.sAbUnExc = false;
      objST.sAttnType = '';
      objST.sReasonRec = 0;
      objST.sReason = '';
      objST.sNote = '',
      objST.sEdited = false;

      c = 0;
      tmp = eachLine[i];
      lenLine = tmp.length;
      if (tmp.indexOf('~|~') > 0) {
        while (c <= 6) { // 6 fields
          c++;
          objST.stOrderNum = c;

          sp = 0;
          ep = tmp.indexOf('~|~');
          each = tmp.substr(sp, ep-sp);

          if (ep > 0) {
            each = each.replace('~|~', '');
          }
          else if ((!IsBlank(tmp)) && (tmp.indexOf('~|~') < 0)) {
            each = tmp;
          }

          if ((!IsBlank(each)) && (each !== 'NULL')) {
            if ((c === 1) && (Number(objST.sAttendanceId) === 0))
              objST.sAttendanceId = Number(each);
            if ((c === 2) && (Number(objST.stuRec) === 0))
              objST.stuRec = Number(each);
            if ((c === 3) && (IsBlank(objST.stuName)))
              objST.stuName = each;
            if ((c === 4) && (IsBlank(objST.sAttnType))) {
              objST.sAttnType = each;
              if (each === '0')
                objST.sPresent = true
              else if (each === '1')
                objST.sAbsent = true
              else if (each === '2')
                objST.sAbExc = true
              else if (each === '3')
                objST.sAbUnExc = true
              else if (each === '4')
                objST.sTardy = true;
            }
            if ((c === 5) && (IsBlank(objST.sReason))) {
              for (var r=0; r < Number(reasonArray.length); r++) {
                var rid = reasonArray[r].reasonId;
                if (rid == each) {
                    objST.sReason = reasonArray[r].reasonDesc;
                    break;
                }
              } //for
            }
            if ((c === 6) && (IsBlank(objST.sNote))) {
              var dcostr = decodeURIComponent(each);
              objST.sNote = dcostr.trim();
            }
          }

          if (ep >= 0) {
            tmp = tmp.substr(ep+3, lenLine);
          }
          else if (tmp.indexOf('~|~') < 0) {
            tmp = '';
          }
        }
      }

      if ((!IsBlank(objST.stuName)) &&
          (Number(objST.stuRec) > 0) &&
		  (!ElementExists(clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray, objST))) {
        clLtArray[Number(curclindex)-1].dtArray[Number(curcldtindex)-1].stArray.push(objST);
      }
    }

    // for debugging
    //LoadMockStudentList();

    var eleCount = 0;
    for (e in clLtArray[curclindex-1].dtArray[curcldtindex-1].stArray) {
      if (clLtArray[curclindex-1].dtArray[curcldtindex-1].stArray.hasOwnProperty(e))
        eleCount++;
    } //for
    stuNum = eleCount;

    if ((serviceOK == true) && (String(loginOK) === 'Yes')) {
      ShowStudentList('SlideLeft');

      if ((saveFor === 'DataChanged') ||
          (saveFor === 'InputOnClick') ||
          (saveFor === 'ElementClick')) {
        saveFor = '';

        if (window.sessionStorage) {
          curclindex = sessionStorage.getItem("curclindex");
          curcldtindex = sessionStorage.getItem("curcldtindex");
          curdtstindex = sessionStorage.getItem("curdtstindex");
        }

        stArrayOrg = [];
        stArrayOrg.length = 0;
        stArrayOrg = JSON.parse(JSON.stringify(clLtArray[curclindex-1].dtArray[curcldtindex-1].stArray));

        thReasonArrayOrg = [];
        thReasonArrayOrg.length = 0;
        thReasonArrayOrg = JSON.parse(JSON.stringify(thReasonArray)); // OR reasonArrayOrg = reasonArray.slice(0);

        doslide = true;
        showSpin = false;
        if (document.getElementById("showspin") !== null)
          document.getElementById("showspin").style.display = "none";

        // no need to show this, maybe???
        // var msg = '  <div class="row" style="border: 0px solid black;" id="msgvalidate" z-index: 1;>'+
                  // '    <div class="col-md-12">'+
                  // '      <div class="alert alert-success">'+
                  // '        <button type="button" class="validclose" title="Close" data-dismiss="alert" >x</button>'+
                  // '        <p style="text-align: center;">Changes have been saved.</p>'+
                  // '      </div>'+
                  // '    </div>'+
                  // '  </div>';
        // $("#msgvalidate").html(msg);
        // $("#msgvalidate").show();
        // $("#msgvalidate").hide().fadeIn(function showAlert() {
            // $("#msgvalidate").alert();
            // $("#msgvalidate").fadeTo(6000, 500).slideUp(500, function(){
           // $("#msgvalidate").alert('close');
            // });
        // });
      }
    }
  }
  else if (cmd === 'GetReasonType') {
    reaNum = 0;
    reasonArray = [];
    reasonArray.length = 0;

    thReasonArray = [];
    thReasonArray.length = 0;

    // there are 2 fields each row
    //ReasonId~|~Description
    /* ReasonTypes: 11
    48251~|~Sick
    48324~|~Out of Town
    48379~|~Flu
    48539~|~Funeral
    48559~|~Unexcused
    48561~|~Family Business
    48732~|~Excused
    48778~|~Very Tardy
    49302~|~Late Registration
    49440~|~Car Accident
    49442~|~Hospitalized */

    eachLine = respStr.split('\n');
    for (var i = 0, L = eachLine.length; i < L; i++) {
      var objRE = {};
      objRE.reasonId  = '';
      objRE.reasonDesc = '';

      //objCL.clOrderNum = Number(i+1);
      c = 0;
      tmp = eachLine[i];
      lenLine = tmp.length;
      if (tmp.indexOf('~|~') > 0) {
        while (c <= 2) { // 2 fields
          c++;
          sp = 0;
          ep = tmp.indexOf('~|~');
          each = tmp.substr(sp, ep-sp);

          if (ep > 0) {
            each = each.replace('~|~', '');
          }
          else if ((!IsBlank(tmp)) && (tmp.indexOf('~|~') < 0)) {
            each = tmp;
          }

          if ((!IsBlank(each)) && (each !== 'NULL')) {
            if ((c === 1) && (IsBlank(objRE.reasonId)))
              objRE.reasonId = each;
            if ((c === 2) && (IsBlank(objRE.reasonDesc))) {
              objRE.reasonDesc = each;
              thReasonArray.push(each);
            }
          }

          if (ep >= 0) {
            tmp = tmp.substr(ep+3, lenLine);
          }
          else if (tmp.indexOf('~|~') < 0) {
            tmp = '';
          }
        }
      }

      if ((!IsBlank(objRE.reasonId)) &&
          (!IsBlank(objRE.reasonDesc))) {
          reasonArray.push(objRE);
      }
    }    
    
    // for debugging - mock data
    /* thReasonArray.push("Family Matter");
    thReasonArray.push("Out of Town");
    thReasonArray.push("Sick");
    thReasonArray.push("Tardy");
    thReasonArray.push("Doctor Appointment");
    thReasonArray.push("Dentist");
    thReasonArray.push("Vacation"); */

    var eleCount = 0;
    for (e in reasonArray) {
      if (reasonArray.hasOwnProperty(e))
        eleCount++;
    } //for
    reaNum = eleCount;

    thReasonArray.sort(sortAlphaNum);

    thReasonArrayOrg = [];
    thReasonArrayOrg.length = 0;
    thReasonArrayOrg = JSON.parse(JSON.stringify(thReasonArray)); // OR reasonArrayOrg = reasonArray.slice(0);

    if ((serviceOK === true) && (String(loginOK) === 'Yes')) {
      //reasonLoaded = true; --> to always load student list to update the latest data.

      try {
        AjaxCall('GetStudentList');
      }
      catch (err) {
        //catchCode - Block of code to handle errors
      }
      finally {
        //finallyCode - Block of code to be executed regardless of the try / catch result
      }
    }
  }
  else if (String(cmd) === 'Add1NewReason') {
    // there are 2 fields each row
    /*ReasonId=1049443 */

    var each = '';
    eachLine = respStr.split('\n');
    for (var i = 0, L = Number(eachLine.length); i < L; i++) {
      var objRE = {};
      objRE.reasonId  = '';
      objRE.reasonDesc = newReason;

      each = eachLine[i];
      var keyValuePair = each.split('=');
      objRE.reasonId = keyValuePair[1];

      if ((!IsBlank(objRE.reasonId)) &&
          (!IsBlank(objRE.reasonDesc))) {
          reasonArray.push(objRE);
      }
    } //for

    var eleCount = 0;
    for (e in reasonArray) {
      if (reasonArray.hasOwnProperty(e))
        eleCount++;
    } //for
    reaNum = eleCount;

    thReasonArray.sort(sortAlphaNum);

    thReasonArrayOrg = [];
    thReasonArrayOrg.length = 0;
    thReasonArrayOrg = JSON.parse(JSON.stringify(thReasonArray));

    if ((serviceOK === true) && (String(loginOK) === 'Yes')) {
      showSpin = false;
      if (document.getElementById("showspin") !== null)
        document.getElementById("showspin").style.display = "none";

      newReason = '';
      DataChanged(newelm, newwhat, newidx);
    }
  }
}

function MyStrCmp(x, y) {
    x = x.toString();
    x = x.trim();

    y = y.toString();
    y = y.trim();

    for (var i=0, n=Math.max(x.length, y.length); i<n && x.charAt(i) === y.charAt(i); ++i);

    if (i === n) {
      return 0;
    }
    else {
      return x.charAt(i) > y.charAt(i) ? -1 : 1;
    }
}

function ConvertUTCDateToLocalDate(date) {
  var newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return newDate;
}

function StartTimer() {
  // for debugging
  //var duration = 60 * 1;

  var sto = '',
      minutes = 0,
      seconds = 0,
      duration = 60 * idleMax,
      timer = duration;

  clearInterval(interval);

  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    sto = ' Timeout countdown: ' + minutes + ":" + seconds;

    if (--timer < 0) {
      sto = 'Time Out';
      if ((document.getElementById("showprogress") !== null) && (document.getElementById("showprogress") !== undefined)) {
        document.getElementById("showprogress").style.display = "none";
      }
      ShowTimeOut();
    }
    else {
      if ((document.getElementById("showprogress") !== null) && (document.getElementById("showprogress") !== undefined)) {
        document.getElementById("showprogress").innerHTML = sto;
      }
    }
  }, 1000);
}

function CountForTimeOut() {
  tout++;
  if (tout > 2) { // =2 for 3 clicks
    tout = 0;
    StartTimer();
    if (document.getElementById("showprogress").style.display === "none") {
      document.getElementById("showprogress").style.display = "block";
    }
    else if (document.getElementById("showprogress").style.display === "block") {
      document.getElementById("showprogress").style.display = "none";
    }
  }
}

function sortAlphaNum(a,b) {
  var reA = /[^a-zA-Z]/g;
  var reN = /[^0-9]/g;
  var AInt = parseInt(a, 10);
  var BInt = parseInt(b, 10);

  if(isNaN(AInt) && isNaN(BInt)){
      var aA = a.replace(reA, "");
      var bA = b.replace(reA, "");
      if (aA === bA) {
          var aN = parseInt(a.replace(reN, ""), 10);
          var bN = parseInt(b.replace(reN, ""), 10);
          return aN === bN ? 0 : aN > bN ? 1 : -1;
      }
      else {
          return aA > bA ? 1 : -1;
      }
  }
  else if (isNaN(AInt)) {//A is not an Int
      return 1;//to make alphanumeric sort first return -1 here
  }
  else if (isNaN(BInt)) {//B is not an Int
      return -1;//to make alphanumeric sort first return 1 here
  }
  else {
      return AInt > BInt ? 1 : -1;
  }
}

function ElementExists(arr, cboCL) {
  return arr.some(function(el) {
	return el.cboC == cboCL;
  });
}

$('body').on('keydown', 'input, select', function(e) {
  var self = $(this),
    form = self.parents('form:eq(0)'),
    focusable,
    next;
  if ((e.keyCode === 13) || (e.keyCode === 40)) {
    focusable = form.find('input, a, select, button').filter(':visible');
    next = focusable.eq(focusable.index(this)+1);
    if (next.length) {
      next.focus();
    } else {
      form.submit();
    }
    return false;
  }
});

$('#helpbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#helpbtn').trigger('click');
  }
});

$('#closehelpbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#closehelpbtn').trigger('click');
  }
});

$('#xclosehelp').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#xclosehelp').trigger('click');
  }
});

$('#closeabtbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#closeabtbtn').trigger('click');
  }
});

$('#xcloseabt').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#xcloseabt').trigger('click');
  }
});

$('#loginbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#loginbtn').trigger('click');
  }
});

$('#lognobtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#lognobtn').trigger('click');
  }
});

$('#logyesbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#logyesbtn').trigger('click');
  }
});

$('#mdYes').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#mdYes').trigger('click');
  }
});

$('#mdNo').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#mdNo').trigger('click');
  }
});

$('#abtajaxbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#abtajaxbtn').trigger('click');
  }
});

$('#xabtcontact').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#xabtcontact').trigger('click');
  }
});

$('#abtcontactbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#abtcontactbtn').trigger('click');
  }
});

$('#xabtwarn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#xabtwarn').trigger('click');
  }
});

$('#abtwarnbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#abtwarnbtn').trigger('click');
  }
});

$('#forgotbtn').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode === 13) {
      $('#forgotbtn').trigger('click');
  }
});
