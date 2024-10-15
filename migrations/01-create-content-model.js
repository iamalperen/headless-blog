module.exports = function (migration) {
    /**
     * Author Content Type
     */
    const author = migration.createContentType('author')
        .name('Author')
        .description('Yazarların bilgilerini tutar.')
        .displayField('name');

    author.createField('name')
        .name('Name')
        .type('Symbol')
        .required(true);

    author.createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .validations([{ unique: true }]);

    author.createField('bio')
        .name('Bio')
        .type('Text');

    author.createField('avatar')
        .name('Avatar')
        .type('Link')
        .linkType('Asset');

    author.createField('twitter')
        .name('Twitter')
        .type('Symbol');

    author.createField('linkedin')
        .name('LinkedIn')
        .type('Symbol');

    author.createField('instagram')
        .name('Instagram')
        .type('Symbol');

    author.changeFieldControl('name', 'builtin', 'singleLine');
    author.changeFieldControl('slug', 'builtin', 'singleLine');
    author.changeFieldControl('bio', 'builtin', 'multipleLine');
    author.changeFieldControl('avatar', 'builtin', 'assetLinkEditor');
    author.changeFieldControl('twitter', 'builtin', 'singleLine');
    author.changeFieldControl('linkedin', 'builtin', 'singleLine');
    author.changeFieldControl('instagram', 'builtin', 'singleLine');

    /**
     * Tag Content Type
     */
    const tag = migration.createContentType('tag')
        .name('Tag')
        .description('Gönderileri etiketlemek için kullanılır.')
        .displayField('name');

    tag.createField('name')
        .name('Name')
        .type('Symbol')
        .required(true);

    tag.createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .validations([{ unique: true }]);

    tag.changeFieldControl('name', 'builtin', 'singleLine');
    tag.changeFieldControl('slug', 'builtin', 'singleLine');

    /**
     * Category Content Type
     */
    const category = migration.createContentType('category')
        .name('Category')
        .description('Gönderileri kategorize etmek için kullanılır.')
        .displayField('name');

    category.createField('name')
        .name('Name')
        .type('Symbol')
        .required(true);

    category.createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .validations([{ unique: true }]);

    category.createField('description')
        .name('Description')
        .type('Text');

    category.changeFieldControl('name', 'builtin', 'singleLine');
    category.changeFieldControl('slug', 'builtin', 'singleLine');
    category.changeFieldControl('description', 'builtin', 'multipleLine');

    /**
     * Post Content Type
     */
    const post = migration.createContentType('post')
        .name('Post')
        .description('Blog yazılarını temsil eder.')
        .displayField('title');

    post.createField('title')
        .name('Title')
        .type('Symbol')
        .required(true);

    post.createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .validations([{ unique: true }]);

    post.createField('excerpt')
        .name('Excerpt')
        .type('Text');

    post.createField('content')
        .name('Content')
        .type('RichText')
        .required(true);

    post.createField('featuredImage')
        .name('Featured Image')
        .type('Link')
        .linkType('Asset');

    post.createField('author')
        .name('Author')
        .type('Link')
        .linkType('Entry')
        .required(true)
        .validations([
            {
                linkContentType: ['author'],
            },
        ]);

    post.createField('tags')
        .name('Tags')
        .type('Array')
        .items({
            type: 'Link',
            linkType: 'Entry',
            validations: [
                {
                    linkContentType: ['tag'],
                },
            ],
        });

    post.createField('category')
        .name('Category')
        .type('Link')
        .linkType('Entry')
        .validations([
            {
                linkContentType: ['category'],
            },
        ]);

    post.createField('publishedDate')
        .name('Published Date')
        .type('Date')
        .required(true);

    post.createField('isPopular')
        .name('Is Popular')
        .type('Boolean');

    post.createField('views')
        .name('Views')
        .type('Integer')
        .defaultValue({
            'en-US': 0,
        });

    post.changeFieldControl('title', 'builtin', 'singleLine');
    post.changeFieldControl('slug', 'builtin', 'singleLine');
    post.changeFieldControl('excerpt', 'builtin', 'multipleLine');
    post.changeFieldControl('content', 'builtin', 'richTextEditor');
    post.changeFieldControl('featuredImage', 'builtin', 'assetLinkEditor');
    post.changeFieldControl('author', 'builtin', 'entryLinkEditor');
    post.changeFieldControl('tags', 'builtin', 'entryLinksEditor');
    post.changeFieldControl('category', 'builtin', 'entryLinkEditor');
    post.changeFieldControl('publishedDate', 'builtin', 'datePicker', {
        ampm: '24',
        format: 'dateonly',
    });
    post.changeFieldControl('isPopular', 'builtin', 'boolean');
    post.changeFieldControl('views', 'builtin', 'numberEditor');
};
