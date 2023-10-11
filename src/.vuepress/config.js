const { description } = require("../../package");

module.exports = {
  base: "/",
  title: "Tech Eats",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta",{ name: "apple-mobile-web-app-status-bar-style", content: "black" }],
	["link", {rel: "icon", type: "image/png", href: "https://raw.githubusercontent.com/egg-lou/egg-lou-image-resources/main/dorm-kitchen-logo.png"}]
  ],
	themeConfig: {
		logo: 'https://raw.githubusercontent.com/egg-lou/egg-lou-image-resources/main/dorm-kitchen-logo.png',
		repo: '',
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: 'Foods',
				link: '/foods/',
			},
			{
				text: 'Creator',
				link: 'https://github.com/egg-lou',
			},
			{
				text: 'GitHub',
				link: 'https://github.com/egg-lou/tech-eats',
			},
		],
		sidebar: {
			'/foods/': [
				{
					title: 'Foods',
					collapsable: false,
					children: [
						{
							title: 'Breakfast',
							children:[
							]
						},
						{
							title: 'Lunch',
							children:[
								'Master-Buffalo',
							]
						},

						{
							title: 'Dinner',
							children:[
							]
						},
						{
							title: 'Desserts',
							children:[
								'Cinnamon-Roll',
							]
						},
						{
							title: 'Snacks',
							children:[
							]
						},
           
					],
				},
			],
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};

