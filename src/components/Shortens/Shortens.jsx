import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import { selectLinks } from 'store/slice/linkSlice'
import { Button } from 'components/Button';
import classes from './Shortens.module.scss';


const Shortens = () => {
	const [copiedLinks, setCopiedLink] = useState(null);
	const links = useSelector(selectLinks);

	const copyToClipboard = (link) => {
		navigator.clipboard.writeText(link).then(() => {
			setCopiedLink(link);
		})
	}

	if (!links?.length) return null;

	return (
		<section className={classes.Shortens}>
			<div className='container'>
				{links.map(item => (
					<AnimatePresence key={item.code}>
						<motion.div
							className={classes.item}
							data-active={copiedLinks === item.full_short_link2}
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
						>
							<span>{item.original_link}</span>
							<a href={item.original_link} target='_blank'>{item.full_short_link}</a>
							<Button
								variant="square"
								onClick={() => copyToClipboard(item.full_short_link)}
							>
								{copiedLinks === item.full_short_link ? 'Copied!' : 'Copy'}
							</Button>
						</motion.div>
					</AnimatePresence>
				))}
			</div>
		</section>
	);
};

export { Shortens };