"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7087],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(a),c=l,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||n;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7188:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var r=a(7462),l=a(3366),n=(a(7294),a(3905)),i=["components"],o={title:"Self-Hosted",description:"News and information about self-hosted applications"},s="Self-Hosted",p={unversionedId:"Software/Cloud/Self-Hosted",id:"Software/Cloud/Self-Hosted",isDocsHomePage:!1,title:"Self-Hosted",description:"News and information about self-hosted applications",source:"@site/docs/Software/Cloud/Self-Hosted.md",sourceDirName:"Software/Cloud",slug:"/Software/Cloud/Self-Hosted",permalink:"/wikihub/docs/Software/Cloud/Self-Hosted",editUrl:"https://github.com/wikihub/wikihub/edit/main/docs/Software/Cloud/Self-Hosted.md",tags:[],version:"current",frontMatter:{title:"Self-Hosted",description:"News and information about self-hosted applications"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/wikihub/docs/Software/Cloud/Security"},next:{title:"Serverless",permalink:"/wikihub/docs/Software/Cloud/Serverless"}},u=[{value:"Docker",id:"docker",children:[],level:2},{value:"Portainer Templates",id:"portainer-templates",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[{value:"Ingress",id:"ingress",children:[],level:3}],level:2},{value:"VPS",id:"vps",children:[],level:2},{value:"VPN",id:"vpn",children:[],level:2},{value:"Cloud Desktop",id:"cloud-desktop",children:[],level:2},{value:"Homelabs",id:"homelabs",children:[],level:2},{value:"Self-Hosted Web Applications",id:"self-hosted-web-applications",children:[],level:2},{value:"Dashboard",id:"dashboard",children:[],level:2},{value:"Applications",id:"applications",children:[],level:2},{value:"Communications",id:"communications",children:[],level:2},{value:"Video Conferencing",id:"video-conferencing",children:[],level:2},{value:"Content Management System",id:"content-management-system",children:[{value:"Drupal",id:"drupal",children:[],level:3}],level:2},{value:"Static Webpages",id:"static-webpages",children:[],level:2},{value:"Traefik",id:"traefik",children:[],level:2}],m={toc:u};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"self-hosted"},"Self-Hosted"),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pascalandy/docker-stack-this"},"Docker stack this")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sham-sr/data_science_docker_stack"},"Data science docker stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cchacin/quaker-template"},"Quaker template"))),(0,n.kt)("h2",{id:"portainer-templates"},"Portainer Templates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://qballjos.github.io/portainer_templates/"},"Portainer V2 Templates for Selfhosted Projects/Homelabs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AndyYangUK/portainer_templates"},"Andy Yang portainer templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SelfhostedPro/selfhosted_templates"},"Selfhosted Pro portainer templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TheSpad/selfhosted_templates"},"The Spad portainer templates"))),(0,n.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.alexellis.io/self-hosting-kubernetes-on-your-raspberry-pi/"},"Self-hosting Kubernetes on your Raspberry Pi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://k8s-at-home.com/"},"k8s at home")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/k8s-at-home/awesome-home-kubernetes"},"awesome home kubernetes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://selfhosted.libhunt.com/"},"Awesome Self Hosted: libhunt"))),(0,n.kt)("h3",{id:"ingress"},"Ingress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.softwaretestinghelp.com/ngrok-alternatives/"},"ngrok alternatives"))),(0,n.kt)("h2",{id:"vps"},"VPS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://selfhost.cloud/Apps/"},"Selfhosted cloud apps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lab.uberspace.de/index.html"},"Uberspace"))),(0,n.kt)("h2",{id:"vpn"},"VPN"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://techlore.tech/index.html"},"Techlore"))),(0,n.kt)("h2",{id:"cloud-desktop"},"Cloud Desktop"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://isardvdi.com/"},"IsardVDI"))),(0,n.kt)("h2",{id:"homelabs"},"Homelabs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/erebe/personal-server/blob/master/README.md"},"Managing my personal server in 2020")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smarthomebeginner.com/my-smart-home-setup-2019/"},"Smart Home Beginner: My smart home setup 2019")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ikarus.sg/tag/kubernetes/"},"Ikarus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/omdv/homelab-server"},"homelab-server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mattiss/selfhosted/tree/master/docker"},"selfhosted")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sethforprivacy/self-hosted-services"},"Self hosted services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PAPAMICA"},"PAPAMICA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casenjo/home-infra"},"home-infra")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sensorsiot.github.io/IOTstack/Containers/WireGuard/"},"IoTstack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TuxdudeHomeLab"},"TuxdudeHomeLab"))),(0,n.kt)("h2",{id:"self-hosted-web-applications"},"Self-Hosted Web Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Kickball/awesome-selfhosted"},"Awesome selfhosted")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awesome-selfhosted/awesome-selfhosted"},"awesome-selfhosted")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apps.sandstorm.io/"},"Sandstorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.softaculous.com/apps/"},"Softaculous")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ampps.com/apps"},"AMPPS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yunohost.org/#/apps"},"Yunohost")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vice.com/en/article/pkb4ng/meet-the-self-hosters-taking-back-the-internet-one-server-at-a-time"},"Meet the Self-Hosters, Taking Back the Internet One Server at a Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://old.reddit.com/r/selfhosted/"},"/r/selfhosted/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arvind.io/posts/self-hosted-home-server-vs-cloud/"},"The self-hosted dilemma - Home server or the cloud?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.firefly-iii.org/"},"Firefly III")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://greenhouse.server.garden/"},"Greenhouse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kauri.io/#build-your-very-own-self-hosting-platform-with-raspberry-pi-and-kubernetes-introduction/1229f21044ef4bff8df35875d6803776/a"},"Build your very own self-hosting platform with Raspberry Pi and Kubernetes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reposhub.com/linux/system-utilities/erebe-personal-server.html"},"Managing my personal server in 2020"))),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/linuxserver/Heimdall"},"Heimdall")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Lissy93/dashy"},"Dashy"))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.tooljet.com/docs/intro/"},"ToolJet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://degoogle.jmoore.dev/"},"DeGoogle"))),(0,n.kt)("h2",{id:"communications"},"Communications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/42wim/matterbridge/"},"Matterbridge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.element.io/"},"Element")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://matrix.org/"},"Matrix: An open network for secure, decentralized communication"))),(0,n.kt)("h2",{id:"video-conferencing"},"Video Conferencing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker"},"Jitsi Meet Handbook"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jaas.8x8.vc"},"8x8")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pionion.github.io/docs/deploy/docker"},"Project ION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bigbluebutton.org/"},"BigBlueButton")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://products.containerize.com/video-conferencing/"},"Video conferencing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://openmeetings.apache.org/"},"OpenMeetings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.kurento.org/"},"Kurento"))),(0,n.kt)("h2",{id:"content-management-system"},"Content Management System"),(0,n.kt)("h3",{id:"drupal"},"Drupal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mrn55/k8s"},"Drupal on AWS"))),(0,n.kt)("h2",{id:"static-webpages"},"Static Webpages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cle1000/docker-cloud-boilerplate"},"docker-cloud-boilerplate"))),(0,n.kt)("h2",{id:"traefik"},"Traefik"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Heziode/traefik-v2-https-ssl-localhost"},"Traefik v2 HTTPS (SSL) on localhost"))))}h.isMDXComponent=!0}}]);