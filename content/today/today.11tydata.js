const { DateTime } = require("luxon");

module.exports = {
	tags: [
		"today"
	],
	layout: "layouts/post.njk",
	eleventyComputed: {
		// Default the title to the post's date, formatted the same way
		// as the `readableDate` filter, unless a title is set explicitly.
		title: (data) => data.title || DateTime.fromJSDate(data.page.date).toFormat("dd LLLL yyyy"),
	},
};
