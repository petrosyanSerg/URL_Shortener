import { ReactComponent as Facebook } from 'images/icon-facebook.svg';
import { ReactComponent as Instagram } from 'images/icon-instagram.svg';
import { ReactComponent as Pinterest } from 'images/icon-pinterest.svg';
import { ReactComponent as Twitter } from 'images/icon-twitter.svg';


export const footer = {
	menu: [
		{
			id: 1,
			groupTitle: 'Resources',
			links: [
				{
					text: 'Blog',
					url: 'https://www.linkedin.com/in/petrosyanserg/recent-activity/all/',
				},
				{
					text: 'Developers',
					url: 'https://www.linkedin.com/in/petrosyanserg/',
				},
				{
					text: 'Support',
					url: 'https://shrtco.de/',
				},
			],
		},
		{
			id: 2,
			groupTitle: 'Company',
			links: [
				{
					text: 'About',
					url: 'https://en.wikipedia.org/wiki/URL_shortening',
				},
			],
		},
	],
	socials: [
		{
			id: 1,
			image: Facebook,
			url: 'https://www.facebook.com/profile.php?id=100010460433530',
			alt: 'facebook',
		},
		{
			id: 2,
			image: Twitter,
			url: 'https://twitter.com/elonmusk',
			alt: 'twitter',
		},
		{
			id: 3,
			image: Pinterest,
			url: 'https://www.linkedin.com/in/petrosyanserg/',
			alt: 'pinterest',
		},
		{
			id: 4,
			image: Instagram,
			url: 'https://www.instagram.com/_petrosyanserg_/',
			alt: 'instagram',
		},
	]
};
