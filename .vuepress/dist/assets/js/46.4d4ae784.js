(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{411:function(e,t,s){"use strict";s.r(t);var a=s(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packages"}},[e._v("#")]),e._v(" Packages")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[e._v("Overview")]),s("ul",[s("li",[s("a",{attrs:{href:"#site-composer-credentials"}},[e._v("Site Composer Credentials")])]),s("li",[s("a",{attrs:{href:"#adding-credentials-before-installing-a-repository"}},[e._v("Adding Credentials Before Installing a Repository")])])])]),s("li",[s("a",{attrs:{href:"#adding-credentials"}},[e._v("Adding Credentials")])]),s("li",[s("a",{attrs:{href:"#removing-credentials"}},[e._v("Removing Credentials")])]),s("li",[s("a",{attrs:{href:"#circle-permissions"}},[e._v("Circle Permissions")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Forge allows you to manage the \"http-basic\" portion of the selected site's user's "),s("code",[e._v("auth.json")]),e._v(" Composer configuration file. The provided credentials are only stored on the server being managed by Forge - not within Forge itself.")]),e._v(" "),s("h3",{attrs:{id:"site-composer-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-composer-credentials"}},[e._v("#")]),e._v(" Site Composer Credentials")]),e._v(" "),s("p",[e._v("The Composer Credentials that you can manage on the site level only apply to this site . For example, if you have two sites installed under the "),s("code",[e._v("forge")]),e._v(" user, and you need both sites to use different credentials for the same Composer package, you should use the site's packages. If you want to store one set of credentials that applies to all sites with a user's home directory, please see "),s("RouterLink",{attrs:{to:"/1.0/servers/packages.html"}},[e._v("Packages")]),e._v(" for more details.")],1),e._v(" "),s("h3",{attrs:{id:"adding-credentials-before-installing-a-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-credentials-before-installing-a-repository"}},[e._v("#")]),e._v(" Adding Credentials Before Installing a Repository")]),e._v(" "),s("p",[e._v('Forge does not allow you to install credentials before you have installed a repository; instead, it will redirect you back to the "App" tab. This is because Forge recreates the site\'s base directory if the initial installation does not finish successfully. So, if you need to provide local Composer credentials, you first need to install a repository without the "Install Composer Dependencies" checked so that you can update the credentials after the repository is installed.')]),e._v(" "),s("h2",{attrs:{id:"adding-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-credentials"}},[e._v("#")]),e._v(" Adding Credentials")]),e._v(" "),s("p",[e._v('Additional credentials can be added by clicking the "Add Credentials" button. You need to provide:')]),e._v(" "),s("ul",[s("li",[e._v("Repository URL - this is how Composer matches the credentials to the package for which the provider wants to authenticate users")]),e._v(" "),s("li",[e._v("Username - this is often an email address, but can also be any kind of unique identifier that the provider of the package uses")]),e._v(" "),s("li",[e._v("Password - this is generally the password associated with the username, however in some case, this may also be a license key")])]),e._v(" "),s("p",[e._v('Click "Save" in order to store these credentials in the user\'s global Composer configuration directory ('),s("code",[e._v("~/.config/composer/auth.json")]),e._v(").")]),e._v(" "),s("h2",{attrs:{id:"removing-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removing-credentials"}},[e._v("#")]),e._v(" Removing Credentials")]),e._v(" "),s("p",[e._v("In order to remove Composer credentials, you can simply click on the red button displayed on the same line as the Repository URL.")]),e._v(" "),s("p",[e._v('After removing credentials, please do not forget to click "Save" in order to store your new credentials configuration on the server.')]),e._v(" "),s("h1",{attrs:{id:"updating-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-credentials"}},[e._v("#")]),e._v(" Updating Credentials")]),e._v(" "),s("p",[e._v("Any credentials that are shown on the screen can be updated with any new adequate value.")]),e._v(" "),s("p",[e._v('After updating the value, please do not forget to click the "Save" button in order your new credentials configuration on the server.')]),e._v(" "),s("h2",{attrs:{id:"circle-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#circle-permissions"}},[e._v("#")]),e._v(" Circle Permissions")]),e._v(" "),s("p",[e._v("The ability to manage a site's Composer packages is determined by the "),s("code",[e._v("server:manage-packages")]),e._v(" permission. This permission will also allow the circle member to manage a server's Composer packages too.")])])}),[],!1,null,null,null);t.default=r.exports}}]);