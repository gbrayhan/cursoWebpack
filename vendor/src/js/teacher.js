import React, {Component} from 'react';

function Teacher(props) {
	return (
		<li className = "teacher">
			<p>
				{props.name} <a href = {`https://twitter.com/${props.twitter}`}>@{props.twitter}</a> 
			</p>		
		</li>
	)
};

export {Teacher};