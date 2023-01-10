(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{384:function(e,r,t){"use strict";t.r(r);var a=t(44),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),t("li",[t("a",{attrs:{href:"#server-network"}},[e._v("Server Network")])]),t("li",[t("a",{attrs:{href:"#firewalls"}},[e._v("Firewalls")]),t("ul",[t("li",[t("a",{attrs:{href:"#port-ranges"}},[e._v("Port Ranges")])]),t("li",[t("a",{attrs:{href:"#allow-deny-rules"}},[e._v("Allow / Deny Rules")])])])]),t("li",[t("a",{attrs:{href:"#default-firewall-rules"}},[e._v("Default Firewall Rules")])]),t("li",[t("a",{attrs:{href:"#circle-permissions"}},[e._v("Circle Permissions")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Forge allows you to manage your server's firewall as well as configure which servers can connect to other servers via the "),t("strong",[e._v("Network")]),e._v(" management panel within your server's management dashboard.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Manually Managing Rules")]),e._v(" "),t("p",[e._v("If you manually create a "),t("code",[e._v("ufw")]),e._v(" rule on your server, this will not be reflected in the Forge dashboard. Forge is only aware of rules created via the Forge dashboard.")])]),e._v(" "),t("h2",{attrs:{id:"server-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-network"}},[e._v("#")]),e._v(" Server Network")]),e._v(" "),t("p",[e._v("Server networks make it painless to use a connected server as a separate database, cache, or queue server. For a server to be connected to an internal network, it must:")]),e._v(" "),t("ul",[t("li",[e._v("Be created by the same provider.")]),e._v(" "),t("li",[e._v("Be using the same server provider credentials.")]),e._v(" "),t("li",[e._v("Be owned by the same user.")]),e._v(" "),t("li",[e._v("Be within the same region.")])]),e._v(" "),t("p",[e._v("Once you have granted access from one server to another, you may access the other server via its private IP address.")]),e._v(" "),t("h2",{attrs:{id:"firewalls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firewalls"}},[e._v("#")]),e._v(" Firewalls")]),e._v(" "),t("p",[e._v("You can configure and manage your firewall from within the Forge dashboard via the "),t("strong",[e._v("Network")]),e._v(" tab on the server's management dashboard. Firewalls are used to open ports on your server to the Internet. For example, when using FTP you may need to open port "),t("code",[e._v("21")]),e._v(".")]),e._v(" "),t("p",[e._v("For added security, you can restrict opened ports to specific IP addresses.")]),e._v(" "),t("h3",{attrs:{id:"port-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port-ranges"}},[e._v("#")]),e._v(" Port Ranges")]),e._v(" "),t("p",[e._v("When creating new firewall rules, you may supply a range of ports to open ("),t("code",[e._v("8000:8010")]),e._v("), which will open every port from "),t("code",[e._v("8000")]),e._v(" to "),t("code",[e._v("8010")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"allow-deny-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allow-deny-rules"}},[e._v("#")]),e._v(" Allow / Deny Rules")]),e._v(" "),t("p",[e._v("You may select whether to allow or deny the traffic that matches a given rule. By creating a "),t("code",[e._v("deny")]),e._v(" rule, you will be preventing traffic from reaching the service.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Deny Rules Run First")]),e._v(" "),t("p",[e._v("To make "),t("code",[e._v("deny")]),e._v(" rules work correctly, they are added at a higher priority than "),t("code",[e._v("allow")]),e._v(" rules. Each new "),t("code",[e._v("deny")]),e._v(" rule for IPv4 addresses will be added above any existing "),t("code",[e._v("deny")]),e._v(" rules. UFW does not currently support IPv6 rules at first priority.")])]),e._v(" "),t("h2",{attrs:{id:"default-firewall-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-firewall-rules"}},[e._v("#")]),e._v(" Default Firewall Rules")]),e._v(" "),t("p",[e._v("As part of the provisioning process, Forge will automatically configure three rules:")]),e._v(" "),t("ul",[t("li",[e._v("SSH - Allow port 22 traffic from any IP Address")]),e._v(" "),t("li",[e._v("HTTP - Allow port 80 traffic from any IP Address")]),e._v(" "),t("li",[e._v("HTTPS - Allow port 443 traffic from any IP Address")])]),e._v(" "),t("p",[e._v("You should note that although incoming traffic is allowed on port 22 for SSH connections, SSH connections that do not use an SSH key are not accepted. Therefore, it is not possible to brute force an SSH connection to your server. "),t("strong",[e._v("You should never delete the rule that allows SSH traffic to your server; otherwise, Forge will be unable to connect to or manage your server.")])]),e._v(" "),t("h4",{attrs:{id:"deleted-ssh-firewall-rule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleted-ssh-firewall-rule"}},[e._v("#")]),e._v(" Deleted SSH Firewall Rule")]),e._v(" "),t("p",[e._v("If you have deleted the firewall rule (typically port 22) from the Forge UI or directly on the server, Forge will be unable to connect to the server and will be unable to re-create this rule for you.")]),e._v(" "),t("p",[e._v("To fix this, you will need to access the server directly via your provider and manually add the SSH port again. DigitalOcean allows you to connect remotely through their dashboard.")]),e._v(" "),t("p",[e._v("Forge uses "),t("code",[e._v("ufw")]),e._v(" for the firewall, so once you've connected to the server you need to run the following as "),t("code",[e._v("root")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ufw allow "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("\n")])])]),t("h2",{attrs:{id:"circle-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circle-permissions"}},[e._v("#")]),e._v(" Circle Permissions")]),e._v(" "),t("p",[e._v("You may grant a circle member authority to manage the server's network by granting the "),t("code",[e._v("server:manage-network")]),e._v(" permission.")])])}),[],!1,null,null,null);r.default=s.exports}}]);