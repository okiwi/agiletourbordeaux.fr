/* override theme.js function to remove social networks buttons
 * handlePrettyPhoto() call needs to be commented in theme.js
 */
$("a[data-gal^='prettyPhoto']").prettyPhoto({
    theme: 'dark_square',
    social_tools: ''
});
