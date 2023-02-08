module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction', 'used-terms-and-definitions'],
    },
    {
        title: "App: Contacts",
        collapsable: false,
        children: prefix('app_contacts', [
            'your-contacts',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
