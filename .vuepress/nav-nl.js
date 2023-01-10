module.exports = [
    {
        title: "Aan de slag",
        collapsable: false,
        children: ['introductie'],
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
