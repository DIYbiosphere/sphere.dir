function ParseLinkHeader(e){var a=e.split(","),t={};for(var n in a){var s=a[n],i={};i.name=s.match(/rel="([^"]*)/)[1],i.url=s.match(/<([^>]*)/)[1],i.page=s.match(/page=(\d+).*$/)[1],t[i.name]=i}return t}function ShowComments(e,a,t){var n="https://api.github.com/repos/"+e+"/issues/"+a+"/comments?page="+t;$.ajax(n,{headers:{Accept:"application/vnd.github.v3.html+json"},dataType:"json",success:function(n,s,i){if(1==t){var o="https://github.com/"+e+"/issues/"+a+"#new_comment_field";$("#gh-comments-list").append("<div class='ui basic center aligned segment'><a class='noelink' href='"+o+"' target='_blank'> <div class='ui animated mini basic primary button' tabindex='0'><div class='visible content'><i class='far fa-comment'></i>&nbsp; Post a Comment</div><div class='hidden content'>on GitHub</div></div></a></div>")}($.each(n,function(e,a){var t=new Date(a.created_at),n="<div class='ui comments'>";n+="<div class='comment'>",n+="<a class='avatar'>",n+="<img src='"+a.user.avatar_url+"'>",n+="</a>",n+="<div class='content'>",n+="<a class='author noelink noul' href='"+a.user.html_url+"'>"+a.user.login+"</a>",n+="<div class='metadata'>",n+="<div class='date'>"+t.toUTCString()+"</div>",n+="</div>",n+="<div class='text'>",n+=a.body_html,n+="</div>",n+="</div>",n+="</div>",$("#gh-comments-list").append(n)}),i.getResponseHeader("Link"))&&("next"in ParseLinkHeader(i.getResponseHeader("Link"))&&ShowComments(e,a,t+1))},error:function(){$("#gh-comments-list").append("Comments are not open for this post yet.")}})}function DoGithubComments(e,a){$(document).ready(function(){ShowComments(e,a,1)})}