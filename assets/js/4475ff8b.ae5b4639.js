"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1610],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Packages",linkTitle:"Packages",date:new Date("2019-04-28T00:00:00.000Z"),weight:25,description:"News and information about software packages"},u="Nix",l={unversionedId:"Software/Packages",id:"Software/Packages",isDocsHomePage:!1,title:"Packages",description:"News and information about software packages",source:"@site/docs/Software/Packages.md",sourceDirName:"Software",slug:"/Software/Packages",permalink:"/wikihub/docs/Software/Packages",editUrl:"https://github.com/wikihub/wikihub/edit/main/docs/Software/Packages.md",tags:[],version:"current",frontMatter:{title:"Packages",linkTitle:"Packages",date:"2019-04-28T00:00:00.000Z",weight:25,description:"News and information about software packages"},sidebar:"tutorialSidebar",previous:{title:"Open Source",permalink:"/wikihub/docs/Software/OpenSource"},next:{title:"Robotic Process Automation",permalink:"/wikihub/docs/Software/RPA"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nix"},"Nix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.org/nixos/packages.html"},"Search NixOS packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ariya.io/2016/06/isolated-development-environment-using-nix"},"Isolated development environment using Nix")),(0,i.kt)("li",{parentName:"ul"},"Search for Hugo: ",(0,i.kt)("inlineCode",{parentName:"li"},"nix-env -qaP | grep hugo")),(0,i.kt)("li",{parentName:"ul"},"Installing Hugo: ",(0,i.kt)("inlineCode",{parentName:"li"},"nix-env -iA nixpkgs.hugo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/costrouc/nix-binder-example"},"Nix binder example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kalbas.it/2019/02/26/manage-a-static-website-with-hugo-and-nix/"},"Working with hugo using nix")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.wiki/wiki/FAQ/Pinning_Nixpkgs"},"Pinning nix packages"))))}f.isMDXComponent=!0}}]);