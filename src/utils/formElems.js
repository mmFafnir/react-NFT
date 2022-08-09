

export const formType = {
    INPUT: 'INPUT',
    TEXTAREA: 'TEXTAREA',
}
export const formColor = {
    GREEN: 'GREEN'
}

export const formElems = [
    {
        title: 'Your name',
        type: formType.INPUT,
        name: 'name',
        require: true,
    },
    {
        title: 'Your ETH address',
        type: formType.INPUT,
        name: 'eth',
        color: formColor.GREEN,
        require: true,
    },
    {
        title: 'Your email',
        type: formType.INPUT,
        name: 'email',
        require: true,
    },
    {
        title: 'Your age',
        type: formType.INPUT,
        name: 'age',
        require: true,
    },
    {
        title: 'What is your educational background? Or where do you plan to study?',
        type: formType.TEXTAREA,
        name: 'plan',
        require: false,
    },
    {
        title: 'What department do you want to join in our community?',
        type: formType.TEXTAREA,
        name: 'department',
        require: false,
    },
    {
        title: 'What are your best skills? Describe them.',
        type: formType.TEXTAREA,
        name: 'skills',
        require: false,
    },
    {
        title: 'What projects have you worked on? (Research, Business, etc)',
        type: formType.TEXTAREA,
        name: 'projects',
        require: false,
    },
    {
        title: 'How do you think you could contribute to our community?',
        type: formType.TEXTAREA,
        name: 'contribute',
        require: false,
    },
]





