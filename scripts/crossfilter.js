(function(n){function t(n){return n}function k(n,t){for(var i=0,r=t.length,u=Array(r);r>i;++i)u[i]=n[t[i]];return u}function d(n){function i(t,i,r,u){for(;u>r;){var f=r+u>>>1;n(t[f])<i?r=f+1:u=f}return r}function t(t,i,r,u){for(;u>r;){var f=r+u>>>1;i<n(t[f])?u=f:r=f+1}return r}return t.right=t,t.left=i,t}function u(n){function t(n,t,r){for(var u=r-t,f=(u>>>1)+1;--f>0;)i(n,f,u,t);return n}function r(n,t,r){for(var f,u=r-t;--u>0;)f=n[t],n[t]=n[t+u],n[t+u]=f,i(n,1,u,t);return n}function i(t,i,r,u){for(var f,e=t[--u+i],o=n(e);(f=i<<1)<=r&&(r>f&&n(t[u+f])>n(t[u+f+1])&&f++,!(o<=n(t[u+f])));)t[u+i]=t[u+f],i=f;t[u+i]=e}return t.sort=r,t}function h(n){function i(i,r,u,f){for(var s,c,h,e=Array(f=Math.min(u-r,f)),o=0;f>o;++o)e[o]=i[r++];if(t(e,0,f),u>r){s=n(e[0]);do(c=n(h=i[r])>s)&&(e[0]=h,s=n(t(e,0,f)[0]));while(++r<u)}return e}var t=u(n);return i}function c(n){function t(t,i,r){for(var f=i+1;r>f;++f){for(var u=f,e=t[f],o=n(e);u>i&&n(t[u-1])>o;--u)t[u]=t[u-1];t[u]=e}return t}return t}function l(n){function t(n,t,u){return(lt>u-t?r:i)(n,t,u)}function i(i,r,u){var f,rt=0|(u-r)/6,ft=r+rt,et=u-1-rt,ut=r+u-1>>1,ot=ut-rt,st=ut+rt,tt=i[ft],g=n(tt),w=i[ot],c=n(w),b=i[ut],v=n(b),k=i[st],l=n(k),it=i[et],nt=n(it),ct,s,h,p,y;g>c&&(f=tt,tt=w,w=f,f=g,g=c,c=f),l>nt&&(f=k,k=it,it=f,f=l,l=nt,nt=f),g>v&&(f=tt,tt=b,b=f,f=g,g=v,v=f),c>v&&(f=w,w=b,b=f,f=c,c=v,v=f),g>l&&(f=tt,tt=k,k=f,f=g,g=l,l=f),v>l&&(f=b,b=k,k=f,f=v,v=l,l=f),c>nt&&(f=w,w=it,it=f,f=c,c=nt,nt=f),c>v&&(f=w,w=b,b=f,f=c,c=v,v=f),l>nt&&(f=k,k=it,it=f,f=l,l=nt,nt=f);var lt=w,a=c,at=k,d=l;i[ft]=tt,i[ot]=i[r],i[ut]=b,i[st]=i[u-1],i[et]=it;var o=r+1,e=u-2,ht=d>=a&&a>=d;if(ht){for(s=o;e>=s;++s)if(h=i[s],p=n(h),a>p)s!==o&&(i[s]=i[o],i[o]=h),++o;else if(p>a)for(;;){if(y=n(i[e]),!(y>a)){if(a>y){i[s]=i[o],i[o++]=i[e],i[e--]=h;break}i[s]=i[e],i[e--]=h;break}e--}}else for(s=o;e>=s;s++)if(h=i[s],p=n(h),a>p)s!==o&&(i[s]=i[o],i[o]=h),++o;else if(p>d)for(;;){if(y=n(i[e]),!(y>d)){a>y?(i[s]=i[o],i[o++]=i[e],i[e--]=h):(i[s]=i[e],i[e--]=h);break}if(e--,s>e)break}if(i[r]=i[o-1],i[o-1]=lt,i[u-1]=i[e+1],i[e+1]=at,t(i,r,o-1),t(i,e+2,u),ht)return i;if(ft>o&&e>et){for(;(ct=n(i[o]))<=a&&ct>=a;)++o;for(;(y=n(i[e]))<=d&&y>=d;)--e;for(s=o;e>=s;s++)if(h=i[s],p=n(h),a>=p&&p>=a)s!==o&&(i[s]=i[o],i[o]=h),o++;else if(d>=p&&p>=d)for(;;){if(y=n(i[e]),!(d>=y&&y>=d)){a>y?(i[s]=i[o],i[o++]=i[e],i[e--]=h):(i[s]=i[e],i[e--]=h);break}if(e--,s>e)break}}return t(i,o,e+1)}var r=c(n);return t}function a(n){return Array(n)}function st(n,t){return function(i){var r=i.length;return[n.left(i,t,0,r),n.right(i,t,0,r)]}}function ht(n,t){var i=t[0],r=t[1];return function(t){var u=t.length;return[n.left(t,i,0,u),n.left(t,r,0,u)]}}function v(n){return[0,n.length]}function r(){return null}function f(){return 0}function g(n){return n+1}function nt(n){return n-1}function tt(n){return function(t,i){return t+ +n(i)}}function it(n){return function(t,i){return t-n(i)}}function i(){function ut(t){var u=i,r=t.length;return r&&(c=c.concat(t),n=b(n,i+=r),p.forEach(function(n){n(t,u,r)})),ft}function et(y){function dt(t,r,u){ot=t.map(y),vt=vi(ct(u),0,u),ot=k(ot,vt);var f,l,h=pt(ot),a=h[0],v=h[1];if(wt)for(f=0;u>f;++f)wt(ot[f],l=vt[f]+r)||(n[l]|=ut);else{for(f=0;a>f;++f)n[vt[f]+r]|=ut;for(f=v;u>f;++f)n[vt[f]+r]|=ut}if(!r)return et=ot,ft=vt,lt=a,at=v,void 0;var c=et,p=ft,o=0,s=0;for(et=Array(i),ft=e(i,i),f=0;r>o&&u>s;++f)c[o]<ot[s]?(et[f]=c[o],ft[f]=p[o++]):(et[f]=ot[s],ft[f]=vt[s++]+r);for(;r>o;++o,++f)et[f]=c[o],ft[f]=p[o];for(;u>s;++s,++f)et[f]=ot[s],ft[f]=vt[s]+r;h=pt(et),lt=h[0],at=h[1]}function gt(n,t,i){kt.forEach(function(n){n(ot,vt,t,i)}),ot=vt=null}function ni(t){var r=t[0],u=t[1],i,f,e,o,s;if(wt)return wt=null,fi(function(n,t){return t>=r&&u>t}),lt=r,at=u,bt;if(o=[],s=[],lt>r)for(i=r,f=Math.min(lt,u);f>i;++i)n[e=ft[i]]^=ut,o.push(e);else if(r>lt)for(i=lt,f=Math.min(r,at);f>i;++i)n[e=ft[i]]^=ut,s.push(e);if(u>at)for(i=Math.max(r,at),f=u;f>i;++i)n[e=ft[i]]^=ut,o.push(e);else if(at>u)for(i=Math.max(lt,u),f=at;f>i;++i)n[e=ft[i]]^=ut,s.push(e);return lt=r,at=u,a.forEach(function(n){n(ut,o,s)}),bt}function si(n){return null==n?ri():Array.isArray(n)?ii(n):"function"==typeof n?ui(n):ti(n)}function ti(n){return ni((pt=st(o,n))(et))}function ii(n){return ni((pt=ht(o,n))(et))}function ri(){return ni((pt=v)(et))}function ui(n){return pt=v,fi(wt=n),lt=0,at=i,bt}function fi(t){for(var r,f,e=[],o=[],u=0;i>u;++u)!(n[r=ft[u]]&ut)^(f=t(et[u],r))&&(f?(n[r]&=yt,e.push(r)):(n[r]|=ut,o.push(r)));a.forEach(function(n){n(ut,e,o)})}function hi(t){for(var i,r=[],u=at;--u>=lt&&t>0;)n[i=ft[u]]||(r.push(c[i]),--t);return r}function ci(t){for(var r,u=[],i=lt;at>i&&t>0;)n[r=ft[i]]||(u.push(c[r]),--t),i++;return u}function ei(o){function lt(t,u,f,h){function pt(){++l===ht&&(ft=s(ft,st<<=1),y=s(y,st),ht=rt(st))}var tt,it,et,g,ut,lt,at=v,ft=e(l,ht),wt=w,bt=ot,vt=l,d=0,nt=0;for(k&&(wt=bt=r),v=Array(l),l=0,y=vt>1?b(y,i):e(i,ht),vt&&(et=(it=at[0]).key);h>nt&&!((g=o(t[nt]))>=g);)++nt;for(;h>nt;){for(it&&g>=et?(ut=it,lt=et,ft[d]=l,(it=at[++d])&&(et=it.key)):(ut={key:g,value:bt()},lt=g),v[l]=ut;!(g>lt||(y[tt=u[nt]+f]=l,n[tt]&yt||(ut.value=wt(ut.value,c[tt])),++nt>=h));)g=o(t[nt]);pt()}for(;vt>d;)v[ft[d]=l]=at[d++],pt();if(l>d)for(d=0;f>d;++d)y[d]=ft[y[d]];tt=a.indexOf(p),l>1?(p=ni,ct=ii):(1===l?(p=ti,ct=ri):(p=r,ct=r),y=null),a[tt]=p}function ni(t,i,r){if(t!==ut&&!k){for(var f,e,u=0,o=i.length;o>u;++u)n[f=i[u]]&yt||(e=v[y[f]],e.value=w(e.value,c[f]));for(u=0,o=r.length;o>u;++u)(n[f=r[u]]&yt)===t&&(e=v[y[f]],e.value=vt(e.value,c[f]))}}function ti(t,i,r){if(t!==ut&&!k){for(var f,e=v[0],u=0,o=i.length;o>u;++u)n[f=i[u]]&yt||(e.value=w(e.value,c[f]));for(u=0,o=r.length;o>u;++u)(n[f=r[u]]&yt)===t&&(e.value=vt(e.value,c[f]))}}function ii(){for(var r,t=0;l>t;++t)v[t].value=ot();for(t=0;i>t;++t)n[t]&yt||(r=v[y[t]],r.value=w(r.value,c[t]))}function ri(){var t,r=v[0];for(r.value=ot(),t=0;i>t;++t)n[t]&yt||(r.value=w(r.value,c[t]))}function pt(){return k&&(ct(),k=!1),v}function ui(n){var t=dt(pt(),0,v.length,n);return gt.sort(t,0,t.length)}function at(n,t,i){return w=n,vt=t,ot=i,k=!0,d}function wt(){return at(g,nt,f)}function fi(n){return at(tt(n),it(n),f)}function bt(n){function t(t){return n(t.value)}return dt=h(t),gt=u(t),d}function ei(){return bt(t)}function si(){return l}function hi(){var n=a.indexOf(p);return n>=0&&a.splice(n,1),n=kt.indexOf(lt),n>=0&&kt.splice(n,1),d}var d={top:ui,all:pt,reduce:at,reduceCount:wt,reduceSum:fi,order:bt,orderNatural:ei,size:si,remove:hi};oi.push(d);var v,y,dt,gt,w,vt,ot,st=8,ht=rt(st),l=0,p=r,ct=r,k=!0;return arguments.length<1&&(o=t),a.push(p),kt.push(lt),lt(et,ft,0,i),wt().orderNatural()}function li(){var n=ei(r),t=n.all;return delete n.all,delete n.top,delete n.order,delete n.orderNatural,delete n.size,n.value=function(){return t()[0].value},n}function ai(){oi.forEach(function(n){n.remove()});var t=p.indexOf(dt);for(t>=0&&p.splice(t,1),t=p.indexOf(gt),t>=0&&p.splice(t,1),t=0;i>t;++t)n[t]&=yt;return w&=yt,bt}var et,ft,ot,vt,wt,bt={filter:si,filterExact:ti,filterRange:ii,filterFunction:ui,filterAll:ri,top:hi,bottom:ci,group:ei,groupAll:li,remove:ai},ut=~w&-~w,yt=~ut,vi=l(function(n){return ot[n]}),pt=v,kt=[],oi=[],lt=0,at=0;return p.unshift(dt),p.push(gt),w|=ut,(d>=32?!ut:w&(1<<d)-1)&&(n=s(n,d<<=1)),dt(c,0,i),gt(c,0,i),bt}function ot(){function e(f,e){var o;if(!r)for(o=e;i>o;++o)n[o]||(t=u(t,c[o]))}function s(i,f,e){var o,s,h;if(!r){for(o=0,h=f.length;h>o;++o)n[s=f[o]]||(t=u(t,c[s]));for(o=0,h=e.length;h>o;++o)n[s=e[o]]===i&&(t=l(t,c[s]))}}function w(){var r;for(t=v(),r=0;i>r;++r)n[r]||(t=u(t,c[r]))}function o(n,t,i){return u=n,l=t,v=i,r=!0,y}function h(){return o(g,nt,f)}function b(n){return o(tt(n),it(n),f)}function k(){return r&&(w(),r=!1),t}function d(){var n=a.indexOf(s);return n>=0&&a.splice(n),n=p.indexOf(e),n>=0&&p.splice(n),y}var t,u,l,v,y={reduce:o,reduceCount:h,reduceSum:b,value:k,remove:d},r=!0;return a.push(s),p.push(e),e(c,0,i),h()}function lt(){return i}var ft={add:ut,dimension:et,groupAll:ot,size:lt},c=[],i=0,w=0,d=8,n=y(0),a=[],p=[];return arguments.length?ut(arguments[0]):ft}function e(n,t){return(257>t?y:65537>t?p:w)(n)}function ct(n){for(var i=e(n,n),t=-1;++t<n;)i[t]=t;return i}function rt(n){return 8===n?256:16===n?65536:4294967296}var o,ut,ft,et,ot;i.version="1.2.0",i.permute=k,o=i.bisect=d(t),o.by=d,ut=i.heap=u(t),ut.by=u,ft=i.heapselect=h(t),ft.by=h,et=i.insertionsort=c(t),et.by=c,ot=i.quicksort=l(t),ot.by=l;var lt=32,y=a,p=a,w=a,b=t,s=t;"undefined"!=typeof Uint8Array&&(y=function(n){return new Uint8Array(n)},p=function(n){return new Uint16Array(n)},w=function(n){return new Uint32Array(n)},b=function(n,t){var i=new n.constructor(t);return i.set(n),i},s=function(n,t){var i;switch(t){case 16:i=p(n.length);break;case 32:i=w(n.length);break;default:throw Error("invalid array width!");}return i.set(n),i}),n.crossfilter=i})(this)