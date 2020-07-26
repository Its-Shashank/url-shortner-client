import React from 'react';
import './landing.scss';
import LinkShortner from '../../assets/undraw_link_shortener.svg';
import Card from '../../components/Cards/Cards';
import Navbar from '../../components/Navigation/Nav';

function Landing() {
	return (
		<div className='landing-container'>
			<Navbar />
			<div className='intro-container'>
				<div className='intro-header'>
					<h1>Come to shorten your big URLs.</h1>
					<h3>
						You've reached correct place. Build and protect your brand with
						powerful short URLs.
					</h3>
					<button className='intro-header-btn'>Get started for free.</button>
				</div>
				<img src={LinkShortner} alt='' className='intro-image' />
			</div>
			<div className='auth-section'>
				<h1>Signup to Shorten your URLs here on Shorty.</h1>
				<button className='signup-btn'>Click here</button>
			</div>
			<div className='features'>
				<div className='features-header'>
					<h2>Grow Your Brand With Every Click</h2>
					<h3>
						Branded links can drive a 34% higher click-through versus
						non-branded links, meaning they help get more eyeballs on your brand
						and its content.
					</h3>
				</div>
				<div className='features-cards'>
					<Card
						headingBig={'Inspire trust'}
						headingSmall={
							'As your click numbers go up, your brand recognition increases. And the more that grows, the more confident people become in the integrity of your content and communications.'
						}
					/>
					<Card
						headingBig={'Boost results'}
						headingSmall={
							'Better deliverability and improved click-through are just the start. Rich link-level data allows you to understand who is clicking your links, as well as when and where, so you can make smarter decisions around the content and communications you share.'
						}
					/>
					<Card
						headingBig={'Gain control'}
						headingSmall={
							'On top of being able to fully customize your links, auto-branding boosts awareness of your brand by giving you credit for your content and more insight into how it’s being consumed.'
						}
					/>
				</div>
			</div>
			<div className='auth-section'>
				{/* <h1>Signup to Shorten your URLs here on Shorty.</h1> */}
				<button className='signup-btn'>Get started</button>
			</div>
		</div>
	);
}

export default Landing;
