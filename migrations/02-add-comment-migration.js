module.exports = function (migration) {
    /**
     * Comment Content Type
     */
    const comment = migration.createContentType('comment')
        .name('Comment')
        .description('Kullanıcıların blog yazılarına eklediği yorumları içerir.')
        .displayField('author');

    comment.createField('author')
        .name('Author')
        .type('Symbol')
        .required(true);

    comment.createField('email')
        .name('Email')
        .type('Symbol')
        .required(true);

    comment.createField('content')
        .name('Content')
        .type('Text')
        .required(true);

    comment.createField('post')
        .name('Post')
        .type('Link')
        .linkType('Entry')
        .required(true)
        .validations([
            {
                linkContentType: ['post'],
            },
        ]);

    comment.createField('publishedDate')
        .name('Published Date')
        .type('Date')
        .required(true);

    comment.changeFieldControl('author', 'builtin', 'singleLine');
    comment.changeFieldControl('email', 'builtin', 'singleLine');
    comment.changeFieldControl('content', 'builtin', 'multipleLine');
    comment.changeFieldControl('post', 'builtin', 'entryLinkEditor');
    comment.changeFieldControl('publishedDate', 'builtin', 'datePicker', {
        ampm: '24',
        format: 'dateonly',
    });

    /**
     * Post Content Type Update: Add comments field
     */
    const post = migration.editContentType('post');

    post.createField('comments')
        .name('Comments')
        .type('Array')
        .items({
            type: 'Link',
            linkType: 'Entry',
            validations: [
                {
                    linkContentType: ['comment'],
                },
            ],
        });

    post.changeFieldControl('comments', 'builtin', 'entryLinksEditor');
};
