/* jCountdown 1.4.2 jQuery Plugin Copyright 2012 Tom Ellis http://www.webmuse.co.uk | MIT Licensed (license.txt) */
(function(a){a.fn.countdown=function(b){var c={date:null,updateTime:1e3,htmlTemplate:"%d <span class='cd-time'>days</span> %h <span class='cd-time'>hours</span> %i <span class='cd-time'>mins</span> %s <span class='cd-time'>sec</span>",minus:!1,onChange:null,onComplete:null,onResume:null,onPause:null,leadingZero:!1,offset:null,servertime:null,hoursOnly:!1,minsOnly:!1,secsOnly:!1,hours:!1,yearsAndMonths:!1,direction:"down"},d=[].slice,e=window.clearInterval,f=Math.floor,g=Math.ceil,h=36e5,i=864e5,j=/(%y|%m|%d|%h|%i|%s)/g,k=/%y/,l=/%m/,m=/%d/,n=/%h/,o=/%i/,p=/%s/,q=function(a,b){var c,d,e,f,g=new Date;return a===null?d=g.getTime()-b:(c=a*h,f=g.getTime()- -g.getTimezoneOffset()/60*h+c,d=g.setTime(f)),new Date(d)},r=function(){var a=this,b,c,d,g,h,i,r,s,t,u,v,w,x,y="",z,A={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},B=function(a){var b;return b=f(z/a),z-=b*a,b},C=a.data("jcdData");if(!C)return!1;b=C.htmlTemplate,C.offset===null&&C.servertime===null?c=new Date:C.offset!==null?c=q(C.offset):c=q(null,C.difference),c.setMilliseconds(0),d=new Date(C.date),d.setMilliseconds(0),g=C.direction==="down"?d.getTime()-c.getTime():c.getTime()-d.getTime(),z=Math.round(g/1e3),A.days=B(86400),A.hours=B(3600),A.minutes=B(60),A.seconds=B(1),C.yearsAndMonths&&(z+=A.days*86400,A.years=B(31556926),A.months=B(2629743.83),A.days=B(86400)),h=A.years,i=A.months,s=A.days,u=A.hours,v=A.minutes,x=A.seconds,C.hoursOnly&&(u+=s*24,s=0),C.minsOnly&&(v+=u*60+s*24*60,s=u=0),C.secsOnly&&(x+=v*60,s=u=v=0),C.yearsLeft=h,C.monthsLeft=i,C.daysLeft=s,C.hrsLeft=u,C.minsLeft=v,C.secLeft=x,x===60&&(x=0),C.leadingZero&&(s<10&&!C.hoursOnly&&(s="0"+s),h<10&&(h="0"+h),i<10&&(i="0"+i),u<10&&(u="0"+u),v<10&&(v="0"+v),x<10&&(x="0"+x)),C.direction==="down"&&(c<d||C.minus)||C.direction==="up"&&(d<c||C.minus)?(y=b.replace(k,h).replace(l,i),y=y.replace(m,s).replace(n,u).replace(o,v).replace(p,x)):(y=b.replace(j,"00"),C.hasCompleted=!0),a.html(y).trigger("change.jcdevt",[C]),C.hasCompleted&&(a.trigger("complete.jcdevt"),e(C.timer))},s={init:function(b){var d=a.extend({},c,b),e=d.htmlTemplate,f,g;return this.each(function(){var c=a(this),e={},h;c.data("jcdData")&&(c.countdown("changeSettings",b,!0),d=c.data("jcdData"));if(d.date===null)return a.error("No Date passed to jCountdown. date option is required."),!0;g=new Date(d.date),g.toString()==="Invalid Date"&&a.error("Invalid Date passed to jCountdown: "+d.date),g=null,d.onChange&&c.on("change.jcdevt",d.onChange),d.onComplete&&c.on("complete.jcdevt",d.onComplete),d.onPause&&c.on("pause.jcdevt",d.onPause),d.onResume&&c.on("resume.jcdevt",d.onResume),e={originalHTML:c.html(),date:d.date,yearsAndMonths:d.yearsAndMonths,hoursOnly:d.hoursOnly,minsOnly:d.minsOnly,secsOnly:d.secsOnly,leadingZero:d.leadingZero,updateTime:d.updateTime,direction:d.direction,template:d.htmlTemplate,htmlTemplate:d.htmlTemplate,minus:d.minus,offset:d.offset,servertime:d.servertime,difference:null,onChange:d.onChange,onComplete:d.onComplete,onResume:d.onResume,onPause:d.onPause,hasCompleted:!1,timer:0};if(d.servertime!==null){var i;f=new Date,i=a.isFunction(e.servertime)?e.servertime():e.servertime,e.difference=f.getTime()-i}h=a.proxy(r,c),e.timer=setInterval(h,e.updateTime),c.data("jcdData",e),h()})},changeSettings:function(b,c){return this.each(function(){var d=a(this),f,g,h=a.proxy(r,d);if(!d.data("jcdData"))return!0;f=a.extend({},d.data("jcdData"),b),b.hasOwnProperty("date")&&(g=new Date(b.date),g.toString()==="Invalid Date"&&a.error("Invalid Date passed to jCountdown: "+b.date)),f.completed=!1,e(f.timer),d.off(".jcdevt").data("jcdData",f),c||(f.onChange&&d.on("change.jcdevt",f.onChange),f.onComplete&&d.on("complete.jcdevt",f.onComplete),f.onPause&&d.on("pause.jcdevt",f.onPause),f.onResume&&d.on("resume.jcdevt",f.onResume),f.timer=setInterval(h,f.updateTime),d.data("jcdData",f),h())})},resume:function(){return this.each(function(){var b=a(this),c=b.data("jcdData"),d=a.proxy(r,b);if(!c)return!0;b.data("jcdData",c).trigger("resume.jcdevt"),c.hasCompleted||(c.timer=setInterval(d,c.updateTime),d())})},pause:function(){return this.each(function(){var b=a(this),c=b.data("jcdData");if(!c)return!0;e(c.timer),b.data("jcdData",c).trigger("pause.jcdevt")})},complete:function(){return this.each(function(){var b=a(this),c=b.data("jcdData");if(!c)return!0;e(c.timer),c.hasCompleted=!0,b.data("jcdData",c).trigger("complete.jcdevt").off(".jcdevt")})},destroy:function(){return this.each(function(){var b=a(this),c=b.data("jcdData");if(!c)return!0;e(c.timer),b.off(".jcdevt").removeData("jcdData").html(c.originalHTML)})},getSettings:function(b){var c=a(this),d=c.data("jcdData");return b&&d?d.hasOwnProperty(b)?d[b]:undefined:d}};if(s[b])return s[b].apply(this,d.call(arguments,1));if(typeof b=="object"||!b)return s.init.apply(this,arguments);a.error("Method "+b+" does not exist in the jCountdown Plugin")}})(jQuery)