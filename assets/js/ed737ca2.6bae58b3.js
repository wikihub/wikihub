"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7608],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(r),h=o,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(k,n(n({ref:e},u),{},{components:r})):a.createElement(k,n({ref:e},u))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,n=new Array(i);n[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=r(7462),o=r(3366),i=(r(7294),r(3905)),n=["components"],l={title:"Learning ROS 1",linkTitle:"Learning ROS 1",date:new Date("2019-02-22T00:00:00.000Z"),description:"News and information about learning ROS"},s="Start",p={unversionedId:"Robotics/ROS/LearningROS1",id:"Robotics/ROS/LearningROS1",isDocsHomePage:!1,title:"Learning ROS 1",description:"News and information about learning ROS",source:"@site/docs/Robotics/ROS/LearningROS1.md",sourceDirName:"Robotics/ROS",slug:"/Robotics/ROS/LearningROS1",permalink:"/wikihub/docs/Robotics/ROS/LearningROS1",editUrl:"https://github.com/wikihub/wikihub/edit/main/docs/Robotics/ROS/LearningROS1.md",tags:[],version:"current",frontMatter:{title:"Learning ROS 1",linkTitle:"Learning ROS 1",date:"2019-02-22T00:00:00.000Z",description:"News and information about learning ROS"},sidebar:"tutorialSidebar",previous:{title:"Embedded ROS",permalink:"/wikihub/docs/Robotics/ROS/Embedded"},next:{title:"Navigation",permalink:"/wikihub/docs/Robotics/ROS/Navigation"}},u=[{value:"Graphs",id:"graphs",children:[],level:2},{value:"Creating ROS packages",id:"creating-ros-packages",children:[],level:2},{value:"TurtleBot",id:"turtlebot",children:[],level:2}],c={toc:u};function m(t){var e=t.components,r=(0,o.Z)(t,n);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start"},"Start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/ROS/Tutorials"},"ROS Tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ros/cheatsheet/releases/download/0.0.1/ROScheatsheet_catkin.pdf"},"ROS cheat sheet (catkin)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://clearpathrobotics.com/ros-robot-operating-system-cheat-sheet/"},"ROS cheat sheets by Clearpath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/ROS/Concepts"},"ROS concepts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/catkin/Tutorials/create_a_workspace"},"ROS workspaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/ROS/Tutorials/UnderstandingTopics"},"Understanding Topics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/Client%20Libraries"},"Programming languages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/ROS/CommandLineTools"},"ROS command-line interface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://index.ros.org/"},"ROS Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ly0n/awesome-robotic-tooling"},"Awesome robotic tooling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/leggedrobotics/ros_best_practices/wiki"},"ROS best practices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://autorob.org/lectures/autorob_10_pointclouds_middleware.pdf"},"Introduction to Autonomous Robotics Michigan EECS 367"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.learnrobotics.org/"},"Learn robotics"))),(0,i.kt)("h2",{id:"graphs"},"Graphs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://roboticsbackend.com/rqt-graph-visualize-and-debug-your-ros-graph/"},"rqt graph \u2013 visualize and debug your ROS graph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/rosgraph"},"rosgraph (command-line)"))),(0,i.kt)("h2",{id:"creating-ros-packages"},"Creating ROS packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://erlerobot.github.io/erle_gitbook/en/ros/tutorials/creating_a_ros_package.html"},"Creating a ROS package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ros.org/en/independent/api/rosdep/html/commands.html"},"rosdep"))),(0,i.kt)("h1",{id:"tutorials"},"Tutorials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://robocademy.com/2020/04/28/top-free-tutorials-to-learn-ros-robot-operating-system/"},"Top free tutorials to learn ROS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.erlerobotics.com/simulation/intro"},"ROS/Gazebo simulator as the external simulator for ArduCopter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ehtUb55Rmmg&list=PLk51HrKSBQ8-jTgD0qgRp1vmQeVSJ5SQC&index=1"},"ROS kinetic tutorial by Shawn Chen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cyberbotics.com/doc/guide/tutorial-1-your-first-simulation-in-webots"},"Webots tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://easybuildtech.com/simple-comprehensive-ros-melodic-robot/"},"Simple ROS tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://industrial-training-master.readthedocs.io/en/melodic/index.html"},"ROS Industrial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=N6K2LWG2kRI&list=PLuteWQUGtU9BU0sQIVqRQa24p-pSBCYNv"},"ROS Tutorials by Tiziano Fiorenzani"))),(0,i.kt)("h1",{id:"talks"},"Talks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://connect.linaro.org/resources/"},"Connect Linaro"))),(0,i.kt)("h1",{id:"courses"},"Courses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLRG6WP3c31_U7TFGduEIJWVtkOw6AJjFf"},"ROS Online Course by ROBOTIS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://online-learning.tudelft.nl/courses/hello-real-world-with-ros-robot-operating-systems/"},"Hello Real World with ROS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://campusrover.org.s3-website-us-west-2.amazonaws.com/"},"Cosi119a - Autonomous Robotics Lab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pubhtml5.com/zlck/eqay"},"Creating robots using ROS2 navigation"))),(0,i.kt)("h1",{id:"books"},"Books"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://subscription.packtpub.com/book/hardware_and_creative/9781788478953"},"Mastering ROS for Robotics Programming - Second Edition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.riotu-lab.org/rosbook/"},"Springer book on Robot Operating System (ROS)"))),(0,i.kt)("h1",{id:"projects"},"Projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/robotology/robotology-superbuild"},"iCub"))),(0,i.kt)("h1",{id:"online-learning"},"Online Learning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://roboticsbackend.com/"},"The Robotics Back-End")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/cse-468-568-robotic-algorithms"},"CSE 468-568 Robotic Algorithms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://metrorobots.com/"},"Metrorobots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aws-robotics/aws-robomaker-robotics-curriculum"},"AWS robomaker robotics curriculum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jderobot.github.io/RoboticsAcademy/"},"Robotics Academy"))),(0,i.kt)("h1",{id:"notebooks-for-robots"},"Notebooks for Robots"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RoboStack"},"Robot Stack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.jupyter.org/ros-jupyter-b7e82b5e1202"},"ROS@Jupyter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/keuperj/ZumiDashBoard"},"Jupyter Notebooks for Z\xfcmi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Calysto/jyro"},"Jupyter and Robots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RobInLabUJI/ROS-Tutorials"},"ROS Tutorial Jupyter Notebooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RobInLabUJI"},"Robotic Intelligence Lab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kw90/jupyter-roslibpy"},"Jupyter roslibpy"))),(0,i.kt)("h2",{id:"turtlebot"},"TurtleBot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/frankjoshua/demo-ros-cmdvel-jupyter"},"ROS cmdvel demo"))),(0,i.kt)("h1",{id:"julia"},"Julia"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moyhig/CxxROS"},"CxxROS"))))}m.isMDXComponent=!0}}]);