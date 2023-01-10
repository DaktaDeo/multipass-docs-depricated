(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{410:function(e,s,t){"use strict";t.r(s);var a=t(44),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#running-commands"}},[e._v("Running Commands")])]),t("li",[t("a",{attrs:{href:"#command-history"}},[e._v("Command History")])]),t("li",[t("a",{attrs:{href:"#commands-vs-recipes"}},[e._v("Commands vs. Recipes")])]),t("li",[t("a",{attrs:{href:"#circle-permissions"}},[e._v("Circle Permissions")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("You may execute arbitrary Bash commands from the Commands panel. Commands are executed from within the site's root directory, e.g. "),t("code",[e._v("/home/forge/site.com")]),e._v(". If you need to run commands within another directory you may prefix the command with a "),t("code",[e._v("cd")]),e._v(" operation:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ./run-command.sh\n")])])]),t("h2",{attrs:{id:"running-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-commands"}},[e._v("#")]),e._v(" Running Commands")]),e._v(" "),t("p",[e._v("Commands can be executed from the Site's "),t("strong",[e._v("Commands")]),e._v(" panel.")]),e._v(" "),t("p",[e._v("Sites that were created with the "),t("strong",[e._v("General PHP / Laravel")]),e._v(" project type will automatically suggest common Laravel Artisan commands.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Command Input")]),e._v(" "),t("p",[e._v("Commands are not executed within a tty, which means that input / passwords cannot be provided.")])]),e._v(" "),t("h2",{attrs:{id:"command-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-history"}},[e._v("#")]),e._v(" Command History")]),e._v(" "),t("p",[e._v("The last 10 previously executed commands will be shown within the "),t("strong",[e._v("Command History")]),e._v(" table. Alongside the command that was run, Forge will also display:")]),e._v(" "),t("ul",[t("li",[e._v("The user who initiated the command. This is particularly helpful when using Forge within "),t("RouterLink",{attrs:{to:"/1.0/accounts/circles.html"}},[e._v("Circles")]),e._v(".")],1),e._v(" "),t("li",[e._v("The command that was executed.")]),e._v(" "),t("li",[e._v("The date and time of execution.")]),e._v(" "),t("li",[e._v("The status of the command.")])]),e._v(" "),t("p",[e._v("From the Command History table, it's also possible to view the output of the command and re-run the command.")]),e._v(" "),t("h2",{attrs:{id:"commands-vs-recipes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands-vs-recipes"}},[e._v("#")]),e._v(" Commands vs. Recipes")]),e._v(" "),t("p",[e._v("While "),t("RouterLink",{attrs:{to:"/1.0/servers/recipes.html"}},[e._v("Recipes")]),e._v(" also allow you to run arbitrary Bash scripts on your servers, Commands differ in a few, but important ways:")],1),e._v(" "),t("ul",[t("li",[e._v("Recipes run at a server level. In other words, they cannot dynamically change into a site's directory unless you already know the directory ahead of time.")]),e._v(" "),t("li",[e._v("Recipes can run using the "),t("code",[e._v("root")]),e._v(" user. Commands only run as the site's user, which in most cases will be "),t("code",[e._v("forge")]),e._v(' unless the site is "isolated".')]),e._v(" "),t("li",[e._v("Recipes are better equipped for running larger Bash scripts. Commands focus on running short commands, such as "),t("code",[e._v("php artisan config:cache")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"circle-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circle-permissions"}},[e._v("#")]),e._v(" Circle Permissions")]),e._v(" "),t("p",[e._v("You may grant a circle member authority to run arbitrary commands in a site's directory by granting the "),t("code",[e._v("site:manage-commands")]),e._v(" permission.")])])}),[],!1,null,null,null);s.default=r.exports}}]);