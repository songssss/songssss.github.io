$(document).ready(function(){


	console.log("hello");
	//모바일 화면 흔들림 방지
 $(this).bind('touchmove',function(){
   return false;
 });



/*
	showdown.extension('targetlink', function() {
	  return [{
		type: 'lang',
		regex: /\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\4[ \t]*)?\)\{\:target=(["'])(.*)\6}/g,
		replace: function(wholematch, linkText, url, a, b, title, c, target) {

		  var result = '<a href="' + url + '"';

		  if (typeof title != 'undefined' && title !== '' && title !== null) {
			title = title.replace(/"/g, '&quot;');
			title = showdown.helper.escapeCharacters(title, '*_', false);
			result += ' title="' + title + '"';
		  }

		  if (typeof target != 'undefined' && target !== '' && target !== null) {
			result += ' target="' + target + '"';
		  }

		  result += '>' + linkText + '</a>';
		  return result;
		}
	  }];
	});
*/

});


